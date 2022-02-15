import Component from '@glimmer/component';

export default class LoaderBase extends Component {
  divCount = 0;
  class = 'loader-base';

  get divs() {
    return Array(this.divCount).fill(undefined);
  }
}
