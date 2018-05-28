import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | loader-base', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{loader-base}}`);

    assert.dom('.loader-base').exists();
  });

  test('divCount works', async function(assert) {
    const divCount = 3;

    this.set('divCount', divCount);

    await render(hbs`{{loader-base divCount=divCount}}`);

    assert.equal(this.element.querySelector('.loader-base').innerHTML.trim(), '<div></div>'.repeat(divCount));
  });
});
