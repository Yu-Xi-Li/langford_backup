<template>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <AsideTab></AsideTab>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <el-empty v-if="this.$route.path.length < 3" description="欢迎使用蔬菜种植技术动态查询系统~"></el-empty>
          <router-view v-else></router-view>

          
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src 
import AsideTab from '@/components/AsideTab.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Main',
  components: {
    AsideTab,
    Header
  }
}
</script>
<style lang="scss" scoped>
.el-header{
  background-color: #333;
}
.el-main{
  padding-top: 0;
}
</style>