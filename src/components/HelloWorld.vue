<template>
  <div class="hello">
    <base-header></base-header>
  </div>
</template>

<script>
  import BaseHeader from './common/BaseHeader.vue';
  
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      BaseHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
