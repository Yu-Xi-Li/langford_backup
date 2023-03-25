<template>
    <div class="category">
      <el-row>
        <el-col :span="16">
          <el-table :data="tableData">
            <el-table-column prop="disease" label="疾害"></el-table-column>
            <el-table-column prop="fertilizer" label="肥料"></el-table-column>
            <el-table-column prop="insect" label="虫害"></el-table-column>
            <el-table-column prop="soil" label="土壤"></el-table-column>
            <el-table-column prop="vegetable" label="蔬菜"></el-table-column>
            <el-table-column prop="water" label="水质"></el-table-column>
          </el-table>
        </el-col>
        <el-col :span="8">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="所属分类">
              <el-select v-model="form.category" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="新增内容">
              <el-input v-model="form.content"></el-input>
            </el-form-item>
          </el-form>
          <div class="form-footer">
            <el-button type="primary" @click="submitForm">新增</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        options: [
          { label: '疾害', value: 'disease' },
          { label: '肥料', value: 'fertilizer' },
          { label: '虫害', value: 'insect' },
          { label: '土壤', value: 'soil' },
          { label: '蔬菜', value: 'vegetable' },
          { label: '水质', value: 'water' },
        ],
        form: {
          category: '',
          content: '',
        },
        tableData: [
          { disease: '疾害1', fertilizer: '肥料1', insect: '虫害1', soil: '土壤1', vegetable: '蔬菜1', water: '水质1' },
          { disease: '疾害2', fertilizer: '肥料2', insect: '虫害2', soil: '土壤2', vegetable: '蔬菜2', water: '水质2' },
          { disease: '疾害3', fertilizer: '肥料3', insect: '虫害3', soil: '土壤3', vegetable: '蔬菜3', water: '水质3' },
        ],
      };
    },
    methods: {
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            // 表单验证通过，将新增内容保存到服务器
            this.$http.post(`/api/category/${this.form.category}`, { content: this.form.content }).then((response) => {
              this.$message.success('新增成功');
            }).catch((error) => {
              this.$message.error('新增失败');
            });
          } else {
            this.$message.error('表单验证失败');
          }
        });
      },
    },
  };
  </script>
  <style scoped>
  .category {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-footer {
    margin-top: 20px;
    text-align: center;
  }
  </style>