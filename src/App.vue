<template>
    <div >
        <p>{{ message }}</p>
        <button @click="addToMysteryNumber(5)" >+5</button>
        <button @click="addToMysteryNumber(1)" >+1</button>
        <p>{{ mysteryNumber }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            mysteryNumber: 0,
            message: "Essaie encore"
        };
    },
    methods: {
        addToMysteryNumber(a) {
            this.mysteryNumber += a;
        },
        
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
    timer(){
        setTimeout(() => {
            this.mysteryNumber = 0;
        }, 5000);
    },
    
}

    ;
</script>
