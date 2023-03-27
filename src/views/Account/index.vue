<template>
  <div v-if=this.isADM>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="accountNumber" label="账号"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="committeeAuditState" label="审核状态"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.id,1)" type="success" size="small">通过</el-button>
          <el-button @click="handleClick(scope.row.id,0)" type="danger" size="small">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div v-else>
    <el-empty description="您不是管理员哦，请联系负责人申请~"></el-empty>
  </div>
</template>
<script>
import {getAllUserInfo, userAgainLogon} from '../../../api/data'
export default {
  data() {
    return {
      tableData: [],
      isADM: false
    }
  },
  created(){
    if(localStorage.getItem('administrator') == 1){
      this.isADM = true
    }
  },
  mounted() {
    this.getNoPassUser()
  },
  methods:{
    getNoPassUser(){
      getAllUserInfo({pageSize:200}).then(res => {
        this.tableData = res.result.list.filter(item => item.committeeAuditState == 0)
      })
    },
    handleClick(userid,pass) {
      if(pass == 1){
        userAgainLogon({id:userid,committee:1,committeeAuditState:1}).then(()=>{
          this.getNoPassUser()
        })
      }else{
        userAgainLogon({id:userid,committee:0,committeeAuditState:2}).then(()=>{
          this.getNoPassUser()
        })
      }
    }
  }
}
</script>
