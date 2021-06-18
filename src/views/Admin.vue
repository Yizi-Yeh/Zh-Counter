<template>
  <el-container>
    <el-header>管理你的計數器！</el-header>
    <el-main>
      <el-row>
        <el-col
          :xl="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :md="{ span: 16, offset: 4 }"
          :sm="{ span: 20, offset: 2 }"
          :xs="24"
        >
          <el-table
            :data="
              tableData.filter(
                (data) =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
            style="width: 100%"
          >
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Dedcription" prop="description">
            </el-table-column>
            <el-table-column align="right">
              <template #header>
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="請輸入關鍵字"
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
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const tableData = reactive([
      {
        name: '',
        description: ''
      }
    ])
    const init = () => {
      store.dispatch('handInit').then(res => {
        const resArr = res.data.result.counters
        resArr.map((item) => {
          const arr = []
          arr.push(item.name)
          console.log(arr)
        })
      })
    }

    onMounted(() => {
      init()
    })

    const search = ref('')

    const handleEdit = (index, row) => {
      console.log(index, row)
    }

    const handleDelete = (index, row) => {
      console.log(index, row)
    }

    return {
      tableData,
      search,
      handleEdit,
      handleDelete
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
