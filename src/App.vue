<template>
    <div>
        <p>{{ message }}</p>
        <button @click="addToMysteryNumber(5)">+5</button>
        <button @click="addToMysteryNumber(1)">+1</button>
        <p>{{ mysteryNumber }}</p>
    </div>


    <div>
    <button :style="{'background-color': active1 ? color1 : ''}" @click="toggleActive(1)">🕳 ipsum dolor sit amet consectetur adipisicing elit. Sit eos ipsam amet doloribus, iusto consequuntur voluptatum corporis aliquid totam magni eaque non nisi, laborum officia accusamus facere repudiandae? Illo, excepturi?</button>
    <br>
    <button :style="{'background-color': active2 ? color2 : ''}" @click="toggleActive(2)">🔕 consectetur adipisicing elit. Porro cupiditate molestiae dicta maiores illo hic dignissimos tempora, libero corrupti maxime quae magni placeat? Minus vitae pariatur beatae perferendis a tempore.</button>
    <br>
    <button :style="{'background-color': active3 ? color3 : ''}" @click="toggleActive(3)">🎦consectetur adipisicing elit. Nisi distinctio eius ipsam reprehenderit velit veniam voluptatem unde asperiores odio nihil, possimus at repellat dolor, quos neque error impedit eveniet ea!</button>
  </div>
</template>
  
<script>
export default {
    data() {
        return {
            mysteryNumber: 0,
            message: "Essaie encore",
            color1: 'red',
            color2: 'blue',
            color3: 'yellow',
            active1: null,
            active2: null,
            active3: null
        };
    },
    methods: {
        addToMysteryNumber(a) {
            this.mysteryNumber += a;
        },
        toggleActive(p) {
            if (p === 1) {
                this.active1 = !this.active1;
                this.active2 = false;
                this.active3 = false;
            } else if (p === 2) {
                this.active1 = false;
                this.active2 = !this.active2;
                this.active3 = false;
            } else if (p === 3) {
                this.active1 = false;
                this.active2 = false;
                this.active3 = !this.active3;
            }
        }
    },
    watch: {
        mysteryNumber(oui) {
            if (oui === 7) {
                this.message = oui;
            } else if (oui > 7) {
                this.message = "Tu as dépassé le Nbr Mystère";
            } else {
                this.message = "Essaie encore";
            }
        },
    },
    timer() {
        setTimeout(() => {
            this.mysteryNumber = 0;
        }, 5000);
    },
};
</script>


