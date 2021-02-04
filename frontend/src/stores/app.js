import { observable } from 'mobx'

const createStore = () => {
  const appStore = {
    test: observable.box(null),

    chageTest(data) {
      appStore.test.set(data)
    },
  }

  return appStore
}

const store = createStore()
export default store
