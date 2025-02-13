---
title: Building a translation tool for Adobe Illustrator
date: 2025/2/11
description: A description.
tag: draft
author: Corin
---

# Building a translation tool for Adobe Illustrator
## Intro subhed

Illustrator uses ExtendScript. A subset of pre-ES6 JavaScript, also no module imports. Meaning no requests.
* Found someone who'd made an import-export function. But: no translation.
* Figured out how to execute script from within Illustrator.
    * Script can't be executed with arguments so need to write to external file and read from it.
* Made a test version with bash script

* Needed to overhaul the text box designation
* Wrote a polyfill to handle JSON

```
#include "jsonparse.jsx"
```