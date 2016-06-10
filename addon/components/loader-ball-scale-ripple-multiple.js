import Ember from 'ember';
import layout from '../templates/components/loader-ball-scale-ripple-multiple';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-scale-ripple-multiple'],
  layout: layout
});
