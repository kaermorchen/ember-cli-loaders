'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const resolve = require('resolve');

module.exports = {
  name: require('./package').name,

  treeForStyles(tree) {
    this._ensureFindHost();

    let styleTrees = [];
    let host = this._findHost();

    if (host.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(
        new Funnel(path.join(this.resolvePackagePath('loaders.css'), 'src'), {
          destDir: this.name,
        })
      );
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  },

  resolvePackagePath(packageName) {
    return path.dirname(
      resolve.sync(`${packageName}/package.json`, {
        basedir: this.app.project.root,
      })
    );
  },

  _ensureFindHost() {
    if (!this._findHost) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        return app;
      };
    }
  },
};
