import Ember from 'ember';
import layout from '../templates/components/loader-triangle-skew-spin';
import loaderBase from '../mixins/loader-base';

export default Ember.Component.extend(loaderBase, {
  classNames: ['triangle-skew-spin'],
  layout: layout
});
