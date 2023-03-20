<template>
  <div>
      <el-card class="cardContent" shadow="always">
        <div slot="header">
          <span>发布文章</span>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="80px" :style="{width:'500px'}">
            <el-form-item label="文章标题">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item v-for="i in form.length" :key="i" label="选项">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            
          </el-form>
        </div>
      </el-card>
      
  </div>
</template>

<script>
export default {
  data(){
    return {
      isFix: false,
      form: {
        disease: "",        // 疾害
        fertilizer: "",     // 肥料
        insect: "",         // 虫害
        soil: "",           // 土壤
        vegetable: "",      // 蔬菜
        water: ""           // 水质
      }
    }
  },
  method: {
    onSubmit() {
        console.log('submit!');
      }
  }
}
</script>

<style lang="scss" scoped>
.cardContent{
  margin: 30px 20px;
}
</style>