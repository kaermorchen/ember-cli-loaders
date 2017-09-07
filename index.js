/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-loaders',

  included: function(app) {
    this._super.included(app);
  },

  treeForStyles: function treeForStyles(tree) {
    var styleTrees = [];

    if (this.app.project.findAddonByName('ember-cli-sass')) {
      var sassTree = new Funnel(path.join(this.app.bowerDirectory, 'loaders.css/src'), {
        destDir: 'ember-cli-loaders'
      });
      styleTrees.push(sassTree);
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  }
};
