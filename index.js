/* jshint node: true */
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

'use strict';

module.exports = {
  name: 'ember-markdown-it',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/markdown-it.min.js');
    app.import('vendor/shims/markdown-it.js');
  },

  treeForVendor(vendorTree) {
    var markdownItTree = new Funnel(path.join(this.project.root, 'node_modules', 'markdown-it', 'dist'), {
      files: ['markdown-it.min.js'],
    });

    return new MergeTrees([vendorTree, markdownItTree]);
  },
};
