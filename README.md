# AlpineJS
Learning path for AlpineJS along with code samples
Installation of Alpine.js
==========================

  Installation using CDN Link
  ---------------------------
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.5/dist/cdn.min.js"></script>

  Installation Using npm
  ----------------------
  npm install alpinejs

# What is Alpine.js?
  Alpine.js is a JavaScript framework that enables us to enhance our JavaScript applications with its reactive and declarative nature. It is not used to create SPAs, it just uses the nature of Angular.js to strengthen your templates.
  
  key points
  -----------
    * The main power of Alpine.js is its reactive nature.
    * Alpine.js is more like a UI interaction framework.
    * Alpine.js is also a DOM manipulation library
  
# What is the Alpine.js file structure?
  Alpine.js has no file structure also, it doesn’t currently have a CLI. We can expect that in the future, where they can give us a CLI tool we can use to scaffold a quick Alpine.js project. Just like Vue.js CLI does.For now, we manually create the files and templates and add the Alpine.js library. Since Alpine.js and Vue.js are similar in syntax, we can mimic the Vue.js file structure in our Alpine.js projects.

# What is the Alpine.js file structure?
  Alpine.js has no file structure also, it doesn’t currently have a CLI. We can expect that in the future, where they can give us a CLI tool we can use to scaffold a quick Alpine.js project. Just like Vue.js CLI does.

# Core Concepts & Directives:
* x-data: Defines the reactive data object for a component.
* x-bind (or :): Binds HTML attributes to data expressions (e.g., x-bind:class, x-bind:style).
* x-on (or @): Attaches event listeners to elements (e.g., x-on:click, x-on:submit).
* x-text: Updates the text content of an element.
* x-html: Updates the inner HTML of an element.
* x-show: Toggles element visibility based on a condition.
* x-if: Conditionally adds or removes a block of HTML from the DOM.
* x-for: Iterates over a data set to repeat a block of HTML.
* x-model: Creates two-way data binding with input elements.
* x-transition: Adds transition effects to elements when they appear or disappear.
* x-ref: Creates references to elements, accessible via the $refs magic property.
* x-init: Runs code when an element is initialized by Alpine.
* x-cloak: Hides an element until Alpine.js has finished initializing it.
* x-ignore: Prevents a block of HTML from being initialized by Alpine. 



# References
 > https://medium.com/@Omojunior11/building-a-notes-app-with-alpine-js-a-step-by-step-guide-362117225e1c
 > https://www.youtube.com/watch?v=r5iWCtfltso&ab_channel=TraversyMedia
