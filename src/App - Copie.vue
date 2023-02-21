<template>
    <div v-for="(pokemon, index) in pokemons" :key="index">
        <p>{{ pokemon.name }}</p>
        <p>{{ pokemon.url }}</p>

    </div>
    <p >{{ error }}</p>
</template>
  
<script>
export default {
    data() {
        return {
            pokemons: [],
            error: null
        };
    },
    mounted() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
            .then(r => r.json())
            .then(data => (this.pokemons = data.results))
            .catch(error => {
                this.error = "Marche pas !";
            });
    }
}
</script>


