<template>
  <!--  Edit task item-->
  <TaskEdit :task="selectedTask" v-if="selectedTask " @updateTask="handleTaskUpdate" />
  <!--  display tasks-->
  <div class="tasks container m-auto p-2 mt-2 border-2 border-blue-50 rounded bg-gray-50 ">
    <TaskItem v-for="(task, index) in todos" :key="index" :task="task" :onclick="() => handleSelectedtask(task)" />
  </div>
</template>

<script setup lang="ts">
import TaskItem from '@/components/Tasks/TaskItem.vue'
import useFetch from '@/composables/useFetch'
import TaskEdit from '@/components/Tasks/TaskEdit.vue'
import { ref, type Ref } from 'vue'
import type { TaskObject } from '../../types'

const selectedTask: Ref<TaskObject | null> = ref(null)
const todos: Ref<TaskObject[] | undefined> = ref(undefined)
const response: any = await useFetch(`${import.meta.env.VITE_TODO_APU_URL}?limit=10`)
todos.value = response?.todos
const handleSelectedtask = (taskitem: TaskObject) => {
  selectedTask.value = { ...taskitem }
}
const handleTaskUpdate = (task: TaskObject) => {
  todos.value?.forEach((i: TaskObject) => {
    if (i.id === task.id) {
      Object.assign(i, task)
    }
  })
  selectedTask.value = null
}
</script>
