import Ember from 'ember';
import layout from '../templates/components/loader-ball-pulse-rise';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-pulse-rise'],
  layout: layout
});
