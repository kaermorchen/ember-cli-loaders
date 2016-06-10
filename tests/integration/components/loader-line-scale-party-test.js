import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-line-scale-party', 'Integration | Component | loader line scale party', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-line-scale-party}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loader-line-scale-party}}
      template block text
    {{/loader-line-scale-party}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
