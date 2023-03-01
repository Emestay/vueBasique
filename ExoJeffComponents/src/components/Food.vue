<template>
    <div>
      <div class="grid grid-cols-10 gap-1 bg-gray-800 w-96 h-96">
        <div
          class="bg-green-500 w-4 h-4"
          v-for="segment in snake"
          :style="{ gridColumnStart: segment.x + 1, gridRowStart: segment.y + 1 }"
          :key="`${segment.x}-${segment.y}`"
        ></div>
        <div
          class="bg-red-500 w-4 h-4"
          :style="{ gridColumnStart: food.x + 1, gridRowStart: food.y + 1 }"
          v-if="food"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Food',
    data() {
      return {
        x: 0,
        y: 0
      }
    },
    mounted() {
      this.generatePosition()
    },
    methods: {
      generatePosition() {
        this.x = Math.floor(Math.random() * 10)
        this.y = Math.floor(Math.random() * 10)
      }
    }
  }
  </script>
  
  <style>
 
  </style>
  