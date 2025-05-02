---
title: ExtendScript and the power of small delays
date: 2025-5-2
description: Lessons in curbing CPU overload
tag: JavaScript, ExtendScript, Adobe Illustrator
author: Corin
---

# Curbing CPU overload: the power of small delays

Lately I've been working on a translation tool that plugs into Adobe Illustrator, which will help AFP's graphics department automatically **publish data visualizations in multiple languages**.

The challenge of a translation tool for *graphics* is that translating text between languages **changes its length**, and the new text then needs to be fit back into a coherent visual layout. 

Fitting text into the right place without overlaps means taking lots measurements, adjusting various elements, then taking more measurements etc., and I was running into a problem with high CPU usage that sometimes made Illustrator freeze.

I tried out various optimizations, but what really helped stabilize performance was, counterintuitively, making it **run *more slowly*** instead of speeding it up. It was a good lesson about how to manage resources in programming languages and scripting environments that don't let you control them directly.

## To move fast, go slowly

Many scripting environments—including [ExtendScript](https://extendscript.docsforadobe.dev/) for Adobe applications—run operations sequentially on a single thread. This can cause a problem where a script inadvertently becomes a CPU hog, refusing to yield processing time to essential system operations.

The fix—or at least, the one that worked for me—was to add short, strategic delays into processing loops. 

Here's a simple implementation in ExtendScript (hence the pre-ES6 syntax):

```javascript
// Process items in a collection
for (var i = 0; i < items.length; i++) {
    processItem(items[i]);
    // Add a pause every few items
    if (i % 5 === 0) {
        $.sleep(20); // Pause for 20 milliseconds
    }
}
```

The delay of 20ms—imperceptible to users—then allows the system to handle other tasks and prevents CPU saturation.

What surprised me about this (perhaps because I don't usually work with scripting environments?) was that adding tiny delays made my scripts complete _much faster_ overall. 

Previously, when I ran my translation script on large, complex graphics documents, it would trigger some kind of system-level resource throttling that would slow execution down to a crawl. Adding the small delays prevented the script from hitting whatever threshold was triggering this, allowing it to run on complex graphics without problem.

## Adapting to complexity

To further optimize this optimization, I'm also trying to adapt the level of delays to the complexity of each operation. So a line of one or two words in an isolated text box doesn't need much delay added, whereas a long chunk of text in a box that borders with others should add a longer pause, because it's more computationally demanding.

The implementation ends up something like:

```javascript
// Add longer delays for more complex operations
var processingComplexity = calculateComplexity(item);
if (processingComplexity > highThreshold) {
    $.sleep(100); // Longer pause for complex work
} else if (processingComplexity > mediumThreshold) {
    $.sleep(50);  // Medium pause
} else {
    $.sleep(10);  // Short pause for simple operations
}
```
As someone who mostly writes Python code to process data, developing a software plugin that is executed inside a different and (to me) fairly opaque environment has been a steep learning curve. 

I've enjoyed the challenge so far, and it feels like a real step up in responsibility to build something that will be used in production by a major news agency.