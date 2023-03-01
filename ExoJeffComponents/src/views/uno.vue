<template>
    <div id="app" class="container mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="ami in lesAmis" :key="ami.id" class="bg-white rounded-lg shadow-md">
                <div class="bg-gray-200 px-4 py-2 rounded-t-lg">
                    <h3 class="text-lg font-bold">{{ ami.name }}</h3>
                </div>
                <div class="p-4">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg" @click="toggleDetails(ami.id)">
                        Voir les détails
                    </button>
                    <ul v-if="detailsVisibles[ami.id]" class="mt-4">
                        <li><strong>Email:</strong> {{ ami.email }}</li>
                        <li><strong>Téléphone:</strong> {{ ami.phone }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      detailsVisibles: {},
      lesAmis: [
        { id: 1, name: 'John Doe', phone: '555-555-1234', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', phone: '555-555-5678', email: 'jane.doe@example.com' },
        { id: 3, name: 'Jojo Dodo', phone: '555-555-5621', email: 'jojo.dodo@example.com' }
      ]
    }
  },
  methods: {
    toggleDetails(id) {
      this.detailsVisibles[id] = !this.detailsVisibles[id];
    }
  }
}
</script>