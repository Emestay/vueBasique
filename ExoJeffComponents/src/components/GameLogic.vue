<template>
    <div>
      <GameBoard />
      <Snake :initialLength="3" />
      <Food />
    </div>
  </template>
  
  <script>
  import GameBoard from './GameBoard.vue'
  import Snake from './Snake.vue'
  import Food from './Food.vue'
  
  export default {
    name: 'GameLogic',
    components: {
      GameBoard,
      Snake,
      Food
    },
    data() {
      return {
        direction: 'right',
        snake: [],
        food: null,
        score: 0
      }
    },
    mounted() {
      this.snake = Array.from({ length: 3 }, (_, i) => ({ x: i, y: 0 }))
      this.food = { x: 5, y: 5 }
  
      setInterval(this.moveSnake, 200)
    },
    methods: {
      moveSnake() {
        const head = this.snake[this.snake.length - 1]
        const tail = this.snake.shift()
  
        switch (this.direction) {
          case 'up':
            this.snake.push({ x: head.x, y: head.y - 1 })
            break
          case 'down':
            this.snake.push({ x: head.x, y: head.y + 1 })
            break
          case 'left':
            this.snake.push({ x: head.x - 1, y: head.y })
            break
          case 'right':
            this.snake.push({ x: head.x + 1, y: head.y })
            break
        }
  
        if (this.isCollidingWithFood(head)) {
          this.snake.unshift(tail)
          this.score += 10
          this.generateFood()
        }
  
        if (this.isCollidingWithWall(head) || this.isCollidingWithSelf(head)) {
          // Game over
        }
      },
      generateFood() {
        // Générer une nouvelle position aléatoire pour la nourriture
        this.food = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) }
      },
      isCollidingWithFood(head) {
        return head.x === this.food.x && head.y === this.food.y
      },
      isCollidingWithWall(head) {
        return head.x < 0 || head.x >= 10 || head.y < 0 || head.y >= 10
      },
      isCollidingWithSelf(head) {
        return this.snake.some(segment => segment !== head && segment.x === head.x && segment.y === head.y)
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  