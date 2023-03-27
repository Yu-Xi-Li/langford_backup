<template>
  <div v-if=this.isWYH class="firstCard">
    <el-card :body-style="{ padding: '20px 20px 0 20px' }">
      <div slot="header">
        <span>修改的文章</span>
      </div>
      <el-table :data="successLogListData" style="width: 100%">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        <el-table-column prop="score" label="认可率"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.id,1)" type="success" size="small">通过</el-button>
            <el-button @click="handleClick(scope.row.id,2)" type="danger" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
  <div v-else>
    <el-empty description="您不是委员会成员哦，请联系负责人申请~"></el-empty>
  </div>
</template>

<script>
import { getLogList, auditLog } from '../../../api/data'
export default {
  data(){
    return {
      successLogListData:[],
      isWYH: false
    }
  },
  created(){
    if(localStorage.getItem('committee') == 1){
      this.isWYH = true
    }
  },
  mounted(){
    this.updateLogList()
  },
  methods:{
    updateLogList(){
      getLogList({param:{auditStatus:0}}).then((res)=>{
        this.successLogListData = res.result.list
      })
    },
    handleClick(id,pass) {
      if(pass == 1){
        auditLog({id:id,auditStatus:1,score:100}).then(()=>{
          this.updateLogList()
        })
      }else{
        auditLog({id:id,auditStatus:2,score:100}).then(()=>{
          this.updateLogList()
        })
      }
    }
  }
}
</script>

<style></style>