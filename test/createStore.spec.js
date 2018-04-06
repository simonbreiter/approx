const createStore = require('../src/createStore').createStore

const reducers = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

describe('createStore', () => {
  it('exposes a public API', () => {
    let store = createStore(reducers)
    const methods = Object.keys(store)

    expect(methods.length).toBe(3)
    expect(methods).toContain('subscribe')
    expect(methods).toContain('dispatch')
    expect(methods).toContain('getState')
  })
  it('throws an error if the reducer is not a function', () => {
    expect(() => createStore()).toThrow()
    expect(() => createStore('foo')).toThrow()
    expect(() => createStore({})).toThrow()
    expect(() => createStore(() => {})).not.toThrow()
  })
  it('dispatches actions', () => {
    let store = createStore(reducers)
    store.dispatch({ type: 'INCREMENT' })
    expect(store.getState()).toEqual(1)
    store.dispatch({ type: 'INCREMENT' })
    expect(store.getState()).toEqual(2)
    store.dispatch({ type: 'DECREMENT' })
    expect(store.getState()).toEqual(1)
  })
})
