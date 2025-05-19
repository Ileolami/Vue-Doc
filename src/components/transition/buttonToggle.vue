<script>
import CompA from './compA.vue'
import CompB from './compB.vue'

export default {
  components: { CompA, CompB },
  data() {
    return {
      activeComponent: 'CompA'
    }
  }
}
</script>

<template>
	<label>
    <input type="radio" v-model="activeComponent" value="CompA"> A
  </label>
  <label>
    <input type="radio" v-model="activeComponent" value="CompB"> B
  </label>
  <Transition name="fade" mode="out-in">
    <component :is="activeComponent"></component>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>