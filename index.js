'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-loaders',

  treeForStyles: function treeForStyles(tree) {
    var styleTrees = [];
    var current = this;
    var app;

    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    if (app.project.findAddonByName('ember-cli-sass')) {
      var sassTree = new Funnel(path.join('node_modules', 'loaders.css', 'src'), {
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
