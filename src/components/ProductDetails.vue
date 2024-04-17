<template>
  <div class="w-5/12" v-if="product">
    <div class="rounded border border-solid border-red-500 border-2 shadow w-40">
      <img :src="product?.image" alt="" />
    </div>
    <div class="block">
      <h1 class="font-bold p-2">{{ product.title }}</h1>
    </div>
    <div class="div">
      <button
        @click="addToCart"
        class="button border-1 bg-green-300 p-2 text-green-700 font-bold rounded"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { type ProductObject } from '../../types'
import useFetch from '@/composables/useFetch'
import { ref } from 'vue'

const product =  ref();
const cartStore = useCartStore()
const apiUrl = `${import.meta.env.VITE_API_URL}/products/1`
product.value = await useFetch<ProductObject>(apiUrl)

// add to cart
const addToCart = () => {
  cartStore.addToCart(product)
}
</script>
