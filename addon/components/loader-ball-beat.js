import Ember from 'ember';
import layout from '../templates/components/loader-ball-beat';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-beat'],
  layout: layout
});
