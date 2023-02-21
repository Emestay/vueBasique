<template>
    <div>
      <h1>{{ player1.name }} vs. {{ player2.name }}</h1>
      <div v-if="!winner">
        <div>
          <h2>{{ player1.name }}</h2>
          <p>{{ player1.hp }} / {{ player1.maxHp }}</p>
          <button @click="player1Attack">Attack</button>
          <button @click="player1Heal" :disabled="player1.healUsed">Heal</button>
        </div>
        <div>
          <h2>{{ player2.name }}</h2>
          <p>{{ player2.hp }} / {{ player2.maxHp }}</p>
        </div>
        <p v-if="turnLog.length > 0">{{ turnLog[turnLog.length - 1] }}</p>
      </div>
      <p v-else>{{ winner.name }} wins!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        player1: {
          name: "You",
          hp: 100,
          maxHp: 100,
          attack: 10,
          healUsed: false
        },
        player2: {
          name: "Computer",
          hp: 100,
          maxHp: 100,
          attack: 10
        },
        winner: null,
        turnLog: []
      }
    },
    methods: {
      player1Attack() {
        const damage = Math.floor(Math.random() * this.player1.attack) + 1;
        this.player2.hp -= damage;
        this.turnLog.push(`You dealt ${damage} damage to the Computer`);
        if (this.player2.hp <= 0) {
          this.winner = this.player1;
          return;
        }
        this.player1.healUsed = false;
        setTimeout(() => {
          this.player2Turn();
        }, 1000);
      },
      player2Turn() {
        const damage = Math.floor(Math.random() * this.player2.attack) + 1;
        this.player1.hp -= damage;
        this.turnLog.push(`Computer dealt ${damage} damage to You`);
        if (this.player1.hp <= 0) {
          this.winner = this.player2;
          return;
        }
        setTimeout(() => {
          this.player1.healUsed = false;
        }, 1000);
      },
      player1Heal() {
        const heal = Math.floor(Math.random() * 10) + 1;
        this.player1.hp += heal;
        if (this.player1.hp > this.player1.maxHp) {
          this.player1.hp = this.player1.maxHp;
        }
        this.player1.healUsed = true;
        this.turnLog.push(`You healed for ${heal} HP`);
      }
    }
  }
  </script>
  


