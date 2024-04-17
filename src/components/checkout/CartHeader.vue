<template>
  <div class="flex">
    <div class="menu">
      <ul class="flex">
        <li class="p-2 hover:bg-green-200 hover:cursor-pointer">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="p-2 hover:bg-green-200 hover:cursor-pointer">
          <RouterLink to="/store">Store</RouterLink>
        </li>
      </ul>
    </div>
    <div class="cart-details p-2 ml-auto">
      <span
        class="inline-block mr-1 w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full text-center"
      >
        {{ cartDetails.length }} </span
      >item{{ cartDetails.length > 1 ? 's' : '' }}
    </div>
  </div>
</template>

<script lang="ts" setup>
// get the cart details
import { computed, type ComputedRef } from 'vue'
import { useCartStore } from '@/stores/cart'
import type { ProductObject } from '../../../types'

const cartStore = useCartStore()
const cartDetails: ComputedRef<ProductObject[]> = computed(() => cartStore.getProduct)
</script>
