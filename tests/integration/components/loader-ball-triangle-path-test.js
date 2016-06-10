import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-triangle-path', 'Integration | Component | loader ball triangle path', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-triangle-path}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loader-ball-triangle-path}}
      template block text
    {{/loader-ball-triangle-path}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
