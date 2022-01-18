import Component from '@glimmer/component';
import { dasherize } from '@ember/string';

export default class LoaderBase extends Component {
  divCount = 0;

  get class() {
    return dasherize(this.constructor.name);
  }

  get divs() {
    return Array(this.divCount).fill(undefined);
  }
}
