<template>
  <div>
    <el-card class="logListContent" shadow="always">
      <div slot="header" class="logListTitle">
        <span>文章列表</span>
        <el-button size="medium" type="primary" @click="goAddLog()">新增文章</el-button>
      </div>
      <div class="LogList">
        <ul class="infinite-list"  v-for="log in logList" @click="goDetail(log.id,log.title)" :key="log.id" >
          <LogModel   :title="log.title" :author="log.userAccount" >
          </LogModel>
        </ul>
      </div>
    </el-card>

  </div>
</template>

<script>
import { getLogList } from '../../../api/data'
import LogModel from '../../components/LogModel.vue';
export default {
  components:{
    LogModel
  },
  data() {
    return {
      pageNum: 1,
      isLoading: false,
      logList: []
    }
  },
  mounted() {
    getLogList({
      pageSize: 200,
      param: {
        auditStatus: 1,
      }
    }).then((res) => {
      if (res.code == 0) {
        let data = res.result
        this.logList = data.list.filter(item => item.auditStatus == 1)
      }
    })
  },
  methods: {
    goDetail(id,title){
        this.$router.push(`/LogListDetail?id=${id}&title=${title}`)
      },
    goAddLog() {
      this.$router.push(`/LogListDetail`)
    }
  },
};
</script>

<style scoped lang="scss">
.logListContent {
  margin: 30px 20px;

  .logListTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .infinite-list {
    :hover{
      cursor: pointer;
    }
    li {
      list-style: none
    }
  }
}</style>