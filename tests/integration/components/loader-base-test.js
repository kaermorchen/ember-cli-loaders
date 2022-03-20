import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | loader-base', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<LoaderBase />`);

    assert.dom(this.element).hasText('');
  });

  test('Component has html class as its component class', async function (assert) {
    await render(hbs`<LoaderBase />`);

    assert.dom(this.element.firstChild).hasClass('loader-base');
  });

  test('Component html divs equal the component divCount value', async function (assert) {
    await render(hbs`<LoaderBase />`);

    assert.strictEqual(this.element.firstChild.children.length, 0);
  });

  test('all children elemetns are `div`', async function (assert) {
    await render(hbs`<LoaderBase />`);

    const hasWrongElements = Array.from(this.element.firstChild.children).some(
      (element) => !(element instanceof HTMLDivElement)
    );

    assert.notOk(hasWrongElements);
  });
});
