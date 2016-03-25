import Ember from 'ember';
import markdownit from 'markdown-it';

const {
  String: EmString,
  isEmpty
} = Ember;

const { htmlSafe } = EmString;

export function markdownRender(params) {
  if (isEmpty(params)) {
    return;
  }

  let [markdown] = params;
  let html = markdownit().render(markdown);

  return htmlSafe(html);
}

export default Ember.Helper.helper(markdownRender);
