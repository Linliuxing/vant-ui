import Vue from 'vue';
import App from './App.vue';
import router from './router';
//引入vant
import Vant from 'vant';
//引入全局的vant组件
import 'vant/lib/index.css';

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
