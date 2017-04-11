import Vue from 'vue';
import Main from './app/Main.vue';
import VueFire from 'vuefire';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueFire);
Vue.use(VueAxios, axios);

import './index.scss';

export default new Vue({
  el: '#root',
  render: h => h(Main)
});
