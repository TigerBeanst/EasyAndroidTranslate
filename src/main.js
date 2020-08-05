import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import Clipboard from 'v-clipboard'

locale.use(lang)
Vue.use(ElementUI)
Vue.use(Clipboard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
