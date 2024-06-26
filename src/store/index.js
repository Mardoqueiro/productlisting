import { createStore } from 'vuex'
const productURL = "http://localhost:3000/results"
export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        let res = await fetch(productURL)
        let data = await res.json()
        // let data = await (await fetch(productURL)).json()
        context.commit("setProducts", data)
      }
      catch (e) {
        console.log(e.message)
      }
    } 
  },
  modules: {
  }
})
