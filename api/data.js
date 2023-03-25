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
// 获取所有用户信息列表
export const getAllUserInfo = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/user/selectAll',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 修改用户信息
export const userAgainLogon = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/user/update',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 获取所有文章列表
export const getLogList = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/article/selectAll',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 通过文章id查询文章
export const getLogDetail = (id)=>{
    return new Promise((resolve, reject) => {
        http.get(`/article/selectArticleById/${id}`).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 通过用户id查询文章
export const getLogByuser = (id)=>{
    return new Promise((resolve, reject) => {
        http.get(`/article/selectOne/${id}`).then(data=>{
            resolve(data);
        }).catch((error) => {
            reject(error);
        });
    })
}
// 获取基础信息列表
export const getFoundInfoList = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/foundationInfo/selectAllFoundationInfo',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 发布文章
export const addLog = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/article/insert',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 修改文章
export const updateLog = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/article/insert',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
export const getUserData =(params) => {
    
}