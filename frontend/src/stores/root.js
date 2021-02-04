import appStore from './app'
import authStore from './app'

const createRootStore = () => {
  return {
    appStore,
    authStore,
  }
}

export default createRootStore
