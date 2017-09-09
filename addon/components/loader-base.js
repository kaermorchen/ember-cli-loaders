import Ember from 'ember';
import layout from '../templates/components/loader-base';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['loader-inner'],

  divCount: null,

  divs: computed('divCount', function () {
    return new Array(this.this.get('divCount'));
  })
});
