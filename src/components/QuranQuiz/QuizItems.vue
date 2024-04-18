<template>
  <div class="" v-for="(quiz, index) in quizItems" :key="index">
    <h2 class="block flex-1 text-2xl bg-green-50 text-green-800 p-2 rounded text-center">
      {{ quiz.question }}
    </h2>

    <quiz-item
      :quiz-item="q"
      :class="{
        'bg-red-500':
          selectedQuiz.quizId === q.value && q.value !== 1 && selectedQuiz.quizIndex === i,
        'bg-green-500': selectedQuiz.quizId !== -1 && q.value == 1,
        'hover:bg-green-300': selectedQuiz.quizId == -1
      }"
      class="text-center w-6/12 m-auto cursor-pointer p-2 hover"
      v-for="(q, i) in quiz.options"
      :key="i"
      @selected-quiz="handleClick(q.value, i)"
    />
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref, type Ref } from 'vue'
import { type CreateQuizOutputCustom } from '../../../types'
import QuizItem from './QuizItem.vue'

const props = defineProps({
  quizItems: {
    type: Object as PropType<CreateQuizOutputCustom[]>
  }
})
const selectedQuiz: Ref<{ quizId: number; quizIndex: number }> = ref({
  quizId: -1,
  quizIndex: -1
})
const handleClick = (quizId: any, quizIndex: number) => {
  if (selectedQuiz.value.quizId !== -1) {
    console.log('Quiz selected')
    return
  }
  selectedQuiz.value = {
    quizId,
    quizIndex
  }
}
</script>
