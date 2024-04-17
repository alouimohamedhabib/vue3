import { defineStore } from 'pinia'
import type { ProductObject } from 'types'

export const useCartStore = defineStore('cart', {
  state: () => {
    return { products: [] as ProductObject[] }
  },
  actions: {
    addToCart(product: ProductObject | undefined) {
      if(!product)
        return
      console.log('---', product)
      this.products.push(product)
    },
    removeFromCart(state: any, productId: number) {
      this.products.filter((item) => item.id !== productId)
    }
  },
  getters: {
    getProduct: (state) => {
      return state.products
    }
  }
})
