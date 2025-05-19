<script>
import CompA from './compA.vue'
import CompB from './compB.vue'
  
export default {
  components: { CompA, CompB },
  data() {
    return {
      current: 'CompA'
    }
  }
}
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" value="CompA" /> A</label>
    <label><input type="radio" v-model="current" value="CompB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
