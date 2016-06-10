import Ember from 'ember';
import layout from '../templates/components/loader-ball-scale-multiple';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-scale-multiple'],
  layout: layout
});
