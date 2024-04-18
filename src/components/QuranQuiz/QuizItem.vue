<template>
  <p v-if="quizItem" @click="handleClick(quizItem.value)">
    {{ quizItem.text }} | {{ quizItem.value }}
  </p>
</template>
<script setup lang="ts">
import type { quizItemObject } from 'types'
import { type PropType, ref, type Ref } from 'vue'

const { quizItem } = defineProps({
  quizItem: Object as PropType<NonNullable<quizItemObject>>
})

const emit = defineEmits(['selectedQuiz'])

const handleClick = (quizId: number) => {
  emit('selectedQuiz', quizId)
}
</script>
