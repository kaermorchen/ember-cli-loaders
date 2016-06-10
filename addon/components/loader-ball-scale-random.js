import Ember from 'ember';
import layout from '../templates/components/loader-ball-scale-random';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-scale-random'],
  layout: layout
});
