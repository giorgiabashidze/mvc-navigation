MVC Ajax Navigation
===================

Ajax based navigation for MVC Web Sites. Better UX and low traffic load



How to use:
-----------
1. Insert script file 
  `altasoft.navigation.js`

2. Update _ViewStart.cshtml to:  
  `Layout = Request.Headers["pageonly"] == "true" ? null : "~/Views/Shared/_Layout.cshtml";`

3. Ajax Navigation is Ready!


Keep in mind:
-------------
* Be careful using `$(document).on(selector, ...);` If you are using it, links will be binded multiple times, you must use `$(selector).on(...);` or `$(document).off(selector);` before binding event
