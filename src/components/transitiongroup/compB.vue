<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
</script>


<template>
  <p>Current component: B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg">
</template>
