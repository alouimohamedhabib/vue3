<script setup lang="ts">
import Main from '../layouts/main.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <Main>
    <template #header>
      <Header />
    </template>
    <template #content>
      <suspense>
        <ProductDetails />
      </suspense>
    </template>
  </Main>
</template>
