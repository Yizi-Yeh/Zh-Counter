<template>
  <el-container>
    <el-header>管理你的計數器！</el-header>
    <el-main>
      <el-row>
        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 12, offset: 6}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column label="Date" prop="date"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column align="right">
              <template #header>
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </template>
              <template #default="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >Edit</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >Delete</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
    <el-footer> <h4>Copyright 2021 all rights reserved</h4></el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #e4f0e7;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-container {
  margin-bottom: 40px;
  height: 90vh;
}
.el-main {
  background-color: #fdfaf6;

  color: #333;
  text-align: center;
  line-height: 30px;
}
</style>
