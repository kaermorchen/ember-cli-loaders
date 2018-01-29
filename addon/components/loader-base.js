import Component from '@ember/component';
import layout from '../templates/components/loader-base';
import { computed } from '@ember/object';
import { typeOf } from '@ember/utils';

export default Component.extend({
  layout,
  classNames: ['loader-base'],

  divCount: null,

  divs: computed('divCount', function () {
    const divCount = this.get('divCount');
    const divs = [];

    if (typeOf(divCount) !== 'number') {
      return divs;
    }

    for (let index = 0; index < divCount; index++) {
      divs.push(index);
    }

    return divs;
  })
});
