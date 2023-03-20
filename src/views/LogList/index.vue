<template>
  <div>
    <el-card class="logListContent" shadow="always">
      <div slot="header" class="logListTitle">
        <span>文章列表</span>
        <el-button size="medium" type="primary" @click="goLogDetail(id)">发布文章</el-button>
      </div>
      <div class="LogList">
        <ul class="infinite-list" v-infinite-scroll="load" infinite-scroll-distance="200px"  style="overflow:auto">
          <li v-for="i in count" :key="i" class="infinite-list-item">
            
          </li>
        </ul>
      </div>
    </el-card>
    
  </div>
</template>

<script>
import { getTeamMatchData } from '../../../api/data'
export default {
  data() {
    return {
      count: 0
    }
  },
  mounted(){
    getTeamMatchData()
  },
  methods: {
    load () {
      this.count += 2
    },
    goLogDetail(e){
      
    }
  },
};
</script>

<style scoped lang="scss">
.logListContent {
  height: 750px;
  margin: 30px 20px;
  .logListTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .infinite-list {
    height: 750px;
    li {
      list-style: none
    }
  }
}
</style>