<template>
  <div
    class="fixed h-full w-full bg-black bg-opacity-80 top-0 left-0 flex justify-center items-center"
    v-if="task"
  >
    <div class="todo bg-white p-4 rounded w-4/12 h-40/6">
      <div class="mb-6">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900"
          >Todo content</label
        >
        <input
          type="text"
          id="large-input"
          v-model="todoCopy.todo"
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label class="inline-flex items-center cursor-pointer">
          <span class="mr-2">Status</span>
          <input
            type="checkbox"
            :checked="task.completed"
            v-model="todoCopy.completed"
            class="sr-only peer"
          />
          <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <!-- <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> -->
        </label>
      </div>
      <button
        type="submit"
        :onclick="handleFormSubmission"
        class="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save
      </button>
    </div>
  </div>
  <div class="div" v-else>Please select a task to edit</div>
</template>

<script lang="ts" setup>
import { type PropType, ref } from 'vue'
import type { TaskObject } from '../../../types'
const emit = defineEmits(['updateTask'])
// const t = ref("12")
const props = defineProps({
  task: {
    type: Object as PropType<TaskObject>,
    default: null
  }
})
const todoCopy = ref(props.task)
const handleFormSubmission = () => {
  emit('updateTask', { ...todoCopy.value })
}
</script>
