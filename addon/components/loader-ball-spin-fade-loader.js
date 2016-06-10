import Ember from 'ember';
import layout from '../templates/components/loader-ball-spin-fade-loader';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-spin-fade-loader'],
  layout: layout
});
