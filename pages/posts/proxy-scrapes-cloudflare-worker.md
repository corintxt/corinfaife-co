---
title: Using a Cloudflare Worker to proxy data scrapes
date: 2026-03-30
description: Collecting data while respecting robots.txt
tag: Cloudflare, Python, JavaScript,scraping, proxy
author: Corin
---

# How to use a Cloudflare Worker to proxy data scrapes

With oil prices rising and gas prices at the pump following on, I've been working on a project to scrape and track national gas prices from [AAA Fuel Prices](https://gasprices.aaa.com/).

The script ran well for a few weeks, but then AAA enabled Cloudflare bot protection, and the scraper got a `403: Forbidden` error each time.

I checked [the site's `robots.txt`](https://gasprices.aaa.com/robots.txt) and saw that it effectively does allow scraping, as long as there's a reasonable delay between requests. But my automated script – which only runs once per day! – was still being flagged as a bot by Cloudflare.

After some research with Gemini, I learned that if scraping the site *is* permitted, you can run a proxy on Cloudflare's own network, use it to access the site's content, then route the HTML back to the data extraction part of the code.

Here are a few notes on how it works.

## Scraping with a serverless proxy worker

There are now two parts to my data scraper instead of one: 

* The original scraper, which is a small Python application running as a Google Cloud Service
* A serverless "proxy", coded in JavaScript and running on Cloudflare's edge network

Whereas the original Python scraper fetched data from the price tracking site, it now makes an HTTP request to the proxy endpoint, which in turn visits AAA and returns back the site's HTML.

I won't get into the Python part much further, because essentially I just switched out the original URL for a new one. Using a Cloudflare Worker to run a proxy was much more interesting.

### About Cloudflare Workers

A [Cloudflare Worker](https://workers.cloudflare.com/) is a serverless function (and potentially a much more complex application) that runs on Cloudflare's edge network.

We'll use one of these Workers to proxy an external request so that for the Cloudflare-protected site, it appears to come from *inside* of Cloudflare's network.

After the Cloudflare protection was enabled, the AAA website began to load some dynamic content with JavaScript in order to deter malicious bots. So our Worker will use Cloudflare's [Browser Rendering](https://developers.cloudflare.com/browser-rendering/) features to launch a headless browser, wait for the page to load, then capture the page HTML.

### Local setup 

First we need to set up the project with the Cloudflare CLI:

```bash
npm create cloudflare@latest -- demo-scraper-proxy
```
This prompts us with some options where we need to choose `Hello World` -> `Worker only` -> `JavaScript`.

Then inside our new project directory we install Puppeteer:

```bash
cd demo-scraper-proxy
npm install @cloudflare/puppeteer
```

Cloudflare's CLI for managing Worker projects is named Wrangler. So we make a file named `wrangler.jsonc` (JSON with comments) with some configuration options for our Worker:

**wrangler.jsonc**:

```jsonc
{
    "name": "demo-scraper-proxy",
    "main": "src/index.js",
    "compatibility_date": "2026-03-10",
    "compatibility_flags": [
        "nodejs_compat"
    ],
    "browser": {
        "binding": "MYBROWSER"
    }
}
```
The last of these options is important, as it specifies that the worker should have access to a web browser.

We then add the following code to `src/index.js`, which defines the "Worker" itself. 

The worker will receive a URL, launches a Chromium instance using the Browser Rendering API, waits for the page to fully execute its JavaScript, and returns the final HTML.

**index.js**:

```js
import puppeteer from "@cloudflare/puppeteer";

export default {
  async fetch(request, env) {
    const { searchParams } = new URL(request.url);
    let targetUrl = searchParams.get("url") || "https://gasprices.aaa.com/";

    const browser = await puppeteer.launch(env.MYBROWSER);
    const page = await browser.newPage();

    try {
      // Navigate to the site and wait for it to be fully loaded
      await page.goto(targetUrl, { waitUntil: "networkidle2" });

      // Wait up to 10 seconds for the specific table to appear
      await page.waitForSelector(".table-mob", { timeout: 10000 });

      const html = await page.content();
      await browser.close();
      // Return the page HTML
      return new Response(html, {
        headers: { "Content-Type": "text/html" }
      });
    } catch (e) {
      await browser.close();
      return new Response(`Error: ${e.message}`, { status: 500 });
    }
  }
};
```

Note that in the Worker script, we simply call `puppeteer.launch(env.MYBROWSER)` – the same `MYBROWSER` referenced in the `wrangler.jsonc` file – and Cloudflare handles the logistics of provisioning the hardware and running the browser instance in the background.

### Pushing to the Cloudflare network

We can now deploy the Worker with:

```bash
npx wrangler deploy
```

This will tell us the URL of our proxy, for example `https://demo-scraper-proxy.our-chosen-subdomain.workers.dev`

As mentioned at the start, we then use this Worker endpoint in our original scraper code, and extract the relevant data from the HTML it returns.

We're now able to access the protected site while respecting the owner's `robots.txt`, and maintaining the ability to do legitimate, low-intensity data collection without being blocked.