---
layout: post
title:  "Jekyll specific CSS and web fonts for latest posts on homepage"
description: How to add a stylesheet and web fonts for specific posts and latest posts on the homepage with Jekyll; how to do some post art direction with Jekyll.
categories: code
tags: Jekyll
location: Girona, Catalonia
---

My blog runs on [Jekyll](http://jekyllrb.com) and for my previous post, [Don’t Fear JavaScript: The Comic](http://remotemanifesto.com/code/2013/12/23/dont-fear-javascript-the-comic.html), I wanted to include a stylesheet and web font specific to that post — to style the comic strip panels while not adding unneccesary weight to other posts.

How to do post specific CSS with Jekyll has been documented, but all examples I found only explained how to include a stylesheet in individual posts, and not on a site homepage, index.html. I feature my latest post in full on the homepage and so need any styles specific to it included there, and in this case I needed a web font specific to the post too.

My site’s directory structure looks something like this:

    .
    ├── _config.yml
    ├── _drafts
    |   └── epic-novel.md
    ├── _layouts
    |   ├── default.html
    |   └── post.html
    ├── _posts
    |   └── 2013-12-23-dont-fear-javascript-the-comic.md
    ├── _site
    ├── archive
    |   └── index.md
    └── index.html

### Adding the stylesheet

I started by following [Jake Bresnehan’s write up](http://web-design-weekly.com/blog/2013/04/07/unique-post-styling-with-jekyll/), which shows how to add inline styles to a post. The following is added to default.html, in the `<head>`:

    {% raw %}
    {% if page.style %}
     <style type="text/css">
         {{ page.style }}
     </style>
    {% endif %}
    {% endraw %}

That snippet only adds the styles to a post when it has a style variable in its front-matter. To add styles to the homepage, index.html, only when that post is the latest post, I added the following:

    {% raw %}
    {% if site.posts.first.style %}
      <link rel="stylesheet" href="/css/art-direction/{{ site.posts.first.style }}">
    {% elsif page.style %}
      <link rel="stylesheet" href="/css/art-direction/{{ page.style }}">
    {% endif %}
    {% endraw %}

The first if statement checks to see if the latest post on index.html has a style variable in its front-matter, if it does the link to the named stylesheet is created.

The second statement checks to see if the file being generated is a post, as in Jake’s code snippet, and if it has a style variable in its front-matter. If it does the link to the named stylesheet is created.

You’ll notice I also opted for a separate stylesheet file, instead of adding inline styles, kept in an art-direction folder.

### Adding the web font

To include the Google web font I used the same setup, only using a “googlewebfonts” variable in the front-matter:

    {% raw %}
    {% if site.posts.first.style %}
      <link rel="stylesheet" href="/css/art-direction/{{ site.posts.first.style }}">
    {% elsif page.style %}
      <link rel="stylesheet" href="/css/art-direction/{{ page.style }}">
    {% endif %}
     
    {% if site.posts.first.googlewebfonts %}
      <link href='http://fonts.googleapis.com/css?family={{ site.posts.first.googlewebfonts }}'>
    {% elsif page.googlewebfonts %}
      <link href='http://fonts.googleapis.com/css?family={{ page.googlewebfonts }}'>
    {% endif %}
    {% endraw %}

And my front-matter for the comic post looks like this:

    {% raw %}
    ---
    layout: post
    title:  "Don’t Fear JavaScript: The Comic"
    description: A short comic strip about a hero undertaking the learning of a language called JavaScript.
    date: 2013-12-23 19:00:00
    categories: code
    tags: JavaScript, comics, fun
    location: Girona, Catalonia
    
    style: javascript-comic-001.css
    googlewebfonts: Gloria+Hallelujah
    ---
    {% endraw %}

That’s it. I considered working out a way to tidy up the “if else” statements, but the beauty of a static site generator is that the files are static, so there is nothing to be gained from brevity in this case.