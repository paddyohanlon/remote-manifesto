---
layout: post
title:  "Jekyll post specific CSS and web fonts"
description: How to add a stylesheet and web fonts for a specific post with Jekyll CMS, e.g. to do some art direction.
categories: code
tags: Jekyll
location: Girona, Catalonia
---

My blog runs on the static site generator, [Jekyll](http://jekyllrb.com) and for my last post, [Don’t Fear JavaScript: The Comic](http://remotemanifesto.com/code/2013/12/23/dont-fear-javascript-the-comic.html), I wanted to include a stylesheet and web font specific to that post, to style the comic strip panels.

How to do post specific CSS with Jekyll has been documented by a few, but all examples I found only explained how to include the stylesheet on the post page, and not on the site homepage. I feature my latest post in full on the homepage and so need those styles there, and in this case needed a web font specific to the post too.

### Adding the stylesheet

I started with [Jake Bresnehan’s method](http://web-design-weekly.com/blog/2013/04/07/unique-post-styling-with-jekyll/), which allows inline styles to be added to a post:

<script src="https://gist.github.com/paddyohanlon/8212423.js"></script>

That snippet only adds the styles to the post page, to add them to the homepage, when that post is the latest post I added the following:

<script src="https://gist.github.com/paddyohanlon/8212450.js"></script>

The first if statement checks to see if the latest post on the homepage has a style property in its YAML front matter, if it does the link to the named stylesheet is output. The second statement checks to see if the current file is an individual post or page with a style property in its YAML front matter and outputs the names stylesheet if so. <sup><a href="#jekyll-specific-css-explanation" id="jekyll-specific-css-explanation1">&#8224;</a></sup>

<aside class="digression" id="jekyll-specific-css-explanation"><p><b>&#8224;</b> My explanation probably needs a little tidying from someone better qualified with Jekyll and Liquid. <a class="return-to-text" href="#jekyll-specific-css-explanation1" title="Continue reading the main text"><b>Continue reading the main text </b>&#8629;</a></p></aside>

I also opted to include a separate stylesheet file, instead of adding inline styles.

### Adding the webfont

To include the Google web font I used for the comic post, I used the same setup:

<script src="https://gist.github.com/paddyohanlon/8212569.js"></script>

And my YAML front matter for the comic post looks like this:

<script src="https://gist.github.com/paddyohanlon/8212595.js"></script>

That’s it. I considered working out a way to tidy up the “if else” statements, but the beauty of a static site is that the files are static, so there is nothing to be gained from conciseness in this case — in my opinion.