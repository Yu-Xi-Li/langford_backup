<template>
    <div class="register-container">
      <el-card class="register-card">
        <h3 class="title">注册</h3>
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model.trim="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="accountNumber">
            <el-input v-model.trim="form.accountNumber" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model.trim="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model.trim="form.confirmPassword" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register">注册</el-button>
            <router-link to="/login"><el-button>返回登录</el-button></router-link>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
import { log } from 'console';
  import {userLogon} from '../../../api/data'
import { link } from 'fs';
  export default {
    data() {
      return {
        form: {
          username: '',
          accountNumber:'',
          password: '',
          confirmPassword: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          accountNumber:[
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
      };
    },
    methods: {
        register() {
            if(this.form.password.length>0 && this.form.password === this.form.confirmPassword){
                userLogon({
                    name: this.form.username,
                    accountNumber:this.form.accountNumber,
                    password: this.form.password
                }).then(data => {
                    if(data.code === 0){
                        this.$message({
                            message:'登录成功,2秒后跳转登录页面',
                            type: 'success'
                        })
                        setTimeout(() => {
                            this.$router.push('/login')
                        }, 2000);
                    };
                });
            };
        }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .register-card {
    width: 400px;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>