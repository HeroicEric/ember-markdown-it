import Ember from 'ember';
import markdownit from 'markdown-it';

const {
  String: EmString,
  isEmpty
} = Ember;

const { htmlSafe } = EmString;

export function markdownRender(params, options) {
  if (isEmpty(params)) {
    return;
  }

  const [markdown] = params;
  const html = markdownit(options).render(markdown);

  return htmlSafe(html);
}

export default Ember.Helper.helper(markdownRender);
