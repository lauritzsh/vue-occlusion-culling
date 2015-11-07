# Occlusion culling with Vue.js
A simple repository to demonstrate how you could implement occlusion culling (OC) using
[Vue.js](https://github.com/vuejs/vue). This method for OC is inspired from the
[Bloop](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome) post by
[James Long](https://twitter.com/jlongster).

This method assumes each row is of equal height.

## What's occlusion culling?
It's a term used in 3D computer graphics, also called [hidden surface
determination](https://en.wikipedia.org/wiki/Hidden_surface_determination), used to describe how to
hide (or rather, not render) something not visible in the view. There is no reason to render
thousands of elements if we are only going to display, say, ten at a time anyway.

I would be interested in a better word for this when it's not used for 3D graphics.

## TODO

  * Smoother scrolling in Safari
  * More (advanced) filtering examples
  * Make use of Vue components
  * Append more elements on demand
  * Write some tests
