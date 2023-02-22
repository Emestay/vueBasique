<template>
  <div class="">
    <label for="input1">Input du 1:</label>
    <input type="text" id="input1" v-model="input1" 
      :class="{ 'maClasseHello': input1 === 'hello', 'maClasseWorld': input1 === 'world' }" />
    <br />
    <label for="input2">Input du 2:</label>
    <input type="text" id="input2" v-model="input2" />
    <br />
    <button @click="showParagraph = !showParagraph">Switch de P</button>
    <br />
    <p v-if="showParagraph" class="maClasseHello">le p 1</p>
    <p v-else :style="{ backgroundColor: input2 }">Le p 2</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      showParagraph: true,
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
