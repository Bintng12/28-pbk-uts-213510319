<script setup>
import { ref, computed } from 'vue'
import { TrashIcon } from "@heroicons/vue/24/outline";

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="container mx-auto bg-neutral-600 rounded-xl shadow border p-20 m-10">
      <div class="text-center">
          <h1 class="text-3xl font-bold pb-4">List Kegiatan</h1>
      </div>
      <div class="font-bold pb-4">
          <form @submit.prevent="addTodo">
          <input class="shadow-lg border-spacing-2  " v-model="newTodo">
          <button class="px-6">Tambahkan</button>
      </form>
      </div>
      <ul>
  <li v-for="todo in filteredTodos" :key="todo.id">
    <input type="checkbox" v-model="todo.done">
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="removeTodo(todo)" class="px-3">
      <TrashIcon class="h-6 w-6 text-gray-500" />
    </button>
  </li>
</ul>
<button @click="hideCompleted = !hideCompleted">
  {{ hideCompleted ? 'Show all' : 'Hide completed' }}
</button>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>