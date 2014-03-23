---
layout: post
title:  "A simple flexbox example that gracefully degrades"
description: Accompanying flexbox praise are complaints that it doesn’t degrade and so can’t be used (yet). Here is a simple case where it can work.
categories: code
tags: CSS
location: Brussels, Belgium
---

The CSS layout module `flexbox` is incredibly promising, but one of its main criticisms is the lack of a fallback for non-supporting browsers. Unlike `border-radius`, for example, where round corners will fallback to square corners, flexbox layouts will get completely messed up in most cases. Most, but not all.

Here is a simple use of flexbox I implemented recently on a commercial site, which gracefully degrades.

<figure>
  <img src="/assets/flexbox-reorder/everythingnohands-large-screen.png" alt="Screenshot of the homepage of Every thing no hands dot com, from a MacBook Pro, showing a blog post with a header above its excerpt">
  <figcaption>The <a href="http://everythingnohands.com">Everythingnohands.com</a> homepage, featuring a blog post with a header above its excerpt</figcaption>
</figure>

<figure>
  <img src="/assets/flexbox-reorder/everythingnohands-small-screen.png" alt="Screenshot of the homepage of Every thing no hands dot com, from an iPhone, showing a blog post with a header below its excerpt">
  <figcaption>The same page on a smaller screen, showing the same blog post with a header below its excerpt</figcaption>
</figure>

On the small screen, or mobile version, of the site—whichever is more PC these days—notice the header appears below the post excerpt, instead of above. This is done with the flexbox `order` property.

For browsers that don’t support flexbox, they see something like this:

<figure>
  <img src="/assets/flexbox-reorder/everythingnohands-small-screen-no-flexbox.png" alt="Screenshot of the homepage of Every thing no hands dot com, from an mobile device browser that does not support flexbox, showing a fallback with the blog post with a header above its excerpt. The same as on the MacBook Pro, desktop screenshot">
  <figcaption>The same page on a smaller screen whose browser does not support flexbox. The header appears above the post excerpt, as on the desktop.</figcaption>
</figure>

This CodePen shows how it works, using [Modernizr](http://modernizr.com/) to style only for browsers that support `flexbox`.

<p data-height="268" data-theme-id="3179" data-slug-hash="eHAai" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/paddyohanlon/pen/eHAai'>Simple flexbox use that degrades gracefully</a> by paddyohanlon (<a href='http://codepen.io/paddyohanlon'>@paddyohanlon</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

There is design question as to whether this technique should be used as it is in this example. Is it right to flip the content like that?

The decision was made to have the image appear before title on small screens so people could see the featured image or video for the latest post above “the fold”. It makes sense as the site’s content, and business model, is focused around image and video based media. The majority of people accessing the site with a mobile device use an iPhone, and mobile Safari and Chrome now both support `flexbox`, so the primary mobile audience are delivered what is considered to be the best experience. Users with non-supporting devices still have access to the same content, they just have to scroll a little generally.

### Further Flexbox Reading

* [Using Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes), MDN.
* [A Complete Guide to Flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/), CSS Tricks.