<template>
  <div>
    <el-card class="logListContent" shadow="always">
      <div slot="header">
        <span>文章列表</span>
      </div>
      <div class="LogList">
        <ul class="infinite-list" v-infinite-scroll="load" infinite-scroll-distance="200px"  style="overflow:scroll">
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
      }
  },
};
</script>

<style scoped lang="scss">
.logListContent {
  width: 70%;
  .infinite-list {
    height: 600px;
    li {
      list-style: none
    }
  }
}
</style>