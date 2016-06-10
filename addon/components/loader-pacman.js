import Ember from 'ember';
import layout from '../templates/components/loader-pacman';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['pacman'],
  layout: layout
});
