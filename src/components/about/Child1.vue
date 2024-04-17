<template>
  <div class="flex">
    <h2 class="">Child 2::</h2>
    <b>
      {{ count }}
    </b>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  count: Boolean
})
</script>
