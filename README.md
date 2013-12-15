# [The Remote Manifesto](http://remotemanifesto.com)

## Compass and Grunt

Do 'grunt' in the site folder, from terminal before deploying to GitHub Pages.

### CSS

* Run compass watch in the css folder, and run grunt watch in the root folder.
* When main.scss is updated compass generates css/build/main.css
* When that file is created, grunt runs autoprefix and creates css/build/autoprefix/main.css
* When that file is created, grunt runs cssmin and creates css/main.css (product ready, and in the right location for layouts/default.html to pick up)

### JS

* js/main.js and js/plugins.js are being concatenated and minified with 'grunt', they're not included in 'grunt watch'. Add other js files in Gruntfile.js.

### Image Opimisation

Grunt is also watching to optimise images.

## Spiel for public repo

The personal blog of [@Paddy](https://twitter.com/Paddy "Follow me on Twitter") O’Hanlon. I write about design, the web, travel, climbing, and sometimes language learning.

## About the site

* Powered by [Jekyll CMS](http://jekyllrb.com/).
* [Typekit](https://typekit.com/) webfonts.
* [Disqus](https://disqus.com/) comments.
* Handcrafted responsive design, using [Compass](http://compass-style.org/) and [Sass](http://sass-lang.com/).
* Using quite a few [H5BP](http://html5boilerplate.com/) components.
