<script setup>
import { ref, computed, watchEffect } from 'vue'

const count = ref(0)

const effectRunsWithoutOptimization = ref([])
const computedWithoutOptimization = computed(oldValue => {
  return {
    isEven: count.value % 2 === 0
  }
})

const effectRunsWithOptimization = ref([])
const computedWithOptimization = computed(oldValue => {
  const newValue = {
    isEven: count.value % 2 === 0
  }
  if (oldValue && oldValue.isEven === newValue.isEven) {
    return oldValue
  }
  return newValue
})

watchEffect(() => {
  effectRunsWithoutOptimization.value.push(computedWithoutOptimization.value.isEven)
})

watchEffect(() => {
  effectRunsWithOptimization.value.push(computedWithOptimization.value.isEven)
})

function update() {
  // set count to a random even number
  const n = Math.floor(Math.random() * 100)
  count.value = n - n % 2
}
</script>

<template>
  {{ count }}
  <button @click="update">update count to a random even number</button>
  <p>
    Runs without optimization {{ effectRunsWithoutOptimization }}
  </p>
  <p>
    Runs with optimization {{ effectRunsWithOptimization }}
  </p>
</template>
