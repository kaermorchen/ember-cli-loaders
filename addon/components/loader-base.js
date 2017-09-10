import Ember from 'ember';
import layout from '../templates/components/loader-base';

const { assert, computed, on, typeOf } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['loader-inner'],

  divCount: null,

  setupComponent: on('init', function () {
    assert('{{loader-base}} requires the divCount property as number.', typeOf(this.get('onChange')) !== 'number');
  }),

  divs: computed('divCount', function () {
    return new Array(this.get('divCount'));
  })
});
