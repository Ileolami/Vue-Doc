<!--
FLIP list transitions with the built-in <TransitionGroup>.
https://aerotwist.com/blog/flip-your-animations/
-->

<script>
import { shuffle } from 'lodash-es'

const getInitialItems = () => [1, 2, 3, 4, 5]
let id = getInitialItems().length + 1

export default {
  data() {
    return {
      items: getInitialItems()
    }
  },
  methods: {
    insert() {
      const i = Math.round(Math.random() * this.items.length)
      this.items.splice(i, 0, id++)
    },
    reset() {
      this.items = getInitialItems()
      id = getInitialItems().length + 1
    },
    shuffle() {
      this.items = shuffle(this.items)
    },
    remove(item) {
      const i = this.items.indexOf(item)
      if (i > -1) {
        this.items.splice(i, 1)
      }
    }
  }
}
</script>

<template>
  <button @click="insert">Insert at random index</button>
  <button @click="reset">Reset</button>
  <button @click="shuffle">Shuffle</button>

  <TransitionGroup tag="ul" name="fade" class="container">
    <li v-for="item in items" class="item" :key="item">
      <span>{{ item }}</span>
      <button class="remove-btn" @click="remove(item)" aria-label="Remove">🗑️</button>
    </li>
  </TransitionGroup>
</template>

<style>
.container {
  position: relative;
  padding: 0;
  list-style-type: none;
}

.item {
  width: 100%;
  height: 36px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s;
}

.item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  padding: 4px;
  transition: color 0.2s;
}

.remove-btn:hover {
  color: #e74c3c;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>