import Mock from 'mockjs'
import homeApi from './mockServeData/home'

Mock.mock('/home/getUserData', homeApi.getUserData())
Mock.mock('/home/getTeamMatchData', homeApi.getTeamMatchData())