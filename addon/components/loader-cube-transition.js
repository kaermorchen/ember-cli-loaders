import Ember from 'ember';
import layout from '../templates/components/loader-cube-transition';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['cube-transition'],
  layout: layout
});
