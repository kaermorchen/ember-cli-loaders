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

  test('LoaderBase has class the `loader-base`', async function (assert) {
    await render(hbs`<LoaderBase />`);

    assert.dom(this.element.firstChild).hasClass('loader-base');
  });
});
