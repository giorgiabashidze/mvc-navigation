MVC Ajax Navigation
===================

Ajax based navigation for MVC Web Sites. Better UX and low traffic load



How to use:
-----------
1. Insert script file in your scripts bundle
  `altasoft.navigation.js`

2. Update _ViewStart.cshtml to:  
  `Layout = Request.Headers["pageonly"] == "true" ? null : "~/Views/Shared/_Layout.cshtml";`

3. Set main html element id to `MainContent`

<br/>
<br/>
<br/>
<br/>
Keep in mind:
-------------
* Be careful using `$(document).on(selector, ...);` If you are using it, links will be binded multiple times, you must use `$(selector).on(...);` or `$(document).off(selector);` before binding event


4. Just testing some git stuff
5. Another changed stuff _-+>