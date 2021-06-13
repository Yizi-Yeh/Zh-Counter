<template>
  <el-container>
  <el-header>新增你的計時器！</el-header>
  <el-main>
            <el-row>
                <el-col :xl="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :md="{span: 16, offset: 4}" :sm="{span: 20, offset: 2}" :xs="24">

            <el-form  :model="ruleForm"   :rules="rules" ref="ruleFormRef"
            @keyup.enter="submitForm" label-width="100px">

                <el-form-item  label="名稱" prop="Name">
                  <el-input  placeholder="請輸入名稱" v-model="ruleForm.Name"></el-input>
                 </el-form-item>

                 <el-form-item label="描述" prop="Description">
                  <el-input  placeholder="請輸入描述"  v-model="ruleForm.Description"></el-input>
                 </el-form-item>

            <el-form-item label="密碼" prop="Password">
                <el-input  placeholder="請輸入密碼" type="password" v-model="ruleForm.Password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="確認密碼" prop="ConfirmPassword">
            <el-input  placeholder="請再次確認密碼" type="password" v-model="ruleForm.ConfirmPassword" autocomplete="off"></el-input>
            </el-form-item>

                 <el-form-item  label="限制人數" prop="Limit">
                  <el-input  placeholder="請輸入限制人數"  v-model.number="ruleForm.Limit"></el-input>
                 </el-form-item>

                 <el-form-item>
                 <el-button type="info" @click="submitForm">送出</el-button>
                 <el-button @click="resetForm('ruleFormRef')">重置</el-button>
                 </el-form-item>

                </el-form>
                </el-col>
            </el-row>
      </el-main>
    <el-footer> <h4>Copyright 2021 all rights reserved</h4></el-footer>
</el-container>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import qs from 'qs'
import { useRouter } from 'vue-router'
export default ({
  setup () {
    const { ctx } = getCurrentInstance()

    const router = useRouter()

    const ruleForm = reactive({
      Name: '',
      Description: '',
      Password: '',
      ConfirmPassword: '',
      Limit: ''
    })

    const ruleFormRef = ref(null)

    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名稱為必填項目'))
      }
    }

    const checkLimit = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('限制人數為必填項目'))
      }
    }

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請輸入密碼'))
      } else {
        if (ruleForm.Password !== '') {
          ctx.$refs.ruleForm.validateField('ConfirmPassword')
        }
        callback()
      }
    }

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請再次輸入密碼'))
      } else if (value !== ruleForm.Password) {
        callback(new Error('兩次輸入密碼不一致!'))
      } else {
        callback()
      }
    }

    const rules = reactive({
      Password: [
        { required: true, validator: validatePass, trigger: 'blur' }
      ],
      ConfirmPassword: [
        { required: true, validator: validatePass2, trigger: 'blur' }
      ],
      Name: [
        { required: true, validator: checkName, trigger: 'blur' }
      ],
      Limit: [
        { required: true, validator: checkLimit, trigger: 'blur' }
      ]
    })

    const submitForm = () => {
      ctx.$refs.ruleFormRef.validate(valid => {
        if (!valid) {
          return false
        }
      })
      axios.post('/api/Create/', qs.stringify(ruleForm), {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
        .then(res => {
          if (res.data.status) {
            Swal.fire({
              icon: 'success',
              title: '新增成功',
              text: '將進入房間開始您的計數器功能'
            })
            router.push(`/counters/${res.data.result.counters.id}`)
          } else {
            Swal.fire({
              icon: 'error',
              title: '新增失敗',
              text: res.data.error_msg
            })
          }
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: '新增失敗',
            text: err.response.data.message
          })
        })
    }

    const resetForm = (ruleFormRef) => {
      ctx.$refs.ruleFormRef.resetFields()
    }

    return {
      ruleForm, submitForm, rules, resetForm, ruleFormRef
    }
  }
})
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
