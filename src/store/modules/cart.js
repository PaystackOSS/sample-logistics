import {plants} from '../../data/plants.js'

const state = {
  plants: plants
}

const getters = {
  cartProducts: (state, getters) => {
    return state.plants
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, plant) => {
      return total + plant.price * plant.quantity
    }, 0)
  }
}

const mutations = {

  incrementPlantQuantity (state, id) {
    const cartItem = state.plants.find(plant => plant.id === id)
    cartItem.quantity++
  },

  decrementPlantQuantity (state, id) {
    const cartItem = state.plants.find(plant => plant.id === id)
    if (cartItem.quantity > 1) {
      cartItem.quantity--
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
