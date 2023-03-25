<template>
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#eee" active-text-color="#ffd04b" :collapse="isCollapse">
        <h3>{{isCollapse ? '系统' : '种植技术动态查询系统'}}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path" >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :index="item.index" :key="item.name">
            <template slot="title">
              <i :class="'el-icon-' + item.icon"></i>
              <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group v-for="(subItem) in item.children" :key="subItem.path">
              <el-menu-item @click="clickMenu(subItem)" :index="subItem.name">
                <i :class="'el-icon-' + subItem.icon"></i>
                <span slot="title">{{subItem.label}}</span>
              </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        menu: [
          {
            path: '/User',
            name: 'User',
            label: '个人中心',
            icon: 'user',
            url: 'User/User',
            index: '1'
          },
          {
            path: '/LogList',
            name: 'LogList',
            label: '内容中心',
            icon: 'video-play',
            url: 'LogList/LogList',
            index: '2'
          },
          {
            path: '/BaseInfo',
            name: 'BaseInfo',
            label: '基础信息管理',
            icon: 'medal',
            url: 'BaseInfo/BaseInfo',
            index: '3'
          },
          {
            path: '/Sponsor',
            name: 'Sponsor',
            label: '委员会申请',
            icon: 'notebook-2',
            url: 'Sponsor/Sponsor',
            index: '4'
          },
          {
            path: '/Account',
            name: 'Account',
            label: '居委会审核',
            icon: 'tickets',
            url: 'Account/Account',
            index: '5'
          },
          {
            label: '信息审核',
            name: 'Setting',
            icon: 'setting',
            index: '6',
            children: [
              {
                path: 'Setting/UserSolid',
                name: 'UserSolid',
                label: '文章审核',
                icon: 'user-solid',
                url: 'Setting/UserSolid',
                index: '6-1'
              },
              {
                path: 'Setting/MenuSetting',
                name: 'MenuSetting',
                label: '基础信息审核',
                icon: 'menu',
                url: 'Setting/MenuSetting',
                index: '6-2'
              }
            ]
          }
        ]
      };
    },
    methods: {
      clickMenu(item){
        console.log(item);
        this.$store.commit('isHeaderName',item.label);
        console.log(this.$store.state.headerName);
        if(this.$route.path == item.path) return;
        this.$router.push({
          name: item.name,
          path: item.path
        })
      }
    },
    computed: {
      noChildren(){
        return this.menu.filter(item => !item.children)
      },
      hasChildren(){
        return this.menu.filter(item => item.children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }
    }
  }
</script>
<style scoped lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px; 
  }
  .el-menu {
    height: 100%;
    border: none;
    h3 {
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
  }
</style>