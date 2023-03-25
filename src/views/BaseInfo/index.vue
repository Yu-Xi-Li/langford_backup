<template>
  <div style="display: flex;">
    <el-card style="width: 65%;margin:20px;justify-content: space-between">
        <el-table style="margin:20px 0" :data="tableData.fertilizerInfo" border>
          <el-table-column prop="fertilizer" label="肥料"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.insectInfo" border>
          <el-table-column prop="insectPest" label="虫害"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.soilInfo" border>
          <el-table-column prop="soil" label="土壤"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.vegetableInfo" border>
          <el-table-column prop="vegetableName" label="蔬菜"></el-table-column>
          <el-table-column prop="updateUserId" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.waterInfo" border>
          <el-table-column prop="waterQuality" label="水质"></el-table-column>
          <el-table-column prop="updateUserId" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
        <el-table style="margin:20px 0" :data="tableData.diseaseInfo" border>
          <el-table-column prop="disease" label="疾病"></el-table-column>
          <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
          <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        </el-table>
      </el-card>
      <el-card style="width: 30%;margin:20px;height: 300px;" >
        <div slot="header">
          <span>新增基础信息</span>
        </div>
        <div>
            <el-form>
              <el-form-item label="所属分类">
                <el-select v-model="selectedType" placeholder="请选择">
                  <el-option v-for="(value, key) in tableData" :key="key" :label="key" :value="key"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="内容">
                <el-input v-model="newItem" placeholder="请输入"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="addItem">确认新增</el-button>
            </div>
        </div>
      </el-card>
      
  </div>
</template>
<script>
import { getFoundInfoList } from '../../../api/data';
export default {
  data() {
    return {
      tableData: {
      },
      selectedType: "",
      newItem: ""
    };
  },
  mounted(){
    getFoundInfoList().then((res)=>{
      this.tableData = res.result
      
  })
  },
  methods: {
    addItem() {
      if (this.selectedType && this.newItem) {
        this.data[this.selectedType].push({ id: this.tableData[this.selectedType].length + 1, [this.selectedType.slice(0, -1)]: this.newItem, updateUserAccount: null, updateTime: null, auditStatus: 0 });
        this.selectedType = "";
        this.newItem = "";
      }
    }
  }
};
</script>