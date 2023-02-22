<template>
  <div class="m-3 container">
    <h2>WatchList 🎬 (Films à voir)</h2>
    <input type="text" v-model="nomFilm" placeholder="Entrez le nom d'un film" class="form-control" >
    <button @click="ajouterFilm" class="btn btn-primary mt-3">Ajouter à votre Liste</button>
    <h2 v-if="mesFilms.length > 0">Ma WatchList :</h2>
    <ul v-if="mesFilms.length > 0" class="list-group">
      <li v-for="(film, index) in mesFilms" :key="index" class="list-group-item">
        {{ film }}
        <button @click="supprimerFilm(index)" class="btn btn-danger">Supprimer</button>
      </li>
    </ul>
    <p v-else>Pas encore de films dans votre liste.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mesFilms: [],
      nomFilm: ''
    }
  },
  methods: {
    ajouterFilm() {
      this.mesFilms.push(this.nomFilm);
      this.nomFilm = '';
    },
    supprimerFilm(index) {
      this.mesFilms.splice(index, 1);
    }
  }
}
</script>
