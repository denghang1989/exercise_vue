<template>
  <div id="app">
    <router-view/>
    <div id="main-content">
      <router-view name="content"></router-view>
      <router-view name="aside"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 13px;
  }
  
  #content {
    width: 936px;
    margin: 0 auto;
  }
</style>
