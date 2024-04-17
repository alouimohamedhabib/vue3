<template>
  <div class="flex">
    <h2>Child 2</h2>
    <button class="block bg-green-400 w-20" @click="emitEv">Emit</button>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['submit'])
//
const emitEv = () => {
  emit('submit', 'abc')
}
</script>
