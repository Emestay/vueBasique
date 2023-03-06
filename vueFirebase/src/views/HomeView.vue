<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Todo List</h1>

    <form @submit.prevent="addTodo">
      <div class="mb-4">
        <label class="block mb-2 font-bold" for="new-todo">New Todo:</label>
        <input class="w-full px-3 py-2 border rounded" type="text" id="new-todo" v-model="newTodo" />
      </div>

      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Add Todo</button>
    </form>

    <hr class="my-4">

    <ul>
      <li v-for="todo in todos" :key="todo.id" class="mb-2">
        <div class="flex justify-between items-center">
          <span>{{ todo.title }}</span>
          <button class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600" @click="deleteTodo(todo.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import {  db } from '@/firebase.js'
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    }
  },
  mounted() {
    this.getTodos()
  },
  methods: {
    async getTodos() {
      const querySnapshot = await db.collection('todos').get()
      this.todos = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    },
    async addTodo() {
      if (this.newTodo.trim()) {
        await db.collection('todos').add({
          title: this.newTodo.trim(),
        })
        this.newTodo = ''
        this.getTodos()
      }
    },
    async deleteTodo(id) {
      await db.collection('todos').doc(id).delete()
      this.getTodos()
    },
  },
}
</script>