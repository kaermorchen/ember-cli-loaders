import Ember from 'ember';
import layout from '../templates/components/loader-ball-grid-beat';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-grid-beat'],
  layout: layout
});
