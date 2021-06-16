<template>
  <el-container>
    <el-header> <h4>ALL Counters</h4></el-header>
    <el-main>
      <div id="counters">
        <a v-for="item in counterArr" :key="item.id" @click="goToCourses(item.id)"   class="card">
          <img src="https://picsum.photos/125/70/?random=idx" />
          <div class="contnet">
            <h4>名稱：{{ item.name }}</h4>
            <div class="content-box">
              <h5>描述：{{item.description}}</h5>
            </div>
          </div>
        </a>
      </div>
    </el-main>
    <el-footer> <h4>Copyright 2021 all rights reserved</h4></el-footer>
  </el-container>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const store = useStore()
    const router = useRouter()

    const init = () => {
      store.dispatch('handInit')
    }

    onMounted(() => {
      init()
    })

    const counterArr = computed(() => store.getters.counterArr)

    const goToCourses = (id) => {
      router.push(`/counters/${id}`)
    }

    return {
      counterArr,
      goToCourses
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

#counters {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

a.card {
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 318px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  background-color: rgb(231, 231, 231);
  &:hover {
    opacity: 1;
  }
  > img {
    margin-right: 10px;
  }
  .content {
    text-align: left;
    width: 50%;
    > h1 {
      font-size: 18px;
    }
    .content-box {
      display: flex;
      align-items: center;
      margin-top: 5px;
      > h2 {
        font-size: 13px;
      }
    }
  }
}
</style>
