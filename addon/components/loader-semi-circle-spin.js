import Ember from 'ember';
import layout from '../templates/components/loader-semi-circle-spin';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['semi-circle-spin'],
  layout: layout
});
