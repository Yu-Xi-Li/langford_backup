<template>
  <div style="display: flex;">
    <el-card style="width: 65%;margin:20px;justify-content: space-between">
        <el-table style="margin:20px 0" :data="tableData.fertilizerInfo.filter(item => item.auditStatus == 1)" border>
          <el-table-column prop="value" label="肥料"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.insectInfo.filter(item => item.auditStatus == 1)" border>
          <el-table-column prop="value" label="虫害"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.soilInfo.filter(item => item.auditStatus == 1)" border>
          <el-table-column prop="value" label="土壤"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.vegetableInfo.filter(item => item.auditStatus == 1)" border>
          <el-table-column prop="value" label="蔬菜"></el-table-column>
          <el-table-column prop="updateUserId" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.waterInfo.filter(item => item.auditStatus == 1)" border>
          <el-table-column prop="value" label="水质"></el-table-column>
          <el-table-column prop="updateUserId" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.diseaseInfo.filter(item => item.auditStatus == 1)" border>
          <el-table-column prop="value" label="疾病"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
      </el-card>
      <el-card style="width: 30%;margin:20px;height: 350px;" >
        <div slot="header">
          <span>新增基础信息</span>
        </div>
        <div>
            <el-form>
              <el-form-item label="所属分类">
                <el-select v-model="selectedType" placeholder="请选择">
                  <el-option v-for="(value, key) in tableData" :key="key" :label="getLable(key)" :value="key"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="内容">
                <el-input v-model="newItem" placeholder="请输入"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="addFoundInfo()">确认新增</el-button>
            </div>
        </div>
      </el-card>
      
  </div>
</template>
<script>
import { getFoundInfoList, addFoundInfoList } from '../../../api/data';
export default {
  data() {
    return {
      tableData: {},
      selectedType: "",
      newItem: "",
      summitData:{
        "diseaseInfo": [],
        "fertilizerInfo": [],
        "insectInfo": [],
        "soilInfo": [],
        "vegetableInfo": [],
        "waterInfo": []
      },
      CE:{
        "疾病": "diseaseInfo",
        "肥料": "fertilizerInfo",
        "昆虫": "insectInfo",
        "土壤": "soilInfo",
        "蔬菜": "vegetableInfo",
        "水": "waterInfo"
      }
    };
  },
  mounted(){
    getFoundInfoList().then((res)=>{
      this.tableData = res.result
    })
  },
  methods: {
    getLable(e){
        switch (e) {
          case 'diseaseInfo':
            return "疾病";
          case 'fertilizerInfo':
            return "肥料";
          case 'insectInfo':
            return "昆虫";
          case 'soilInfo':
            return "土壤";
          case 'vegetableInfo':
            return "蔬菜";
          case 'waterInfo':
            return "水";
          default:
            return "状态异常";
        }
    },
    addFoundInfo() {
      if (this.selectedType && this.newItem) {
        this.summitData[this.selectedType] = [{
          "auditStatus": 0,
          "id": 0,
          "updateTime": "",
          "updateUserAccount": localStorage.getItem('accountNumber'),
          "value": this.newItem,
        }]
        addFoundInfoList(this.summitData).then((res)=>{
          if(res.code == 0){
            this.selectedType = '',
            this.newItem= '',
            this.summitData={
              "diseaseInfo": [],
              "fertilizerInfo": [],
              "insectInfo": [],
              "soilInfo": [],
              "vegetableInfo": [],
              "waterInfo": []
            }
            this.$message({
              type: 'success',
              message: '新增成功，请等待审核通过'
            })
          }
        })
      }
    }
  }
};
</script>