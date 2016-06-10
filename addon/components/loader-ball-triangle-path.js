import Ember from 'ember';
import layout from '../templates/components/loader-ball-triangle-path';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-triangle-path'],
  layout: layout
});
