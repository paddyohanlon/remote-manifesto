---
layout: post
title:  "Sublime Text search by file type"
description: How to search by file type, e.g. .scss, not .css, in Sublime Text.
categories: productivity
tags: Sublime Text
location: Girona, Catalonia
---

In Sublime Text go to `Find` &rarr; `Find in Files`, or type `shift + cmd + F`.

In the ‘Where’ field, enter `\*.fileextension`. E.g. `\*.scss`, to search only .scss files — excluding .css files.

<img src="/assets/sublime-text-search-file-type.png" alt="Screenshot of Sublime Text 2, showing searching by a specific file type, specifically *.scss">

Before I found this option I was excluding .css files from projects via settings. That confused the heck out of me several times, wondering where all my CSS files had gone, forgetting I had added that setting.