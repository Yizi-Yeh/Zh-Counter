<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row>
        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 12, offset: 6}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <img src="https://picsum.photos/345/230/?random=1" alt="" />
        </el-col>
        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 12, offset: 6}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <h4>快樂計數器的開始</h4>
          <p>
            宇宙是廣袤空間和其中存在的各種天體以及瀰漫物質的總稱。宇宙起源是一個極其複雜的問題。宇宙是物質世界，它處於不斷的運動和發展中。千百年來，科學家們一直在探尋宇宙是什麼時候、如何形成的。直到今天，許多科學家認為，宇宙是由大約137億年前發生的一次大爆炸形成的。
          </p>
        </el-col>
        <br />
        <br />
        <br />
        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 12, offset: 6}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <img src="https://picsum.photos/345/230/?random=2" alt="" />
        </el-col>
        <el-col
          :xl="{span: 12, offset: 6}"
          :lg="{span: 12, offset: 6}"
          :md="{span: 16, offset: 4}"
          :sm="{span: 20, offset: 2}"
          :xs="24"
        >
          <h4>快樂計數器的開始</h4>
          <p>
            宇宙是廣袤空間和其中存在的各種天體以及瀰漫物質的總稱。宇宙起源是一個極其複雜的問題。宇宙是物質世界，它處於不斷的運動和發展中。千百年來，科學家們一直在探尋宇宙是什麼時候、如何形成的。直到今天，許多科學家認為，宇宙是由大約137億年前發生的一次大爆炸形成的。
          </p>
        </el-col>
      </el-row>
    </el-main>
    <el-footer> <h4>Copyright 2021 all rights reserved</h4></el-footer>
  </el-container>
</template>

<style scoped>
.el-header,
.el-footer {
  background-color: #E4F0E7;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-container {
  margin-bottom: 40px;
  height: 90vh;
}
.el-main {
    background-color: #FDFAF6;

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
