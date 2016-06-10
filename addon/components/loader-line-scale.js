import Ember from 'ember';
import layout from '../templates/components/loader-line-scale';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['line-scale'],
  layout: layout
});
