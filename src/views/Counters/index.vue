<template>
  <el-container>
  <el-header>新增你的計時器！</el-header>
  <el-main>
            <el-row>
                <el-col :xl="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :md="{span: 16, offset: 4}" :sm="{span: 20, offset: 2}" :xs="24">

            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">

                <el-form-item  label="名稱" prop="name">
                  <el-input placeholder="請輸入名稱" v-model.trim="ruleForm.name"></el-input>
                 </el-form-item>

                 <el-form-item label="描述" prop="description">
                  <el-input placeholder="請輸入描述"  v-model.trim="ruleForm.description"></el-input>
                 </el-form-item>

            <el-form-item label="密碼" prop="password">
                <el-input placeholder="請輸入密碼" type="password" v-model.trim.trim="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="確認密碼" prop="checkPass">
            <el-input placeholder="請再次確認密碼" type="password" v-model.trim="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

                 <el-form-item  label="限制人數" prop="limit">
                  <el-input placeholder="請輸入限制人數"  v-model.number="ruleForm.limit"></el-input>
                 </el-form-item>

                 <el-form-item>
                 <el-button type="danger" @click="handRegisterFn">送出</el-button>
                 </el-form-item>

                </el-form>
                </el-col>
            </el-row>
      </el-main>
    <el-footer> <h4>Copyright 2021 all rights reserved</h4></el-footer>
</el-container>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
export default ({
  setup () {
    // post 表單
    const ruleForm = reactive({
      name: '',
      description: '',
      password: '',
      checkPass: '',
      limit: ''
    })

    //
    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名稱為必填項目'))
      }
    }

    const checkLimit = (rule, value, callback) => {
      if (value) {
        return callback(new Error('限制人數為必填項目'))
      }
    }

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請輸入密碼'))
      } else {
        if (ruleForm.password !== '') {
          this.$refs.register.validateField('checkPass')
        }
        callback()
      }
    }

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請再次輸入密碼'))
      } else if (value !== ruleForm.password) {
        callback(new Error('兩次輸入密碼不一致!'))
      } else {
        callback()
      }
    }

    const rules = reactive({
      password: [
        { validator: validatePass, trigger: 'blur' }
      ],
      checkPass: [
        { validator: validatePass2, trigger: 'blur' }
      ],
      name: [
        { validator: checkName, trigger: 'blur' }
      ],
      limit: [
        { validator: checkLimit, trigger: 'blur' }
      ]
    })
    const handRegisterFn = () => {
      axios
        .post('/api/Create', ruleForm)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }

    return {
      ruleForm, handRegisterFn, rules
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
