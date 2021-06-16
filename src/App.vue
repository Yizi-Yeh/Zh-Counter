<template>
  <div  id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/counters">CreateCounters</router-link>
  </div>
  <router-view />
</template>

<script>
import { computed } from '@vue/runtime-core'
import { store } from 'vuex'
export default {
  setup () {
    computed(() => {
      return store.getters.isLoad
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
