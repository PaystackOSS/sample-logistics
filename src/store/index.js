import { createStore } from 'vuex'
import cart from './modules/cart'

const store = createStore({
  modules: {
    cart
  }
})

export default store