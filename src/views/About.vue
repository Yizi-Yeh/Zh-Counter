<template>
  <el-container>
    <el-header>Zhudong Township</el-header>
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
          <h4>zhug dungˋ zhinˊ</h4>
          <p>
            竹東鎮（臺灣客家語海陸腔：zhug dungˋ
            zhinˊ），舊稱「樹杞林」，位於臺灣新竹縣中心，鎮內人口約9.7萬人，是新竹縣人口僅次於竹北市的第二大行政區，也是臺灣人口第二大鎮[註
            1][1]，結構上以清朝時來自廣東移民客家後裔族群為主，亦有多數的原住民泰雅族、賽夏族居住。
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
          <h4>zhug dungˋ zhinˊ</h4>
          <p>
            竹東鎮在漢人移民未開發前，是泰雅族、賽夏族以及其他平埔族人的聚集地、狩獵地。早期以製造樟腦聞名，其後石油的鑽探、水泥及玻璃工業的設廠及林場集散場的拓展下，成為新竹縣溪南地區的工商重鎮，並曾與東勢、羅東共稱為臺灣三大林業集散地。隨著1973年工業技術研究院設置於頭重里，以及1980年新竹科學園區設置於西鄰的新竹市東區之後，竹東鎮已逐漸轉型為高科技研發中心。
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
