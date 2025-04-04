---
title: Use local certificate for SSL verification
date: 2025-4-4
tag: python, API, SSL
author: Corin
---

# Use local certificate for SSL verification

I was writing a Python script to make a POST request to an internal API developed by my employer, but kept running into problems with SSL verification.

At first, in the development version of the script I simply disabled verification and ignored the problem for a while:

```python
import requests
data = {...}
headers = {...}
response = requests.post(api_url, 
                        data=data, 
                        headers=headers, 
                        verify=False)
```

The script worked fine, but threw a warning each time telling me that disabling verification was insecure. When it came to making the production version, I wanted to do things properly, and found out that I could verify the request by referencing a local copy of the domain's SSL certificate.

The API operates at a subdomain of my employers main website, [AFP.com](https://www.afp.com/). So I visited it with Chrome's certificate viewer, which can be accessed through the address bar:

![AFPSSL](/images/2025/afpssl.png)

And exported a copy of the certificate. (For verification to work properly I needed to select the option "certificate chain" rather than "single certificate".)

![AFPSSL](/images/2025/certexport.png)

Then, I replaced `verify=False` with a reference to the local copy of the certificate:

```
response = requests.post(api_url, data=data, 
                                headers=headers, 
                                verify='path/to/local/certificate')
```
And the insecure verification warning disappeared.