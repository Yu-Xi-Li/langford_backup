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
        http.post('/article/update',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 审核文章
export const auditLog = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/article/audit',params).then(data=>{
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
        http.get(`/article/selectByArticleId/${id}`).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 通过用户id查询所有文章
export const getLogByuser = (id)=>{
    return new Promise((resolve, reject) => {
        http.get(`/article/selectOne/${id}`).then(data=>{
            resolve(data);
        }).catch((error) => {
            reject(error);
        });
    })
}
// 通过用户id查询收藏文章
export const getCollectLogByuser = (id)=>{
    return new Promise((resolve, reject) => {
        http.get(`/collect/selectOne/${id}`).then(data=>{
            resolve(data);
        }).catch((error) => {
            reject(error);
        });
    })
}
// 删除收藏
export const deleteCollect = (params)=>{
    return new Promise((resolve, reject) => {
        http.delete(`/collect/delete?idList=${params}`).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 新增收藏
export const addCollect = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/collect/insert',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
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
// 新增/修改基础信息列表
export const addFoundInfoList = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/foundationInfo/insertFoundationInfo',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 删除留言
export const deleteMessage = (params)=>{
    return new Promise((resolve, reject) => {
        http.detele('/leaveMessage/delete',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}
// 新增留言
export const addMessage = (params)=>{
    return new Promise((resolve, reject) => {
        http.post('/leaveMessage/insert',params).then(data=>{
            resolve(data);
        }).catch((error) => {
        // 失败时，将错误信息通过 reject 函数传递出去
            reject(error);
        });
    })
}