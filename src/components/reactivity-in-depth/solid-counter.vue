<script setup>
import { createSignal } from './solid-signal.js'

const [count, setCount] = createSignal(0)
</script>

<template>
  <h1>{{ count() }}</h1>
  <button @click="setCount(v => v + 1)">
    increment
  </button>
</template>