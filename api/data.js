import axios from './axios'

export const getMenu = (params) => {
    return axios.request({
        url: '/permission/getMenu',
        method: 'POST',
        data: params
    })
}
export const getUserData =() => {
    return axios.request({
        url: '/home/getUserData'
    })
}
export const getTeamMatchData =() => {
    return axios.request({
        url: '/home/getTeamMatchData'
    })
}