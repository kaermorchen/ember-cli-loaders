import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-clip-rotate', 'Integration | Component | loader ball clip rotate', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-clip-rotate}}`);

  assert.equal(this.$().text().trim(), '');
});
