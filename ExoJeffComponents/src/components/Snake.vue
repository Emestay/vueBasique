<template>
    <div class="bg-green-500 w-4 h-4" v-for="segment in snake"></div>
  </template>
  
  <script>
  export default {
    name: 'Snake',
    props: {
      initialLength: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        snake: Array.from({ length: this.initialLength })
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  