import { observable } from 'mobx'

const createStore = () => {
  const authStore = {
    isLoggined: observable.box(false),
    name: observable.box(null),
    email: observable.box(null),

    changeIsLoggined(data) {
      authStore.isLoggined.set(data)
    },
    changeName(data) {
      authStore.name.set(data)
    },
    changeEmail(data) {
      authStore.email.set(data)
    }
  }

  return authStore
}

const store = createStore()
export default store
