requirejs.config({
  baseUrl: '../dist/',
  paths: {
    lockFocus: 'lock-focus.min'
  }
});

requirejs(['lockFocus'], function(lockFocus) {
  // Run 'init' method on page load (or whenever required)
  lockFocus.init();
});
