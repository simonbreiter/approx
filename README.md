# approx
[![pipeline status](https://gitlab.com/simonbreiter/approx/badges/master/pipeline.svg)](https://gitlab.com/simonbreiter/approx/commits/master)
[![coverage report](https://gitlab.com/simonbreiter/approx/badges/master/coverage.svg)](https://gitlab.com/simonbreiter/approx/commits/master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

approx is [a reasonable approximation of the Redux Store in 20 lines](https://egghead.io/lessons/react-redux-implementing-store-from-scratch) to further learn about the ideas behind it.

## Usage

Pretty much the same as [redux](https://github.com/reactjs/redux). For example:

```js
import { createStore } from 'approx'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
```

## Credits

All credit goes to [Dan Abramov](https://github.com/gaearon)
