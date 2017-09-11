import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-clip-rotate-multiple', 'Integration | Component | loader ball clip rotate multiple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-clip-rotate-multiple}}`);

  assert.equal(this.$().text().trim(), '');
});
