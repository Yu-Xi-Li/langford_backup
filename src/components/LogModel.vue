<template>
  <div>
    <a href="">{{ title }}</a>
    <p class="logInfo">
    <span>审核状态：{{ isPass }}</span>
    <span>作者：羽夕</span>
    </p>
    <el-divider/>
  </div>
</template>

<script>
export default {
    props: {
        logData: {
            title: '',      // 文章标题
            isPass: 0,      // 是否审核通过
            author: ''      // 作者
        }
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