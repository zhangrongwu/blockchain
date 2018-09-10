import Vue from "vue";
import Router from "vue-router";
import home from "@/containers/Home";
import main from "@/containers/Main";
import mine from "@/containers/Mine";
import news from "@/containers/News";
import about from "@/containers/About";
import noFound from "@/containers/NoFound";
import newsDetail from "@/containers/NewsDetail";
import moreMovie from "@/containers/MoreMovie";

import time from "@/containers/Time";
import bookstore from "@/containers/BookStore";
import doupin from "@/containers/DouPin";
import movie from "@/containers/Movie";

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
          path: "/home",
          name: "home",
          component: home
        },
        {
          path: "/bookstore",
          name: "bookstore",
          component: bookstore
        },
        {
          path: "/doupin",
          name: "doupin",
          component: doupin
        },
        {
          path: "/movie",
          name: "movie",
          component: movie
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
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/news/newsDetail/:id",
      name: "newsDetail",
      component: newsDetail
    },
    {
      path: "/news/moreMovie/:id",
      name: "moreMovie",
      component: moreMovie
    },
    {
      path: "*",
      name: "*",
      component: noFound
    }
  ]
});
