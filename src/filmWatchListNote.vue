<template>
  <div class="m-3 container">
    <h2>WatchList 🎬 (Films à voir)</h2>
    <input type="text" v-model="nomFilm" placeholder="Entrez le nom d'un film" class="form-control">
    <button @click="ajouterFilm" class="btn btn-primary mt-3">Ajouter à votre Liste</button>
    <p v-if="messageErreur" class="text-danger">{{ messageErreur }}</p>
    <h2 v-if="mesFilms.length > 0">Ma WatchList :</h2>
    <ul v-if="mesFilms.length > 0" class="list-group">
      <li v-for="(film, index) in mesFilms" :key="index" class="list-group-item">
        {{ film.nom }}
        <div>
          Note : {{ film.note }}/5
          <span v-for="n in 5" :class="{ 'text-warning': n <= film.note }" @click="noterFilm(index, n)">
            <i class="fas fa-star"></i>
          </span>
        </div>
        <button @click="supprimerFilm(index)" class="btn btn-danger">Supprimer</button>
      </li>
    </ul>
    <p v-else class="text-danger">Pas encore de films dans votre liste.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mesFilms: [],
      nomFilm: '',
      messageErreur: ''
    }
  },
  methods: {
    ajouterFilm() {
      if (this.nomFilm === '') {
        this.messageErreur = 'Le champ du film ne peut pas être vide.';
        return;
      }
      this.mesFilms.push({ nom: this.nomFilm, note: 0 });
      this.nomFilm = '';
      this.messageErreur = '';
    },
    supprimerFilm(index) {
      this.mesFilms.splice(index, 1);
    },
    noterFilm(index, note) {
      this.mesFilms[index].note = note;
    }
  }
}
</script>