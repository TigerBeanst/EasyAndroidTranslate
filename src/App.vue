<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">EasyAndroidTranslate</el-menu-item>
      <el-menu-item index="2" style="float: right" v-on:click="github"><i class="el-icon-milk-tea"/>Github</el-menu-item>
    </el-menu>
    <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
    </el-input>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex:'1',
      textarea: ''
    }
  },
  methods:{
    github(){
      window.open("https://github.com/hjthjthjt/EasyAndroidTranslate", "_blank")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px auto;
  width: 60%;
}
</style>
