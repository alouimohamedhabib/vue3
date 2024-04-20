<template>
  <div class="task-item flex p-4 bg-white mt-2 mb-2 rounded">
    <div class="icon w-1/12 text-2xl">{{ getRandomEmoji() }}</div>
    <div class="task-item-description w-8/12">
      {{ task.todo }}
    </div>
    <div class="task-item-action w-3/12 justify-end items-center flex">
      <div class="type rounded text-xs bg-blue-700 text-white p-2">Personal</div>
      <div
        class="status ml-2 rounded-full h-3 w-3"
        :class="{
          'bg-green-400': task?.completed,
          'bg-orange-400': !task?.completed
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TaskObject } from '../../../types'

const emojiArray = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲']
const getRandomEmoji = () => {
  const emojy = emojiArray[Math.floor(Math.random() * emojiArray.length)]
  return emojy
}
defineProps({
  task: {
    type: Object as PropType<TaskObject>
  }
})
</script>
