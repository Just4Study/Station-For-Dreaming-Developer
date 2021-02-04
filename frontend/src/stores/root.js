import appStore from './app'
import authStore from './auth'

const createRootStore = () => {
  return {
    appStore,
    authStore,
  }
}

export default createRootStore
