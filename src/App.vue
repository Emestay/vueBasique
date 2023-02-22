<template>
  <div class="container mb-3">
    <label for="input1">Input du 1:</label>
    <input type="text" id="input1" v-model="input1" class="form-control"
      :class="{ 'maClasseHello': input1 === 'hello', 'maClasseWorld': input1 === 'world' }" />
    <br />
    <label for="input2">Input du 2:</label>
    <input type="text" id="input2" v-model="input2" class="form-control"/>
    <br />
    <button @click="showParagraph = !showParagraph" class="btn btn-primary">Switch de P</button>
    <br>
    <br>
    <p v-if="showParagraph" class="maClasseHello">le p 1</p>
    <p v-else :style="{ backgroundColor: input2 }">Le p 2</p>


    <button @click="showParagraph2 = !showParagraph2">Cliquez ici</button>
  <p v-if="showParagraph2">ezdfezonjifezonkifez</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      showParagraph: true,
      showParagraph2: true,
    };
  },
};
</script>

<style>
.maClasseHello {
  background-color: blue;
}

.maClasseWorld {
  background-color: red;
}
</style>
