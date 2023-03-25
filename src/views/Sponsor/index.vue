<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>申请成为委员会</span>
      </div>
      <div>
        <el-button :disabled="isWYH == 2 || isWYH == 3 ? false : true" @click="toWYH" type="primary">
          {{isWYHsuccess == 0 ? '点击申请进入委员会' : '你已经是委员会成员了'}}
        </el-button>
      </div>
    </el-card>
    
  </div>
</template>

<script>
import {userAgainLogon} from '../../../api/data'
export default {
  data(){
    return {
      id:localStorage.getItem('id'),
      isWYH: localStorage.getItem('committeeAuditState'),
      isWYHsuccess: localStorage.getItem('committee')
    }
  },
  mounted(){
    
  },
  methods:{
    toWYH(){
      userAgainLogon({
        id:this.id,
        committeeAuditState:0
      }).then((res)=>{
        if(res.code == 0){
          localStorage.setItem('committeeAuditState',0)
          this.$message({
            message: '提交成功,请等待管理员审核',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>