// 파일 위치: /root/src/main.js

import Vue from 'vue'
import App from './App.vue'

// store의 index.js를 가져옵니다.
import store from '@/store/index.js'

Vue.config.productionTip = false

// 뷰 인스턴스 생성
new Vue({
  render: h => h(App),
  // store를 넣고 뷰 인스턴스를 생성합니다.
  store,
}).$mount('#app')
