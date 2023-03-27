<template>
  <div v-if=this.isWYH style="display: flex;">
    <el-card style="width: 100%;margin:20px;justify-content: space-between">
      <el-table style="margin:20px 0" :data="tableData.fertilizerInfo.filter(item => item.auditStatus == 0)" border>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="value" label="肥料"></el-table-column>
        <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick('fertilizerInfo',scope.row.id, 1, scope.row.value, scope.row.updateUserAccount)" type="success" size="small">通过</el-button>
            <el-button @click="handleClick('fertilizerInfo',scope.row.id, 2, scope.row.value, scope.row.updateUserAccount)" type="danger" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table style="margin:20px 0" :data="tableData.insectInfo.filter(item => item.auditStatus == 0)" border>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="value" label="虫害"></el-table-column>
        <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick('insectInfo',scope.row.id, 1, scope.row.value, scope.row.updateUserAccount)" type="success" size="small">通过</el-button>
            <el-button @click="handleClick('insectInfo',scope.row.id, 2, scope.row.value, scope.row.updateUserAccount)" type="danger" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table style="margin:20px 0" :data="tableData.soilInfo.filter(item => item.auditStatus == 0)" border>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="value" label="土壤"></el-table-column>
        <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick('soilInfo',scope.row.id, 1, scope.row.value, scope.row.updateUserAccount)" type="success" size="small">通过</el-button>
            <el-button @click="handleClick('soilInfo',scope.row.id, 2, scope.row.value, scope.row.updateUserAccount)" type="danger" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table style="margin:20px 0" :data="tableData.vegetableInfo.filter(item => item.auditStatus == 0)" border>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="value" label="蔬菜"></el-table-column>
        <el-table-column prop="updateUserId" label="更新人"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick('vegetableInfo',scope.row.id, 1, scope.row.value, scope.row.updateUserAccount)" type="success" size="small">通过</el-button>
            <el-button @click="handleClick('vegetableInfo',scope.row.id, 2, scope.row.value, scope.row.updateUserAccount)" type="danger" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table style="margin:20px 0" :data="tableData.waterInfo.filter(item => item.auditStatus == 0)" border>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="value" label="水质"></el-table-column>
        <el-table-column prop="updateUserId" label="更新人"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick('waterInfo',scope.row.id, 1, scope.row.value, scope.row.updateUserAccount)" type="success" size="small">通过</el-button>
            <el-button @click="handleClick('waterInfo',scope.row.id, 2, scope.row.value, scope.row.updateUserAccount)" type="danger" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table style="margin:20px 0" :data="tableData.diseaseInfo.filter(item => item.auditStatus == 0)" border>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="value" label="疾病"></el-table-column>
        <el-table-column prop="updateUserAccount" label="更新人"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick('diseaseInfo',scope.row.id, 1, scope.row.value, scope.row.updateUserAccount)" type="success" size="small">通过</el-button>
            <el-button @click="handleClick('diseaseInfo',scope.row.id, 2, scope.row.value, scope.row.updateUserAccount)" type="danger" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

  </div>
  <div v-else>
    <el-empty description="您不是委员会成员哦，请联系负责人申请~"></el-empty>
  </div>
</template>
<script>
import { log } from 'console';
import { getFoundInfoList, addFoundInfoList } from '../../../api/data';
export default {
  data() {
    return {
      tableData: {},
      isWYH: false,
      summitData:{
        "diseaseInfo": [],
        "fertilizerInfo": [],
        "insectInfo": [],
        "soilInfo": [],
        "vegetableInfo": [],
        "waterInfo": []
      },
    };
  },
  created(){
    if(localStorage.getItem('committee') == 1){
      this.isWYH = true
    }
  },
  mounted() {
    getFoundInfoList().then((res) => {
      this.tableData = res.result
    })
  },
  methods: {
    handleClick(name,id,pass,value,author){
      this.summitData[name] = [{
          "auditStatus": pass,
          "id": id,
          "updateTime": "",
          "updateUserAccount": author,
          "value": value,
      }]
      addFoundInfoList(this.summitData).then((res)=>{
        if(res.code ==0){
          getFoundInfoList().then((res) => {
            this.tableData = res.result
          })
        }
      })
    },
  }
};
</script>