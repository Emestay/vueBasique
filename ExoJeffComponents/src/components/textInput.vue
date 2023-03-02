<template>
    <div class="w-full">
      <label for="text-input" class="block text-gray-700 font-bold mb-2">
        {{ label }}
      </label>
      <input
        type="text"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :value="text"
        @input="$emit('changed', $event.target.value)"
        v-model="text"
      >
    </div>
  </template>
  
  <script>
    export default {
      props: {
        label: String,
        text: String,
      },
    };
  </script>
  
  