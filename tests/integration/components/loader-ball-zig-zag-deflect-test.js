import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-zig-zag-deflect', 'Integration | Component | loader ball zig zag deflect', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-zig-zag-deflect}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loader-ball-zig-zag-deflect}}
      template block text
    {{/loader-ball-zig-zag-deflect}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
