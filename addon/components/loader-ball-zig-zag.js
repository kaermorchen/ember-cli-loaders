import Ember from 'ember';
import layout from '../templates/components/loader-ball-zig-zag';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['ball-zig-zag'],
  layout: layout
});
