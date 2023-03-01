<template>
  <div id="app" class="container my-3">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center mb-4">Liste de courses</h2>
        <div class="form-group">
          <label for="ajoutcourse">Ajouter à la liste</label>
          <input id="ajoutcourse" class="form-control" v-model="nouvelCourse" @keyup.enter="ajouterCourse">
          <button class="btn btn-primary mt-3" @click="ajouterCourse">Ajouter</button>
          <br>
          <hr>
          <div v-if="erreur" class="text-danger mt-2">{{ erreur }}</div>
        </div>
        <div v-if="afficherListe">
          <ul class="list-group">
            <li v-for="(course, index) in listeCourses"
              class="list-group-item d-flex justify-content-between align-items-center">
              {{ course }}
              <button class="btn btn-danger" @click="supprimerCourse(index)">Supprimer</button>
            </li>
          </ul>
          <button class="btn btn-secondary mt-3" @click="basculerListe">{{ afficherListe ? 'Masquer liste' : 'Afficher liste' }}</button>
        </div>
        <div v-else>
          <button class="btn btn-secondary mt-3" @click="basculerListe">{{ afficherListe ? 'Masquer liste' : 'Afficher liste' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nouvelCourse: '',
      listeCourses: [],
      afficherListe: true,
      erreur: null
    }
  },
  methods: {
    ajouterCourse() {
      if (this.nouvelCourse !== '') {
        this.listeCourses.push(this.nouvelCourse);
        this.nouvelCourse = '';
        this.erreur = null;
      } else {
        this.erreur = 'Tu ne peut pas ajouter du vide.';
      }
    },
    supprimerCourse(index) {
      this.listeCourses.splice(index, 1);
    },
    basculerListe() {
      this.afficherListe = !this.afficherListe;
    }
  }
}
</script>