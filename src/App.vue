<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'

}
</script>

<style>
@import "../node_modules/font-awesome/css/font-awesome.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  <!--text-align: center;-->
  color: #2c3e50;
}
body{
  margin: 0px;
  background: #1F2D3D;
  line-height: 1.6;
  font-size: 14px;
}
.el-tabs__header {
        margin: 0!important ;
      }
</style>
