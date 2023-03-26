<template>
    <div class="article-form">
      <el-card body-style="padding:20px" style="margin-bottom: 20px;">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item  label="文章标题">
            <el-input :disabled="isfixd == true ? true : false" v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="疾害">
            <el-select v-model="form.disease" placeholder="请选择">
              <el-option v-for="option in options.disease" :key="option.value" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="肥料">
            <el-select v-model="form.fertilizer" placeholder="请选择">
              <el-option v-for="option in options.fertilizer" :key="option.value" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="虫害">
            <el-select v-model="form.insect" placeholder="请选择">
              <el-option v-for="option in options.insect" :key="option.value" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="土壤">
            <el-select v-model="form.soil" placeholder="请选择">
              <el-option v-for="option in options.soil" :key="option.value" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="蔬菜">
            <el-select v-model="form.vegetable" placeholder="请选择">
              <el-option v-for="option in options.vegetable" :key="option.value" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="水质">
            <el-select v-model="form.water" placeholder="请选择">
              <el-option v-for="option in options.water" :key="option.value" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="form-footer">
          <el-button type="primary" @click="submitForm">{{ this.isfixd == true ? '提交修改' : '发布'}}</el-button>
        </div>
      </el-card>
      <el-card v-if="this.isfixd == true" shadow="always" :body-style="{ padding: '20px' }">
        <div slot="header" style="display: flex;justify-content: space-between;font-size: 16px;">
          <span>留言板</span>
          <div style="gap:30px;display: flex;align-items: center">
            <span>认可率：{{ this.logData.score }}</span>
            <span @click="addCollectList" class="collectButton" :class="this.isCollect ? 'el-icon-star-on' : 'el-icon-star-off' " >
              {{this.isCollect ? '已收藏' : '点击收藏'}}
            </span>
          </div>
        </div>
        <div>
          <div class="message-board">
            <el-form ref="form" :model="messageForm" :rules="rules" label-width="80px">
              <el-form-item label="留言" prop="message">
                <el-input v-model="messageForm.message"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitMessageForm">留言</el-button>
              </el-form-item>
            </el-form>
            <el-divider />
            <el-card class="message-item" v-for="(item, index) in messageList" :key="index">
              <div class="message-info">
                <div class="message-account">{{ item.userAccount }}</div>
                <div class="message-content">{{ item.message }}</div>
              </div>
            </el-card>
          </div>
        </div>
      </el-card>
      
      
    </div>
  </template>
  <script>
import {getFoundInfoList, addLog, getLogDetail, updateLog, addCollect, getCollectLogByuser, deleteCollect} from '../../../api/data'
  export default {
    data() {
      return {
        isfixd: false,
        isCollect: false,
        collectLogId:'',
        form: {
          title: '',
          disease: '',
          fertilizer: '',
          insect: '',
          soil: '',
          vegetable: '',
          water: '',
          score:100
        },
        options: {
          disease: [],
          fertilizer: [],
          insect: [],
          soil: [],
          vegetable: [],
          water: [],
        },
        logData:{
            score:100
        },
        messageForm: {
          message: '', // 留言
          userAccount: '', // 账号
        },
        messageList: [], // 留言列表
        rules: {
          message: [{ required: true, message: '请输入留言', trigger: 'blur' }],
          userAccount: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        },

      };
    },
    mounted(){
        if(this.$route.query.id){
            this.isfixd = true
        }
        if(this.isfixd == true){
            getLogDetail(this.$route.query.id).then((res)=>{
                let data = res.result
                this.form.title = data.title
                this.form.disease = data.disease
                this.form.fertilizer = data.fertilizer
                this.form.insect = data.insect
                this.form.soil = data.soil
                this.form.vegetable = data.vegetable
                this.form.water = data.water
                this.form.score = data.score -1
                this.logData.score = data.score
                this.messageList = data.leaveMessageList
            })
        }
        getFoundInfoList().then((res)=>{
            const data = res.result
            this.options.disease = data.diseaseInfo
            this.options.fertilizer = data.fertilizerInfo
            this.options.insect = data.insectInfo
            this.options.soil = data.soilInfo
            this.options.vegetable = data.vegetableInfo
            this.options.water = data.waterInfo
        })
        // 掉一下收藏接口以判断用户是否收藏
        getCollectLogByuser(localStorage.getItem("id")).then((res)=>{
          const data = res.result
          for (let i = 0; i < data.length; i++) {
            if (data[i].collectArticleId == this.$route.query.id) {
              this.collectLogId = data[i].id;
              this.isCollect = true;
            }
          }

        })
    },
    methods: {
      submitMessageForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            // 新增留言
            this.messageList.push({
              message: this.messageForm.message,
              userAccount: localStorage.getItem('accountNumber'),
              articleId: this.$route.query.id, // 文章ID
              name: localStorage.getItem('name'),
            });
            // 清空留言表单
            this.messageForm.message = '';
            this.messageForm.userAccount = '';
          } else {
            return false;
          }
        })
      },
      addCollectList(){
        if(this.isCollect){
          deleteCollect(this.collectLogId*1).then((res)=>{
            console.log(res)
            if(res.code == 0){
              this.isCollect = false
              this.$message({
                type:'success',
                message: '取消收藏成功'
              })
            }
          })
        }else{
          addCollect({id:null,collectArticleId:this.$route.query.id,userId:localStorage.getItem('id'),title:this.$route.query.title}).then((res)=>{
            console.log(res)
            if(res.code == 0){
              this.isCollect = true
              this.$message({
                type:'success',
                message: '收藏成功'
              })
            }
          })

        }

      },
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            console.log(valid)
            // 表单验证通过，将文章保存到服务器
            if(this.isfixd == true){
                this.form.id = this.$route.query.id
                this.form.updateUserId = localStorage.getItem('id'),
                this.form.updateUserName = localStorage.getItem('name'),
                updateLog(this.form)
                this.$message({
                    message: '修改成功，1秒后跳转到内容中心',
                    type: 'success'
                })
            }else{
                this.form.userId = localStorage.getItem('id')
                this.form.userAccount = localStorage.getItem('accountNumber')
                addLog(this.form)
                this.$message({
                    message: '发布成功，1秒后跳转到内容中心',
                    type: 'success'
                })
            }
            setTimeout(() => {
                this.$router.push("/LogList")   
            }, 1000);
            
          } else {
            this.$message.error('表单验证失败');
          }
        });
      },
    },
  };
  </script>
  <style scoped>
  .article-form {
    margin: 20px;
    padding: 20px;

  }
  .form-footer {
    margin-top: 20px;
    text-align: center;
  }
  .coolectBox{
    display: flex;
    font-size: 16px;
  }
  .collectButton{
    cursor: pointer;
  }
  </style>