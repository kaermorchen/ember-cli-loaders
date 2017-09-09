import Ember from 'ember';
import layout from '../templates/components/loader-base';

export default Ember.Component.extend({
  layout,
  classNames: ['loader-inner'],

  divCount: null
});
