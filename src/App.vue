<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">EasyAndroidTranslate</el-menu-item>
      <el-menu-item index="2" style="float: right" v-on:click="github_link"><i class="el-icon-milk-tea"/>Github
      </el-menu-item>
    </el-menu>
    <el-form ref="source_translate">
      <el-row id="input_form" :gutter="20">
        <el-col :span="12">
          <el-input
              type="textarea"
              :rows="2"
              placeholder="Please paste the source strings.xml"
              v-model="source_form">
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input
              type="textarea"
              :rows="2"
              placeholder="Please paste the translate strings.xml"
              v-model="translate_form">
          </el-input>
        </el-col>
      </el-row>
      <div id="input_button">
        <el-button type="primary" @click="start_button">Start Translating</el-button>
        <el-button type="primary" @click="update_button">Update Translation</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      strings: [],
      activeIndex: '1',
      source_form: '',
      translate_form: '',
    }
  },
  methods: {
    start_button() {
      //console.log(this.source_form)
      const regex = /<string name="(.*?)">(.*?)<\/string>/gm;
      let m;
      while ((m = regex.exec(this.source_form)) !== null) {
        var n = 0;
        var arr = {};
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
          groupIndex;
          if(n===0){
            arr['origin']=match;
          }else if(n===1){
            arr['key']=match;
          }else if(n===2){
            arr['value']=match;
            this.strings.push(arr);
          }
          n++;
        });
      }
      console.log(this.strings)
    },
    update_button() {

    },
    github_link() {
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
  margin: 0 auto;
  width: 60%;
}

#input_form, #input_button {
  margin-top: 30px;
}
</style>
