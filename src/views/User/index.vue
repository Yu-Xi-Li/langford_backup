<template>
  <div class="content">
    <!-- 个人信息&资料修改 -->
    <div class="userInfo firstCard">
      <el-card class="userCard" header="个人信息">
        <div class="userInfoCard">
          <div>
            <span>用户昵称：</span>
            <span>{{ userData.useNname }}</span>
          </div>
          <div>
            <span>手机号码：</span>
            <span>{{ userData.userPhone }}</span>
          </div>
          <div>
            <span>用户身份：</span>
            <span>{{ userData.PersonID }}</span>
          </div>
        </div>
      </el-card>
      <el-card class="userCard" header="修改资料">
        <el-form  label-width="80px" :model="userData">
          <el-form-item label="昵称">
            <el-input v-model="userData.useNname"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="userData.userPhone"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="userData.userPsw"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="userData.againPsw"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <!-- 发布的文章 -->
    <div class="firstCard">
      <el-card :body-style="{ padding: '20px 20px 0 20px' }">
        <div slot="header">
          <span>发布的文章</span>
        </div>
        <LogModel v-for="i in logData.length" :key="i" :logData="this.logData"></LogModel>
      </el-card>
    </div>
    <!-- 修改的文章 -->
    <div class="firstCard">
      <el-card :body-style="{ padding: '20px 20px 0 20px' }">
        <div slot="header">
          <span>修改的文章</span>
        </div>
        <LogModel v-for="i in logData.length" :key="i" :logData="this.logData"></LogModel>
      </el-card>
    </div>
    <!-- 收藏的文章 -->
    <div class="firstCard">
      <el-card :body-style="{ padding: '20px 20px 0 20px' }">
        <div slot="header">
          <span>收藏的文章</span>
        </div>
        <LogModel v-for="i in logData.length" :key="i" :logData="this.logData"></LogModel>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getUserData } from '../../../api/data'
import { _post } from '../../../utils/request'
import LogModel from '../../components/LogModel.vue'
export default {
  components: { LogModel },
  name: 'User',
  data() {
    return {
      userData: {
        id:'',
        name: '羽夕', // 用户名
        accountNumber: '18188888888', // 手机号
        password: '111111', // 密码
        committee: 0,   // 委员会
        administrator: 0,// 管理员
        newPsw: '',     // 新密码
        againPsw: '',   // 重复密码
        PersonID: '管理员'
      },
      // blogData: {
      //   auditStatus: 0,     // 审核状态
      //   disease: "",        // 疾害
      //   fertilizer: "",     // 肥料
      //   id: 0,              // 文章id
      //   insect: "",         // 虫害
      //   soil: "",           // 土壤
      //   updateUser: "",     // 最后修改用户
      //   userId: 0,          // 所属用户id
      //   vegetable: "",      // 蔬菜
      //   water: ""           // 水质
      // },
      logData: {
        title:''

      }
    }
  },
  mounted() {
    this.userData = getUserData({
      accountNumber: '1',
      password: '1'
    })
  },
  methods: {
    submitForm(){

    }
  },
}
</script>
<style scoped lang="scss">
.content {
  font-size: 16px;
  hr {
    color: #eeeeee;
  }
  a {
    text-decoration:none;
    color: black;
  }
  .firstCard{
    margin: 15px 0;
  }
  .el-divider--horizontal{
    margin: 12px 0;
  }
}
.userInfo {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .userCard {
    width: 600px;
  .userInfoCard{
    width: 400px;
    div{
      margin: 15px 10px;
    }
  }
  }
}
</style>