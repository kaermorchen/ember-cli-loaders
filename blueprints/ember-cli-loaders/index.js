module.exports = {
  normalizeEntityName: function (entityName) {
    return entityName || "ember-cli-loaders";
  },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'loaders.css', target: '^0.1.2' },
      { name: 'ember-cli-sass', target: '^6.1.1' }
    ]);
  }
};
