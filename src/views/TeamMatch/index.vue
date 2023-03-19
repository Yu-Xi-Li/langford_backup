<template>
  <div>
    

    <el-select v-model="value" placeholder="请选择" @change="handleCommand" style="margin-top:30px">
      <el-option
        v-for="(weekItem, index) in list" 
        :key="index"
        :label="weekItem.weeks"
        :value="index">
      </el-option>
    </el-select>

      <el-table v-if="list[this.indexNum]" :data="list[this.indexNum].groups" style="width:50%;margin-top:50px">
        <el-table-column prop="group" label="组名" width="150">
        </el-table-column>
        <el-table-column prop="winning" label="连胜" width="100">
        </el-table-column>
        <el-table-column prop="groupPoint" label="巅峰分" width="100">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="remark"
          label="备注"
          width="300"
        >
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="primary"
              size="small"
              >查看详情</el-button
            >
            <el-button
              @click="handleClick(scope.row)"
              type="danger"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!--  -->
        <el-dialog title="成员详情" :visible.sync="dialogTableVisible">
          <el-table :data="members">
            <el-table-column prop="QQ" label="QQ" width="150">
            </el-table-column>
            <el-table-column prop="gameName" label="游戏昵称" width="100">
            </el-table-column>
            <el-table-column sortable prop="sex" label="性别" width="100">
            </el-table-column>
            <el-table-column sortable prop="rank" label="勇士段" width="100">
            </el-table-column>
            <el-table-column sortable prop="point" label="巅峰分" width="100">
            </el-table-column>
            <el-table-column sortable prop="reward" label="奖励" width="100">
            </el-table-column>
            <el-table-column show-overflow-tooltip prop="remark" label="备注" width="300">
            </el-table-column>
          </el-table>
        </el-dialog>
    </div>
</template>

<script>
import { getTeamMatchData } from '../../../api/data'
export default {
  data() {
    return {
      dialogTableVisible: false,
      members: [],
      value:'',
      indexNum: 0,
      list: [
        // {
        //   weeks: "第一周",
        //   groups: [
        //     // 组信息
        //     {
        //       group: "A", // 组名
        //       winning: "6+", // 胜场数  +代表连胜  没有+代表胜场
        //       groupPoint: "2400",
        //       members: [
        //         // 组员信息
        //         {
        //           QQ: "211323232",
        //           gameName: "阿斯顿撒",
        //           point: "2600",
        //           rank: "26",
        //           reward: "1",
        //         },
        //         {
        //           QQ: "211323232",
        //           gameName: "阿斯顿撒",
        //           point: "2600",
        //           rank: "26",
        //           reward: "1",
        //         },
        //         {
        //           QQ: "211323232",
        //           gameName: "阿斯顿撒",
        //           point: "2600",
        //           rank: "26",
        //           reward: "1",
        //         },
        //         {
        //           QQ: "211323232",
        //           gameName: "阿斯顿撒",
        //           point: "2600",
        //           rank: "26",
        //           reward: "1",
        //         },
        //         {
        //           QQ: "211323232",
        //           gameName: "阿斯顿撒",
        //           point: "2600",
        //           rank: "26",
        //           reward: "1",
        //         },
        //       ],
        //     }
      ],
    };
  },
  mounted(){
    getTeamMatchData().then(res =>{
      console.log(res);
      if(res.status === 200){
        this.list = res.data;
      }
    })
  },
  methods: {
    handleClick(e) {
      console.log(e);
      this.members = e.members
      this.dialogTableVisible = true;
    },
    handleCommand(command) {
      console.log(command);this.$message('click on item ' + command);
      this.indexNum = command
    }
  },
};
</script>

<style>
</style>