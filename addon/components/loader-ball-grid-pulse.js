import Ember from 'ember';
import layout from '../templates/components/loader-ball-grid-pulse';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-grid-pulse'],
  layout: layout
});
