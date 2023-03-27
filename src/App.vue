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
      this.loginOut()
    },
    methods:{
      getLoginData(){
        localStorage.getItem('user')
      },
      loginOut(){
        if(!localStorage.getItem('id')){
          localStorage.clear();
          this.$router.replace('/login')
          history.pushState(null, null, document.URL);
          this.$message({
            type: 'error',
            message: '登录失效，请重新登录'
          })
        }
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
