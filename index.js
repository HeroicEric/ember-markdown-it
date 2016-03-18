/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-markdown-it',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/markdown-it/dist/markdown-it.min.js');
    app.import('vendor/shims/markdown-it.js');
  }
};
