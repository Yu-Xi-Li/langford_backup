<template>
  <div id="app">
    <div id="nav"></div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    created(){

    },
    methods:{
      getLoginData(){
        localStorage.getItem('user')
      }
    }
  }
</script>
<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
