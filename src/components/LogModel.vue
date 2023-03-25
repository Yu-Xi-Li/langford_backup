<template>
  <div>
    <el-card shadow="hover">
      <span>{{ title ? "《"+title+"》" : '暂无标题' }}</span>
      <p class="logInfo">
      <!-- <span>审核状态：{{ isPass }}</span> -->
      <span>作者：羽夕</span>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
    props: {
      title: '',      // 文章标题
      author: '',      // 作者
    },
    methods:{
      
    }
}
</script>

<style lang="scss" scoped>

.logContent {
  a {
    font-size: 18px;
  }
  .logInfo {
    display: flex;
    justify-content: flex-end;
    // margin: 0;
    span{
      margin:  0 30px;
    }
  }
}
</style>