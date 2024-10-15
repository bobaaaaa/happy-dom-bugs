# happy-dom-bugs with react + vitest + react-testing-library

```shell
npm install
npm run test
```

## Events

- `enter` event triggers `<button type="clear" />` - ✅ fixed since 15.x
- `change` event triggers `<input />` twice - ✅ fixed since 15.x

## Browser Features

- `navigator.clipboard` did not save the text
- changing `open` property of `<details />`
- `MediaError` missing: https://developer.mozilla.org/en-US/docs/Web/API/MediaError
- `History` API not 100% implemented: https://developer.mozilla.org/en-US/docs/Web/API/History

## a11y

- `<img />` alt text is valid name
