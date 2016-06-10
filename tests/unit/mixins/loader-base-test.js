import Ember from 'ember';
import LoaderBaseMixin from 'ember-cli-loaders/mixins/loader-base';
import { module, test } from 'qunit';

module('Unit | Mixin | loader base');

// Replace this with your real tests.
test('it works', function(assert) {
  let LoaderBaseObject = Ember.Object.extend(LoaderBaseMixin);
  let subject = LoaderBaseObject.create();
  assert.ok(subject);
});
