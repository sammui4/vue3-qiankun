<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">base-About</router-link> |
    <router-link to="/demo2">demo2</router-link> |
    <router-link to="/demo2/about">demo2-About</router-link> |
    <router-link to="/demo3">demo3</router-link> |
    <router-link to="demo3/about">demo3-About</router-link>
  </div>
  <router-view/>
  <div id="subapp-container"></div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
