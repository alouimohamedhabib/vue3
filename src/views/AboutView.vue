<script lang="ts" setup>
import Child2 from '../components/about/Child2.vue'
import Child1 from '../components/about/Child1.vue'
import { ref } from 'vue'
const val = ref(true)
const handle = (v: any) => {
  val.value = v
}
</script>
<template>
  <div>
    <Child2 @submit="handle" />

    <h1>Parent :: {{ val }}</h1>

    <Child1 :count="val" />
  </div>
</template>

<style></style>
