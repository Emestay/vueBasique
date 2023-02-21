<template>
    <div v-for="(pokemon, index) in pokemons" :key="index">
        <p>{{ pokemon.name }}</p>
        <p>{{ pokemon.url }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            pokemons: [],
        };
    },
    methods: {

    },
    mounted() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
            .then(r => r.json())
            .then(data => (this.pokemons = data.results))
    }
};
</script>


