<template>
  <div class="container m-auto">
    <QuizItems :quiz-items="data" />
  </div>
</template>

<script setup lang="ts">
import QuizItems from '../components/QuranQuiz/QuizItems.vue'
import { guessSurah } from 'quran-quiz'
const { data } = await guessSurah.bySurah({
  amount: 1,
  select: [1, 112, 113, 114]
})
</script>
