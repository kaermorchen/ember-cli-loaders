import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-semi-circle-spin', 'Integration | Component | loader semi circle spin', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-semi-circle-spin}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loader-semi-circle-spin}}
      template block text
    {{/loader-semi-circle-spin}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
