import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import main from "./modules/main";
import news from "./modules/news";
import mine from "./modules/mine";
// Vuex.Store封装供外部使用 按照模块分割modules
export default new Vuex.Store({
  modules: {
    main,
    news,
    mine
  }
});
