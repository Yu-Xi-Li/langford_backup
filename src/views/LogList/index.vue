<template>
  <div>
    <el-card class="logListContent" shadow="always">
      <div slot="header" class="logListTitle">
        <span>文章列表</span>
        <el-button size="medium" type="primary" @click="goAddLog()">新增文章</el-button>
      </div>
      <div class="LogList">
        <ul class="infinite-list"  v-for="log in logList" @click="goDetail(log.id)" :key="log.id" >
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
        this.logList = data.list
      }
    })
  },
  methods: {
    goDetail(id){
        this.$router.push(`/addLogList?id=${id}`)
      },
    goAddLog() {
      this.$router.push(`/addLogList`)
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
    :hover{
      cursor: pointer;
    }
    li {
      list-style: none
    }
  }
}</style>