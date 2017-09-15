import Ember from 'ember';
import layout from '../templates/components/loader-base';

const { assert, computed, on, typeOf } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['loader-base'],

  divCount: null,

  setupComponent: on('init', function () {
    assert('{{loader-base}} requires the divCount property as number.', typeOf(this.get('onChange')) !== 'number');
  }),

  divs: computed('divCount', function () {
    const divCount = this.get('divCount');
    const divs = [];

    if (typeOf(divCount) !== 'number') {
      return divs;
    }

    for (let index = 0; index < divCount; index++) {
      divs.push(index);
    }

    return divs;
  })
});
