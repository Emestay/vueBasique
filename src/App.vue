<template>
    <div>
        <p>{{ maString }}</p>
        <br>
        <button @click="generateRandomTruc">TEST OUI TEST</button>

        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="bookListApp" class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="card p-4">
                <div class="image d-flex flex-column justify-content-center align-items-center">

                    <img :src="user.face" height="200" width="140">

                    <span class="name mt-3"></span>
                    {{ user.name }}
                    <input type="text" v-model="user.name" class="texte-center from-control">

                    <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span>{{ user.age }} ans</span>
                    </div>
                    <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span>age + 10 :
                            <span class="follow">{{ agePlusTen }} ans</span>
                        </span>
                    </div>
                    <div class="px-2 rounded mt-4 date">
                        NB Fétiche : {{ favoriteNumber }}


                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="ball" :style="{ top: ballPosition + 'px' }"></div>
    <br>
    <br>
    <br>
    <br>
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger" @click="leNombre--">-</button>
        <h3 class="mx-3">le nombre : {{leNombre}}</h3>
        <button type="button" class="btn btn-success" @click="leNombre++">+</button>
      </div>
    
</template>
  
<script>
export default {
    data() {
        return {
            maString: '',
            leNombre: 0,
            user: {
                name: 'Mario',
                age: 45,
                face: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-s-www.estrepublicain.fr%2Fimages%2F1CAE876A-7D3B-4CCF-BD48-E60DB51B4967%2FNW_raw%2Fle-ministre-de-l-interieur-manuel-valls-photo-alexandre-marchi-1484668204.jpg&f=1&nofb=1&ipt=9359a6bb7a3baf1ba5e7f7f9206ece05ec76bf935a1f7b01e4cbfcedca1fb5c8&ipo=images'
            }
        };
    },
    computed: {
        agePlusTen() {
            return this.user.age + 10;
        },
        favoriteNumber() {
            return Math.floor(Math.random() * 100) + 1;
        }
    },
    methods: {
        generateRandomTruc() {
            const randomNumber = Math.random();
            this.maString = randomNumber > 0.5 ? "Bidule" : "Truc";
        },
    }
};
</script>

