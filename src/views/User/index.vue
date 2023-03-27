<template>
  <div class="content">
    <!-- 个人信息&资料修改 -->
    <div class="userInfo firstCard">
      <el-card class="userCard" header="个人信息">
        <el-descriptions :column=1 title="">
          <el-descriptions-item label="用户名">{{ this.userData.username }}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{ this.userData.accountNumber }}</el-descriptions-item>
          <el-descriptions-item label="用户身份">
            <el-tag size="small">{{ this.userData.administrator == 1 ? "管理员" : this.userData.committee == 1 ? "委员会" :
              "普通用户" }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="委员会状态">
            <el-tag size="small">{{ getCommitteeAuditState(this.userData.committeeAuditState) }}</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
      <el-card class="userCard" header="修改资料">
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model.trim="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="accountNumber">
            <el-input disabled v-model.trim="form.accountNumber" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input type="password" v-model.trim="form.password" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model.trim="form.confirmPassword" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="againLogon">提交修改</el-button>
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
        <el-table :data="logListData" style="width: 100%">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="score" label="认可率"></el-table-column>
          <el-table-column prop="createDate" label="发布时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.id,scope.row.title)" type="primary" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <!-- 修改的文章 -->
    <div class="firstCard">
      <el-card :body-style="{ padding: '20px 20px 0 20px' }">
        <div slot="header">
          <span>修改的文章</span>
        </div>
        <el-table :data="fixedLogListData" style="width: 100%">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
          <el-table-column prop="score" label="认可率"></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.id,scope.row.title)" type="primary" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <!-- 收藏的文章 -->
    <div class="firstCard">
      <el-card :body-style="{ padding: '20px 20px 0 20px' }">
        <div slot="header">
          <span>收藏的文章</span>
        </div>
        <el-table :data="collectLogListData" style="width: 100%">
          <el-table-column prop="collectArticleId" label="ID"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="createDate" label="发布时间"></el-table-column>
          <el-table-column prop="score" label="认可率"></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.collectArticleId,scope.row.title)" type="primary" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>
<script>
import { log } from 'console'
import { userAgainLogon, getLogByuser, getLogList, getCollectLogByuser } from '../../../api/data'
import LogModel from '../../components/LogModel.vue'
export default {
  components: { LogModel },
  name: 'User',
  data() {
    return {
      form: {
        username: localStorage.getItem('name'),
        accountNumber: localStorage.getItem('accountNumber'),
        password: '',
        confirmPassword: ''
      },
      userData: {
        id: localStorage.getItem('id'),
        username: localStorage.getItem('name'), // 用户名
        accountNumber: localStorage.getItem('accountNumber'), // 手机号
        committee: localStorage.getItem('committee'),    // 委员会
        administrator: localStorage.getItem('administrator'),   // 管理员
        committeeAuditState: localStorage.getItem('committeeAuditState')  // 委员会状态
      },
      logListData: [],
      fixedLogListData:[],
      collectLogListData:[],
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
        title: ''

      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        accountNumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              const regex = /^1[3-9]\d{9}$/;
              if (regex.test(value)) {
                callback();
              } else {
                callback(new Error('请输入有效的手机号！'));
              }
            }
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.password) {
                callback(new Error('两次输入的密码不一致'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {
    getLogByuser(localStorage.getItem('id')).then((res)=>{
      this.logListData = res.result.filter(item => item.userId == localStorage.getItem('id'))
    })
    getLogList({param:{id:this.userData.id,updateUserId:this.userData.id}}).then((res)=>{
      this.fixedLogListData = res.result.list.filter(item=>item.updateUserId == localStorage.getItem("id"))
    })
    getCollectLogByuser(this.userData.id).then((res)=>{
      this.collectLogListData = res.result
    })
  },
  methods: {
    // 获取用户委员会审核状态
    getCommitteeAuditState(committeeAuditState) {
      if (committeeAuditState) {
        switch (committeeAuditState) {
          case '0':
            return "申请已提交";
          case '1':
            return "委员会成员";
          case '2':
            return "审核未通过";
          case '3':
            return "未提交申请";
          default:
            return "状态异常";
        }
      }
    },

    handleClick(id,title){
      this.$router.push(`/addLogList?id=${id}&title=${title}`)
    },
    // 修改信息
    againLogon() {
      if (this.form.password.length > 0 && this.form.password === this.form.confirmPassword) {
        userAgainLogon({
          name: this.form.username,
          id: localStorage.getItem('id'),
          accountNumber: this.form.accountNumber,
          password: this.form.password
        }).then(data => {
          if (data.code === 0) {
            this.$message({
              message: '修改成功,2秒后跳转登录页面',
              type: 'success'
            })
            localStorage.clear();
            setTimeout(() => {
              this.$router.push('/login')
            }, 2000);
          }else{
            this.$message({
              message: '修改失败,请重试',
              type: 'error'
            })
          }
        });
      };
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
    text-decoration: none;
    color: black;
  }

  .firstCard {
    margin: 15px 0;
  }

  .el-divider--horizontal {
    margin: 12px 0;
  }
}

.userInfo {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .userCard {
    width: 50%;

    .userInfoCard {
      width: 400px;

      div {
        margin: 15px 10px;
      }
    }
  }
}</style>