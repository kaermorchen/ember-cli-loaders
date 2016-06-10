import Ember from 'ember';
import layout from '../templates/components/loader-square-spin';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['square-spin'],
  layout: layout
});
