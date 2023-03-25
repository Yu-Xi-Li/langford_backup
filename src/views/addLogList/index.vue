<template>
    <div class="article-form">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item  label="文章标题">
          <el-input :disabled="isfixd == true ? true : false" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="疾害">
          <el-select v-model="form.disease" placeholder="请选择">
            <el-option v-for="option in options.disease" :key="option.value" :label="option.label" :value="option.disease"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="肥料">
          <el-select v-model="form.fertilizer" placeholder="请选择">
            <el-option v-for="option in options.fertilizer" :key="option.value" :label="option.label" :value="option.fertilizer"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="虫害">
          <el-select v-model="form.insect" placeholder="请选择">
            <el-option v-for="option in options.insect" :key="option.value" :label="option.label" :value="option.insectPest"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="土壤">
          <el-select v-model="form.soil" placeholder="请选择">
            <el-option v-for="option in options.soil" :key="option.value" :label="option.label" :value="option.soil"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="蔬菜">
          <el-select v-model="form.vegetable" placeholder="请选择">
            <el-option v-for="option in options.vegetable" :key="option.value" :label="option.label" :value="option.vegetableName"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="水质">
          <el-select v-model="form.water" placeholder="请选择">
            <el-option v-for="option in options.water" :key="option.value" :label="option.label" :value="option.waterQuality"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="form-footer">
        <el-button type="primary" @click="submitForm">{{ this.isfixd == true ? '提交修改' : '发布'}}</el-button>
      </div>
    </div>
  </template>
  <script>
  import {getFoundInfoList, addLog, getLogDetail, updateLog} from '../../../api/data'
  export default {
    data() {
      return {
        isfixd: false,
        form: {
          userId:localStorage.getItem('id'),
          title: '',
          disease: '',
          fertilizer: '',
          insect: '',
          soil: '',
          vegetable: '',
          water: '',
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
            
        }
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
    },
    methods: {
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            console.log(valid)
            // 表单验证通过，将文章保存到服务器
            if(this.isfixd == true){
                updateLog(this.form)
                this.$message({
                    message: '修改成功，1秒后跳转到内容中心',
                    type: 'success'
                })
            }else{
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
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-footer {
    margin-top: 20px;
    text-align: center;
  }
  </style>