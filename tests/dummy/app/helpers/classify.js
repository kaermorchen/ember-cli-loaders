import { helper } from '@ember/component/helper';
import { classify as fn } from '@ember/string';

export default helper(function classify([name]) {
  return fn(name);
});
