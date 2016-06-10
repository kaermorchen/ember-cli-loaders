import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-ball-scale-ripple-multiple', 'Integration | Component | loader ball scale ripple multiple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-ball-scale-ripple-multiple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loader-ball-scale-ripple-multiple}}
      template block text
    {{/loader-ball-scale-ripple-multiple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
