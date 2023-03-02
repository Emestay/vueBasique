<template>
    <form @submit.prevent="submitData" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label for="name" class="text-lg font-bold">Nom</label>
      <input v-model="enteredName" type="text" id="name" class="rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
    </div>
    <div class="flex flex-col gap-2">
      <label for="phone" class="text-lg font-bold">Téléphone</label>
      <input v-model="enteredPhone" type="text" id="phone" class="rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
    </div>
    <div class="flex flex-col gap-2">
      <label for="mail" class="text-lg font-bold">Email</label>
      <input v-model="enteredMail" type="email" id="mail" class="rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
    </div>
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Ajouter</button>
  </form>
  </template>
  
  <script>
  export default {
  emits: ['add-ami'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredMail: '',
    };
  },
  methods: {
    submitData() {
      if (!this.enteredName || !this.enteredPhone || !this.enteredMail) {
        console.warn('Missing fields');
        return false;
      }
      this.$emit('add-ami', {
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredMail,
      });
      this.enteredName = '';
      this.enteredPhone = '';
      this.enteredMail = '';
    },
  },
};

  </script>
  