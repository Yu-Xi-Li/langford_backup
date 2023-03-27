<template>
    <div class="login-container">
        <el-card class="login-card">
            <h3 class="title">登录</h3>
            <el-form :model="form" :rules="rules" ref="form" label-width="80px">
                <el-form-item label="手机号" prop="accountNumber">
                    <el-input v-model.trim="form.accountNumber" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model.trim="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item  >
                    <el-button style="margin-right: 50px;" type="primary" @click="login()">登录</el-button>
                    <router-link to="/logon"><el-button>注册</el-button></router-link>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { userLogin } from '../../../api/data'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                accountNumber: [
                    { required: true, message: '请输入手机号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        };
    },
    created(){

    },
    methods: {
        login() {
            userLogin({accountNumber:this.form.accountNumber,password:this.form.password}).then((data)=>{
                if(data.code === 0){
                    Object.keys(data.result).forEach((prop) => {
                        if(`${prop}` == 'password') return
                        localStorage.setItem(`${prop}`,`${data.result[prop]}`)
                    });
                    // 输出：name: John, age: 30
                    this.$message({
                        message: '登录成功，2秒后跳转到首页',
                        type: 'success'
                    })
                    setTimeout(() => {
                        this.$router.push('./')
                    }, 2000);
                }else{
                    this.$message({
                        message: '账号或密码错误，请重试',
                        type: 'error'
                    })
                    this.form.password = null
                }
                
            })
        }
    }
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-card {
    width: 400px;
}

.title {
    text-align: center;
    margin-bottom: 20px;
}
</style>