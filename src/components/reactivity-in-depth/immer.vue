<script setup>
import { useImmer } from './immer'
  
const [items, updateItems] = useImmer([
  {
     title: "Learn Vue",
     done: true
  },
  {
     title: "Use Vue with Immer",
     done: false
  }
])

function toggleItem(index) {
  updateItems(items => {
    items[index].done = !items[index].done
  })
}
</script>

<template>
  <ul>
    <li v-for="({ title, done }, index) in items"
        :class="{ done }"
        @click="toggleItem(index)">
        {{ title }}
    </li>
  </ul>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>