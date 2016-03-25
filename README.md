# ember-markdown-it [![Travis](https://img.shields.io/travis/greenfieldhq/ember-markdown-it.svg)](https://travis-ci.org/greenfieldhq/ember-markdown-it)

An Ember addon that provides a ES2015 module shim for working with the
[markdown-it][markdown-it] Markdown parser.

## Installation

```
ember install ember-markdown-it
```

## Usage

```javascript
import markdownit from 'markdown-it';

markdownit().render('# A Top Level Header');
// => "<h1>A Top Level Header</h1>"
```

### In your templates

A helper is provided for easily rendering Markdown as HTML in your templates:

```handlebars
{{markdown-render someMarkdown}}
```

> Note: This returns an `Ember.Handlebars.SafeString`. We are relying on
> [markdown-it][markdown-it] for sanitization. For more info, checkout the
> [markdown-it Security docs][markdown-it-security].

Refer to the [markdown-it documentation][markdown-it] for more information.

[markdown-it]: https://github.com/markdown-it/markdown-it
[markdown-it-security]: https://github.com/markdown-it/markdown-it/blob/master/docs/security.md
