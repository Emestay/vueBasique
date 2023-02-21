<template>
    <h1 class="text-center">TP EventBinding</h1>
    <div id="monApp" class="container mt-4 mb-4 p-3">
        <div class="mb-3">
            <input type="text" class="form-control" @keyup="updateText1" />
        </div>
        <div class="mb-3">
            <p>{{ text1 }}</p>
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" @keyup.esc="updateText2" />
        </div>
        <div class="mb-3">
            <p>{{ text2 }}</p>
        </div>
        <button @click="alert" class="btn btn-primary mb-3">Alerte</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            text1: '',
            text2: '',

        };
    },
    methods: {
        updateText1(e) {
            this.text1 = e.target.value;
        },
        updateText2(e) {
            this.text2 = e.target.value;
        },
        alert() {
          alert("PATES EN CROUTTES");
        }
    }
};
</script>

