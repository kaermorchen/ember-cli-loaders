import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-grid-pulse', 'Integration | Component | loader ball grid pulse', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-grid-pulse}}`);

  assert.equal(this.$().text().trim(), '');
});
