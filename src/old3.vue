<template>
    <button :style="{'background-color': active1 ? color1 : ''}" @click="toggle(1)">🕳 ipsum dolor sit amet consectetur adipisicing elit. Sit eos ipsam amet doloribus, iusto consequuntur voluptatum corporis aliquid totam magni eaque non nisi, laborum officia accusamus facere.</button>
    <br>
    <button :style="{'background-color': active2 ? color2 : ''}" @click="toggle(2)">🔕 consectetur adipisicing elit. Porro cupiditate molestiae dicta maiores illo hic dignissimos tempora, libero corrupti maxime quae magni placeat? Minus vitae pariatur beatae...</button>
    <br>
    <button :style="{'background-color': active3 ? color3 : ''}" @click="toggle(3)">🎦consectetur adipisicing elit. Nisi distinctio eius ipsam reprehenderit velit veniam voluptatem unde asperiores odio nihil, possimus at repellat dolor, quos neque error impedit eveniet ea!</button>
</template>
  
<script>
export default {
    data() {
        return {
            color1: 'red',
            color2: 'blue',
            color3: 'yellow',
            active1: null,
            active2: null,
            active3: null
        };
    },
    methods: {
        toggle(p) {
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
};
</script>


