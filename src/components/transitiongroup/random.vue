<script setup>
import { ref } from 'vue'

const items = ref([1, 2, 3, 4, 5])

function addItem() {
  const next = items.value.length ? Math.max(...items.value) + 1 : 1
  const randomIndex = Math.floor(Math.random() * (items.value.length + 1))
  items.value.splice(randomIndex, 0, next)
}

function removeItem() {
  if (items.value.length === 0) return
  const randomIndex = Math.floor(Math.random() * items.value.length)
  items.value.splice(randomIndex, 1)
}
</script>

<template>
  <button @click="addItem">Add at random index</button>
  <button @click="removeItem" :disabled="items.length === 0">Remove at random index</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
button{
  border: 0;
  margin-right: 10px;
  border-radius: 10px;
  padding: 10px
}
</style>