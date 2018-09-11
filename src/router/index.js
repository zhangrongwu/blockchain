import Vue from "vue";
import Router from "vue-router";
import home from "@/containers/Home";
import main from "@/containers/Main";

import tuijian from "@/containers/Tuijian";
import toutiao from "@/containers/Toutiao";
import zhengce from "@/containers/Zhengce";
import Hangqing from "@/containers/Hangqing";

import mine from "@/containers/Mine";
import news from "@/containers/News";
import noFound from "@/containers/NoFound";
import moreMovie from "@/containers/MoreMovie";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      name: "main",
      component: main,
      children: [
        {
          path: "/main/tuijian",
          name: "tuijian",
          component: tuijian
        },
        {
          path: "/main/toutiao",
          name: "toutiao",
          component: toutiao
        },
        {
          path: "/main/zhengce",
          name: "zhengce",
          component: zhengce
        },
        {
          path: "/main/Hangqing",
          name: "Hangqing",
          component: Hangqing
        }
      ]
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/mine",
      name: "mine",
      component: mine
    },
    {
      path: "*",
      name: "*",
      component: noFound
    }
  ]
});
