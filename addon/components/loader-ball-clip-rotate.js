import Ember from 'ember';
import layout from '../templates/components/loader-ball-clip-rotate';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-clip-rotate'],
  layout: layout
});
