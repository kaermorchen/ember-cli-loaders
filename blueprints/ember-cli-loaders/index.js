module.exports = {
  normalizeEntityName(entityName) {
    return entityName || "ember-cli-loaders";
  },

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'loaders.css', target: '^0.1.2' },
      { name: 'ember-cli-sass', target: '^10.0.0' },
      { name: 'sass', target: '^1.17.0' },
    ]);
  }
};
