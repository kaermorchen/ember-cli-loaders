import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-base', 'Integration | Component | loader base', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-base}}`);

  assert.equal(this.$().text().trim(), '');
});

test('divCount is worked', function(assert) {
  const divCount = 3;
  const divs = '<div></div>'.repeat(divCount);

  this.set('divCount', divCount);

  this.render(hbs`{{loader-base divCount=divCount}}`);

  assert.equal(this.$().children().html().replace(/\s/g, ''), divs);
});
