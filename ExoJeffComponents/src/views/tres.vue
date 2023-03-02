<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-center text-4xl font-bold mb-4">Les Amis</h1>
    <ul class="list-group">
      <UnAmi 
        v-for="unAmi in lesAmis" 
        :key="unAmi.id" 
        :id="unAmi.id"
        :leNom="unAmi.name" 
        :lePhone="unAmi.phone"
        :leMail="unAmi.email"
        :premium="unAmi.premium"
        @mon-event-premium="afficherStatusPremium($event)"
        class="border-b-2 pb-2 mb-2"
      ></UnAmi>
    </ul>
  </div>
</template>
<script>
import UnAmi from "../components/UnAmi.vue";
export default{
    data() {
        return {
            lesAmis: [
                {
                    id: "lasticot",
                    name: "COCO L ASTICOT",
                    phone: "01234 5678 991",
                    email: "coco@lasticot.com",
                    premium: true
                },
                {
                    id: "janine",
                    name: "Janine DeLavega",
                    phone: "09876 543 221",
                    email: "janine@delavega.com",
                    premium: false
                },
                {
                    id: "kimonoSurUnFrigo",
                    name: "Steven Seagal",
                    phone: "+338765477",
                    email: "steven@seagal.com",
                    premium: false
                },
            ],
        };
    },
    methods: {
        afficherStatusPremium(leldDansUnAmi) {
            const unAmiIdentified = this.lesAmis.find(unAmi => unAmi.id === leldDansUnAmi);
            console.log(unAmiIdentified.name);
            unAmiIdentified.premium = !unAmiIdentified.premium;
        }
    },
    components: { UnAmi }
}
</script>