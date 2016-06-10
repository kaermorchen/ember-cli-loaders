import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-clip-rotate-pulse', 'Integration | Component | loader ball clip rotate pulse', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-clip-rotate-pulse}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loader-ball-clip-rotate-pulse}}
      template block text
    {{/loader-ball-clip-rotate-pulse}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
