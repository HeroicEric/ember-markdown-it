import Ember from 'ember';
import { markdownRender } from 'dummy/helpers/markdown-render';
import { module, test } from 'qunit';

const { Handlebars } = Ember;
const { SafeString } = Handlebars;

module('Unit | Helper | markdown render');

test('it returns given markdown rendered as HTML within a SafeString', function(assert) {
  let markdown = `# I am a header`;
  let expected = new SafeString(`<h1>I am a header</h1>\n`);

  let result = markdownRender([markdown]);

  assert.deepEqual(result, expected,
    'returns a SafeString markdown rendered as HTML');
});

test('it gracefully handles null values', function(assert) {
  markdownRender(null);

  assert.ok(true, 'We made it this far without errors');
});

test('it gracefully handles undefined values', function(assert) {
  markdownRender(undefined);

  assert.ok(true, 'We made it this far without errors');
});
