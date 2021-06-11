<template>
 <div>
            <el-row>
                <el-col :xl="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :md="{span: 16, offset: 4}" :sm="{span: 20, offset: 2}" :xs="24">
                 <div class="container">
                   <h1>竹東市場人流計數器</h1>
                   <h1 class="number">{{total}}</h1>
                   <div class="box">
                    <el-button class="btn-text" @click="add" type="info">增加</el-button>
                     <el-button @click="remove" type="info">減少</el-button>
                     <!-- <el-button @click="dialogVisible = true" type="danger">歸零</el-button> -->
                  <el-dialog
                  v-model="dialogVisible"
                  width="80%"
                  >
                  <br>
                  <br>
                  <br>
                  <br>
                   <!-- <el-input v-model="confirm.id" placeholder="請輸入id"></el-input> -->
                   <br>
                   <br>
                   <el-input  v-model="confirm.password"  type="password" placeholder="請輸入密碼"></el-input>
                  <template #footer>
                  <span class="dialog-footer">
                   <el-button type="danger" @click="dialogVisible = false">取消</el-button>
                 <el-button type="info" @click="handPasswordFn">確定</el-button>
                 </span>
                 </template>
              </el-dialog>
                   </div>
                 </div>
                </el-col>
            </el-row>
            <el-footer class="footer">
              <h4>Copyright 2021 all rights reserved</h4>
            </el-footer>
    </div>
</template>

<script>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  setup () {
    onMounted(() => {
      setInterval(() => {
        init()
      }, 2000)
    })

    const total = ref(0)

    const init = () => {
      axios.get('https://happy-counter.herokuapp.com/Counter/GetCounter/3')
        .then((res) => { total.value = res.data.result.counters.count })
        .catch((error) => { console.error(error) })
    }

    const add = () => {
      total.value++
      axios.post('https://happy-counter.herokuapp.com/Counter/Add/3')
        .then((res) => { console.log(res.data.result.counters.count) })
        .catch((error) => { console.error(error) })
    }

    const remove = () => {
      total.value--
      axios.post('https://happy-counter.herokuapp.com/Counter/Subtract/3')
        .then((res) => { console.log(res.data.result.counters.count) })
        .catch((error) => { console.error(error) })
    }

    const dialogVisible = ref(false)

    const confirm = reactive({
      password: ''
    })

    const handPasswordFn = () => {
      axios
        .post('https://happy-counter.herokuapp.com/Counter/Restart/3', confirm)
        .then((res) => {
          console.log(confirm)
          init()
          dialogVisible.value = false
        })
        .catch((err) => {
          dialogVisible.value = true
          console.log(err)
        })
    }

    return {
      total,
      add,
      remove,
      dialogVisible,
      confirm,
      handPasswordFn
    }
  }
}
</script>

<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.number {
  font-size: 100px;
  color: #2c3e50;
  font-family: Verdana;
  line-height: 1.75em;
  text-align: center;
  user-select: none;
}

span{
  font-size: 80px;
}

h4 {
color: #2c3e50;
}

.footer{
  padding-top: 150px;
  padding-bottom: 50px;
}
</style>
