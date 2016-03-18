(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['markdownit'] };
  }

  define('markdown-it', [], vendorModule);
})();
