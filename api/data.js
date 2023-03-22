import axios from './axios'
import { _post, _get } from '../utils/request'
export const getMenu = (params) => {
    return axios.request({
        url: '/permission/getMenu',
        method: 'POST',
        data: params
    })
}
export const getUserData =(params) => {
    return _post('/user/login', params)
}
export const getTeamMatchData =() => {
    return axios.request({
        url: '/home/getTeamMatchData'
    })
}