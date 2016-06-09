module.exports = {
  normalizeEntityName: function () { },

  beforeInstall: function () {
    return this.addBowerPackageToProject('loaders.css', '^0.1.2');
  },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'ember-cli-sass', target: '^5.3.1' }
    ]);
  }
};