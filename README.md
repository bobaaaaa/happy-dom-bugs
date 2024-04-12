# happy-dom-bugs with react + vitest + react-testing-library

```shell
npm install
npm run test
```

## Events

- `enter` event triggers `<button type="clear" />`
- `change` event triggers `<input />` twice

## Browser Features

- `navigator.clipboard` did not save the text
- changing `open` property of `<details />`
