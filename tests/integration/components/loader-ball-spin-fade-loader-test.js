import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-spin-fade-loader', 'Integration | Component | loader ball spin fade loader', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-spin-fade-loader}}`);

  assert.equal(this.$().text().trim(), '');
});
