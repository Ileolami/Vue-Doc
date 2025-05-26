<script setup>
import { signal, computed } from './angular-signal.js'

const count = signal(0)
const double = computed(() => count() * 2)
</script>

<template>
  <h1>Count is: {{ count() }}</h1>
  <h1>Double is: {{ double() }}</h1>
  <button @click="count.update(v => v + 1)">
    increment
  </button>
  <button @click="count.set(0)">
    reset
  </button>
</template>