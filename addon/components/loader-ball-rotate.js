import Ember from 'ember';
import layout from '../templates/components/loader-ball-rotate';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-rotate'],
  layout: layout
});
