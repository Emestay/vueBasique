<template>
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold text-center my-6">Les Amis</h1>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        
        <li v-for="ami in lesAmis" :key="ami.id">
          <un-ami
            :leNom="ami.name"
            :lePhone="ami.phone"
            :leMail="ami.email"
            :premium="ami.premium"
          />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import UnAmi from "../components/UnAmi.vue";
  
  export default {
    components: {
      UnAmi,
    },
    data() {
      return {
        lesAmis: [
          {
            id: "lasticot",
            name: "COCO L ASTICOT",
            phone: "01234 5678 991",
            email: "coco@lasticot.com",
            premium: "1",
          },
          {
            id: "janine",
            name: "Janine DeLavega",
            phone: "09876 543 221",
            email: "janine@delavega.com",
            premium: "0",
          },
          {
            id: "Steven Seagal",
            name: "1234567",
            phone: "steven@seagal.com",
            email: "steven@seagal.com",
            premium: "1",
          },
          {
            id: "Gérard Menvuça",
            name: "Janine DeLavega",
            phone: "0987654",
            email: "gérard@menvuca.com",
            premium: "0",
          },
        ],
      };
    },
  };
  </script>