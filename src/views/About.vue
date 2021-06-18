<template>
  <el-container>
    <el-header>
      <h4>About Counters</h4>
    </el-header>
    <el-main>
      <el-row>
        <el-col
          :xl="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :md="{ span: 16, offset: 4 }"
          :sm="{ span: 20, offset: 2 }"
          :xs="24"
        >
          <br />
          <h4>因應疫情爆發需管制竹東市場的人流，</h4>
          <h4>而製作了此計數器。</h4>
          <br />
          <h1>Service</h1>
          <br />
        </el-col>

        <el-col
          :xl="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :md="{ span: 16, offset: 4 }"
          :sm="{ span: 20, offset: 2 }"
          :xs="24"
        >
          <h4>．創建各區計數器</h4>
          <h4>．輸入密碼計數歸零</h4>
          <h4>．分享連結鈕</h4>
          <br />
        </el-col>
        <el-col
          :xl="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :md="{ span: 16, offset: 4 }"
          :sm="{ span: 16, offset: 2 }"
          :xs="24"
        >
        </el-col>
        <el-col
          :xl="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :md="{ span: 16, offset: 4 }"
          :sm="{ span: 20, offset: 2 }"
          :xs="24"
        >
          <h1>Contact</h1>
          <br />
          <h4>
            If you have any question about us,<br />Don`t hestitate to contact
            us !
          </h4>
        </el-col>
      </el-row>
    </el-main>
    <el-footer> <h4>Copyright 2021 all rights reserved</h4></el-footer>
  </el-container>
</template>

<style scoped>
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

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
