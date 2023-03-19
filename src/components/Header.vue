<template>
  <header>
      <div class="content-1">
          <div class="menuBox">
            <el-button @click="handleMenu()" class="menu" plain :icon="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" size="mini"></el-button>
          </div>
          <h4>{{isHeaderName}}</h4>
      </div>
      <div class="content-2">
          <el-dropdown trigger="click" size="mini">
              <span>
                  <img class="userImg" :src="userImg" alt="">
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
          </el-dropdown>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            userImg: require('../assets/images/user.jpg'),
            herderName: this.$store.state.headerName,
        }
    },
    mounted(){

    },
    methods: {
        handleMenu(){
            this.$store.commit('collapseMenu')
        }
    },
    computed: {
        isCollapse(){
            return this.$store.state.tab.isCollapse
        },
        isHeaderName(){
            return this.$store.state.headerName
        }
    }
}
</script>

<style scoped lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-1 {
            display: flex;
            height: 60px;
            align-items: center;
            ::v-deep .el-button--mini{
                padding: 3px 10px;
            }
            .menuBox{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-right: 15px;
                ::v-deep .el-icon-s-fold{
                    font-size: 18px;
                };
                ::v-deep.el-icon-s-unfold{
                    font-size: 18px;
                }
            }
            h4{
                line-height: 1;
                display: inline-block;
                color: #ddd;
            }
        }
        .content-2 {
            .userImg{
                width: 40px;
                border-radius: 50%;
            }
        }
    }
</style>