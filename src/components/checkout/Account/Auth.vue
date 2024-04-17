<template>
this is the auth component
{{ time }}
</template>

<script setup lang="ts">
import { computed } from 'vue'

const time = computed(() => 2)
</script>