# [The Remote Manifesto](http://remotemanifesto.com)

## Firing up the dev environment

Run `jekyll serve --watch` in the root folder.

## Grunt & Deploy!

Stop `grunt watch` and run `grunt` in the root folder to min and concatenate js, as well as optimise images.

## Compass and Grunt CSS

* Run `compass watch` in the css folder, and run `grunt watch` in the root folder.
* When main.scss is updated compass generates css/build/main.css
* When that file is created, grunt runs autoprefix and creates css/build/autoprefix/main.css
* When that file is created, grunt runs cssmin and creates css/main.css (product ready, and in the right location for layouts/default.html to pick up)

## Grunt JS

* js/main.js and js/plugins.js are being concatenated and minified with 'grunt', they're not included in 'grunt watch'. Add other js files in Gruntfile.js.

## Grunt Image Opimisation

Grunt optimises all images in the assets folder.

## Spiel for public repo

The personal blog of [@Paddy](https://twitter.com/Paddy "Follow me on Twitter") O’Hanlon. I write about design, the web, travel, climbing, and sometimes language learning.

## About the site

* Powered by [Jekyll CMS](http://jekyllrb.com/).
* [Typekit](https://typekit.com/) webfonts.
* [Disqus](https://disqus.com/) comments.
* Handcrafted responsive design, using [Compass](http://compass-style.org/) and [Sass](http://sass-lang.com/).
* Using quite a few [H5BP](http://html5boilerplate.com/) components.
