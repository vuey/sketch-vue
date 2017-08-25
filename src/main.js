import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import store from './store'

import AlertComponent from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

// make that component globaly availiable
Vue.component('app-alert', AlertComponent);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBUipVOW2ovDYuIpT5_yaBA4VfklFyPjOI",
      authDomain: "sketch-vue.firebaseapp.com",
      databaseURL: "https://sketch-vue.firebaseio.com",
      projectId: "sketch-vue",
      storageBucket: ""
    });
  }
})
