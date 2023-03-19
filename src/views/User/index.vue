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
        <div class="logContent">
          <a href="">文章标题</a>
          <p class="logInfo">
            <span>审核状态：未通过</span>
            <span>作者：羽夕</span>
          </p>
          <el-divider/>
        </div>
        <div class="logContent">
          <a href="">文章标题</a>
          <p class="logInfo">
            <span>审核状态：未通过</span>
            <span>作者：羽夕</span>
          </p>
          <el-divider/>
        </div>
      </el-card>
    </div>
    <!-- 修改的文章 -->
    <div class="firstCard">
      <el-card :body-style="{ padding: '20px 20px 0 20px' }">
        <div slot="header">
          <span>修改的文章</span>
        </div>
        <div class="logContent">
          <a href="">文章标题</a>
          <p class="logInfo">
            <span>审核状态：未通过</span>
            <span>作者：羽夕</span>
          </p>
          <el-divider/>
        </div>
        <div class="logContent">
          <a href="">文章标题</a>
          <p class="logInfo">
            <span>审核状态：未通过</span>
            <span>作者：羽夕</span>
          </p>
          <el-divider/>
        </div>
      </el-card>
    </div>
    <!-- 收藏的文章 -->
    <div class="firstCard">
      <el-card :body-style="{ padding: '20px 20px 0 20px' }">
        <div slot="header">
          <span>收藏的文章</span>
        </div>
        <div class="logContent">
          <a href="">文章标题</a>
          <p class="logInfo">
            <span>收藏时间：2022-02-22</span>
            <span>作者：羽夕</span>
          </p>
          <el-divider/>
        </div>
        <div class="logContent">
          <a href="">文章标题</a>
          <p class="logInfo">
            <span>收藏时间：2022-02-22</span>
            <span>作者：羽夕</span>
          </p>
          <el-divider/>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getUserData } from '../../../api/data'
export default {
  name: 'User',
  data() {
    return {
      userData: {
        useNname: '羽夕',
        userPhone: '18188888888',
        userPsw: '111111',
        newPsw: '',
        againPsw: '',
        PersonID: '管理员'
      },
      blogData: {
        auditStatus: 0,     // 审核状态
        disease: "",        // 疾害
        fertilizer: "",     // 肥料
        id: 0,              // 文章id
        insect: "",         // 虫害
        soil: "",           // 土壤
        updateUser: "",     // 最后修改用户
        userId: 0,          // 所属用户id
        vegetable: "",      // 蔬菜
        water: ""           // 水质
      }
    }
  },
  mounted() {
    getUserData().then(res => {
      // console.log(res);
      if (res.status === 200) {
        this.tableData = res.data;
      }
      const a = 1
      console.log(a);
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