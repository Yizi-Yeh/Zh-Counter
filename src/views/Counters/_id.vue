<template>
  <el-container>
    <el-main>
      <el-row v-show="isLoad">
        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 24}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <h1>{{nowDay}}</h1>
          <h1>{{nowTime}}</h1>
        </el-col>

        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 24}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <h1 class="title">名稱：{{ PageDetail.data.name }}</h1>
          <h2 class="sub-title">描述：{{ PageDetail.data.description }}</h2>
        </el-col>

        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 24}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <h2 class="limit">限制人數：{{ PageDetail.data.limit }} 人</h2>
        </el-col>

        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 24}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <h1 class="number">{{ PageDetail.data.count }}</h1>
        </el-col>

        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 24}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <div class="box">
            <el-button class="btn-text" @click="add" type="danger"
              >增加</el-button
            >
            <el-button @click="remove" type="info">減少</el-button>
          </div>
        </el-col>
      </el-row>
      <img v-show="!isLoad" class="load" src="@/assets/load.gif" alt="" />
      <div v-show="isLoad" class="box">
        <el-button @click="handPasswordFn">歸零</el-button>
        <el-button @click="copyUrl()">複製網址</el-button>
      </div>
    </el-main>

    <el-footer class="footer" v-show="isLoad">
      <h4>Copyright 2021 all rights reserved</h4>
    </el-footer>
  </el-container>
</template>

<script>
import { onMounted, ref, reactive } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import { useRoute } from 'vue-router'
import qs from 'qs'
export default {
  name: 'Counter',
  setup () {
    const nowDay = ref('')
    const nowTime = ref('')

    const route = useRoute()

    onMounted(() => {
      nowTimes()
      init()
      setInterval(() => {
        init()
      }, 2000)
    })

    const copyUrl = () => {
      const oInput = document.createElement('input')
      oInput.value = window.location.href
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      oInput.remove()
    }

    const isLoad = ref(false)
    const PageDetail = reactive({ data: {} })
    const init = () => {
      axios.get(`/api/GetCounter/${route.params.id}`)
        .then((res) => {
          if (res.data.status) {
            isLoad.value = true
            PageDetail.data = res.data.result.counters
          } else {
            console.log(res.data.error_msg)
          }
        })
        .catch((error) => { console.log(error.data.error_msg) })
    }

    const add = () => {
      if (PageDetail.data.count < PageDetail.data.limit) {
        PageDetail.data.count++
      }
      axios.post(`/api/Add/${route.params.id}`)
        .then((res) => {
          if (res.data.status && PageDetail.data.count < PageDetail.data.limit) {
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              icon: 'success',
              title: '增加成功'
            })
          } else {
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              icon: 'error',
              title: '超過限制',
              text: res.data.error_msg
            })
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '新增失敗',
            text: err.response.data.message
          })
        })
    }

    const remove = () => {
      PageDetail.data.count--
      axios.post(`/api/Subtract/${route.params.id}`)
        .then((res) => {
          if (res.data.status) {
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              icon: 'success',
              title: '減少成功'
            })
          } else {
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              icon: 'error',
              title: '超過限制',
              text: res.data.error_msg
            })
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '新增失敗',
            text: err.response.data.message
          })
        })
    }

    const handPasswordFn = () => {
      (async () => {
        const { value: password } = await Swal.fire({
          title: '請輸入密碼',
          input: 'password',
          inputPlaceholder: '請輸入您的密碼',
          inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
          }
        })

        if (password) {
          axios.post(`/api/Restart/${route.params.id}`, qs.stringify({ password: password }), {
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
          })
            .then(res => {
              if (res.data.status) {
                Swal.fire({
                  icon: 'success',
                  title: '成功',
                  text: '數量即將歸零'
                })
                init()
              } else {
                Swal.fire({
                  icon: 'error',
                  title: '失敗',
                  text: res.data.error_msg
                })
              }
            })
            .catch(err => {
              Swal.fire({
                icon: 'error',
                title: '失敗',
                text: err.data.error_msg
              })
            })
        }
      })()
    }

    // 取得當下時間
    const timeFormate = (timeStamp) => {
      const newdate = new Date(timeStamp)
      const year = newdate.getFullYear()
      const month = newdate.getMonth() + 1 < 10 ? '0' + (newdate.getMonth() + 1) : newdate.getMonth() + 1
      const date = newdate.getDate() < 10 ? '0' + newdate.getDate() : newdate.getDate()
      const hh = newdate.getHours() < 10 ? '0' + newdate.getHours() : newdate.getHours()
      const mm = newdate.getMinutes() < 10 ? '0' + newdate.getMinutes() : newdate.getMinutes()
      const ss = newdate.getSeconds() < 10 ? '0' + newdate.getSeconds() : newdate.getSeconds()

      nowTime.value = hh + ':' + mm + ':' + ss
      nowDay.value = year + '年' + month + '月' + date + '日'
    }

    const nowTimes = () => {
      timeFormate(new Date())
      setInterval(function () {
        timeFormate(new Date())
      }, 1000)
    }

    return {
      isLoad,
      PageDetail,
      add,
      remove,
      confirm,
      handPasswordFn,
      copyUrl,
      nowDay,
      nowTime,
      nowTimes,
      timeFormate
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

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

.el-container {
  height: 90vh;
}

.el-row {
  height: 65vh;
}

.el-col {
  display: flex;
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

.el-button {
  min-height: 40px;
  padding: 15px 30px;
  font-size: 25px;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 20px;
}

.footer {
  padding-top: 70px;
  padding-bottom: 50px;
}

.limit {
  color: #f56c6c;
}

.title {
  margin-bottom: 10px;
}
.sub-title {
}

.load {
  width: 100px;
}
</style>
