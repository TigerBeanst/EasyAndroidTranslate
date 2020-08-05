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
              @click.native="open_source"
              type="textarea"
              :rows="2"
              placeholder="Source strings.xml"
              v-model="source_form">
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input
              @click.native="open_tran"
              type="textarea"
              :rows="2"
              placeholder="Translated strings.xml (optional)"
              v-model="translated_form">
          </el-input>
        </el-col>
      </el-row>
      <div id="input_button">
        <el-button type="primary" @click="start_button">Start Translating</el-button>
        <el-button type="primary" @click="update_button">Update Translation</el-button>
      </div>
    </el-form>
    <div id="table">
      <el-table
          ref="singleTable"
          :data="strings"
          highlight-current-row
          @row-click="handleCurrentChange"
          style="width: 100%">
        <el-table-column
            type="index"
            width="50">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="strings">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="Origin">
                <span>{{ strings.row.origin }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
            property="key"
            label="Key"
            width="200">
        </el-table-column>
        <el-table-column
            property="value_source"
            label="Origin Value"
            width="400">
        </el-table-column>
        <el-table-column
            label="Translated Value">
          <template scope="strings">
            <el-input type="textarea" autosize v-model="strings.row.value_translated" placeholder="Key"
                      @change="handleEdit(strings.$index, strings.row)"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      strings: [],
      activeIndex: '1',
      source_form: '',
      translated_form: '',
      pre_source_form: '',
      loading: false
    }
  },
  methods: {
    getKey(isUpdated) {
      //const regex = /<string name="(.*?)">.*?<\/string>/gm;
      const regex = new RegExp('<string name="(.*?)">.*?<\\/string>', "gm");
      let m;
      while ((m = regex.exec(this.source_form)) !== null) {
        let n = 0;
        const arr = {};
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
          groupIndex;
          if (n === 0) {
            arr['origin'] = match;
          } else if (n === 1) {
            arr['key'] = match;
            arr['value_source'] = this.getValue(match,this.source_form)
            if(isUpdated){
              arr['value_translated'] = this.getValue(match,this.translated_form)
            }
            this.strings.push(arr);
          }
          n++;
        });
      }
    },
    getValue(key,content_xml) {
      //const regex = /<string name="key">(.*?)<\/string>/gm;
      let regexS = "<string name=\""+key+"\">(.*?)<\\/string>"
      const regex = new RegExp(regexS, "gm");
      let matchS = ""
      let m;
      //console.log(regex.exec(content_xml));
      while ((m = regex.exec(content_xml)) !== null) {
        var n = 0;
        // var arr = {};
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
          groupIndex;
           if (n === 1) {
             // console.log("match:"+match+" // index:"+groupIndex)
             matchS = match
          }
          n++;
        });
      }
      return matchS
    },
    start_button() {
      if (this.source_form == "") {
        this.$message.error('Do not leave the "Source strings.XML" form empty');
      } else {
        this.strings = [];
        this.getKey(false)
        //this.getValue(this.source_form)
        console.log(this.strings)
      }
    },
    update_button() {
      if (this.source_form === "" || this.translated_form === "") {
        this.$message.error('Do not leave the "Source strings.XML" and "Translated strings.xml" forms empty');
      } else {
        this.strings = [];
        this.getKey(true)
        //this.getValue(this.source_form)
        console.log(this.strings)
      }
    },
    open_source() {
      const h = this.$createElement;
      this.$notify({
        title: 'Source strings.xml',
        message: h('b', {style: 'color: teal'}, 'Paste strings.xml for the source here. This XML text should be standard formatted. Untranslatable text will not be displayed.')
      });
    },
    open_tran() {
      const h = this.$createElement;
      this.$notify({
        title: 'Translated strings.xml (optional)',
        message: h('b', {style: 'color: teal'}, 'You can paste strings.xml that you\'ve translated before, and use it to check if the source strings.xml updated.')
      });
    },
    handleCurrentChange(row, event, column) {
      console.log(row, event, column, event.currentTarget)
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    github_link() {
      window.open("https://github.com/hjthjthjt/EasyAndroidTranslate", "_blank")
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 80%;
}

#input_form, #input_button {
  margin-top: 30px;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
