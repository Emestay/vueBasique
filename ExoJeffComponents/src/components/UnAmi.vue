<template>
  <div class="container my-1">
    <ul class="list-group">
      <h2 class="list-group-item font-bold text-2xl flex items-center justify-between">
        <span>{{leNom}}</span>
        <span v-if="premium" class="text-green-500">(Ami premium)</span>
        <span v-else class="text-red-500">(Ami nul)</span>
      </h2> 
      <button @click="afficherPremium" class="btn btn-danger mb-1 px-4 py-2 rounded-md">Premium ?</button>
      <button @click="afficherDetails" class="btn btn-primary px-4 py-2 rounded-md">{{detailsVisibles? 'Masquer': 'Afficher'}}</button>           
      <ul v-if="detailsVisibles" class="list-group mt-4">
        <li class="list-group-item">{{lePhone}}</li>
        <li class="list-group-item">{{leMail}}</li>
      </ul>
    </ul>
  </div> 
</template>

<script>
export default {
  props: {
    leNom: {
      type: String,
      required: true
    },
    lePhone: {
      type: String,
      required: true
    },
    leMail: {
      type: String,
      required: true
    },
    premium: {
      type: Boolean,
      required: false,
      default: false
    },
    id: {
      type: String,
      required: true
    }
  },
  emits: {
    'mon-event-premium': (id) => {
      if (id) {
        return true;
      } else {
        console.warn('Attention: l\'id de l\'ami n\'est pas défini.');
        return false;
      }
    }
  },
  data() {
    return {
      detailsVisibles: false
    };
  },
  methods: {
    afficherDetails() {
      this.detailsVisibles = !this.detailsVisibles;
    },
    afficherPremium() {
      this.$emit('mon-event-premium', this.id);
    }
  }
};
</script>
