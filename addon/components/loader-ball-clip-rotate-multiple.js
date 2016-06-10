import Ember from 'ember';
import layout from '../templates/components/loader-ball-clip-rotate-multiple';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-clip-rotate-multiple'],
  layout: layout
});
