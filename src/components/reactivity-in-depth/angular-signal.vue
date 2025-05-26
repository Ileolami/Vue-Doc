<script setup>
import { shallowRef } from 'vue'

function signal(initialValue) {
  const r = shallowRef(initialValue)
  const s = () => r.value
  s.set = (value) => {
    r.value = value
  }
  s.update = (updater) => {
    r.value = updater(r.value)
  }
  return s
}

const count = signal(0)

function increment() {
  count.update(v => v + 1)
}

function decrement() {
  count.update(v => v - 1)
}

function reset() {
  count.set(0)
}
</script>

<template>
  <div>
    <p>Count: {{ count() }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>
