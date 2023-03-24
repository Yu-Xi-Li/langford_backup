import http from '../utils/request'
// 登录
export const userLogin = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/user/login',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 注册
export const userLogon = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/user/register',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
export const getMenu = (params) => {
    http.post('/permission/getMenu',params).then(data=>{
        return data
    })
}
export const getUserData =(params) => {
    
}
export const getTeamMatchData =() => {
    return axios.request({
        url: '/home/getTeamMatchData'
    })
}