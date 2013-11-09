---
layout: post
title:  "The Super Save at Ikea Function"
description: Buy one unit of any Ikea product and use this function to create as many as you require.
date:   2013-11-09 16:58:12
categories: articles
location: Dublin, Ireland
---

I may have been working too much this week, but I also may have worked out a huge money, and storage space, issue for the world. As well as made an eternal enemy of [Ikea](http://ikea.com).

From now on you only need purchase one unit of any Ikea product. Then just run it though this function to duplicate the product as many times as you need.

    // E.g. Create three extra chairs
    efficient_ikea_products('kitchen chair', 3);

    function efficient_ikea_products(ikea_product, quantity) {
      for (var count = 0; count < quantity; count++) {
        manifest_product(ikea_product);
      }
    }

This is really meant for reasonably low output, like having a few friends over. If you’re hosting a large event, and need to create a 1,000 forks, things are going to get a little slow.

Also, make sure the available space in your home is large enough to accommodate the new items. I accidentally generated 431 towels in my bathroom earlier this week. That was a lot scarier than it sounds. I’m working on an available space check to prevent that from happening. Should be ready for the 2.0.

P.s. If you know anyone in need of 430 towels, hit me up on Twitter, [@Paddy](https://twitter.com/paddy).