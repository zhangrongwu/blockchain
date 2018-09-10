import request from "../../services/network";
import { Switch } from "vant";
import { mapActions } from "vuex";

// 数据
const state = {
  hotMovies: [],
  newMovies: [],
  topMovies: [],
  moreMoviews: [],
  movieTags: [
    {
      title: "同时入选IMDB250和豆瓣电影250的电影",
      href: "https://m.douban.com/doulist/968362/",
      color: "#FFAC2D"
    },
    {
      title: "带你进入不正常的世界",
      href: "https://m.douban.com/doulist/16002",
      color: "#FF4055"
    },
    {
      title: "用电【影】来祭奠逝去的岁月",
      href: "https://m.douban.com/doulist/190343",
      color: "#4F9DED"
    },
    {
      title: "女孩们的故事【电影】",
      href: "https://m.douban.com/doulist/1125971",
      color: "#FFC46C"
    },
    {
      line: true
    },
    {
      title: "科幻是未来的钥匙——科幻启示录【科幻题材】",
      href: "https://m.douban.com/doulist/4253902",
      color: "#2384E8"
    },
    {
      title: "美国生活面面观",
      href: "https://m.douban.com/doulist/121326",
      color: "#3BA94D"
    },
    {
      title: "2015终极期待",
      href: "https://m.douban.com/doulist/37479562",
      color: "#42BD56"
    },
    {
      title: "经典韩国电影——收集100部",
      href: "https://m.douban.com/doulist/458087",
      color: "#CC3344"
    }
  ]
};
// 协调回调action
const mutations = {
  getMovie(state, payload) {
    switch (payload.tag) {
      case "hotMovies":
        state.hotMovies = payload.res;
        break;
      case "newMovies":
        state.newMovies = payload.res;
        break;
      case "topMovies":
        state.topMovies = payload.res;
    }
  },
  getMoreMovie(state, payload) {
    state.moreMoviews = payload.res;
  }
};
// 外部直接调用的方法
const actions = {
  getMovie({ commit, state }) {
    request({
      url: "/movie/in_theaters?count=8",
      methods: "get"
    })
      .then(function(response) {
        console.log(response);
        commit({
          type: "getMovie", //回调的方法名称
          tag: "hotMovies",
          res: response.data.subjects
        });
      })
      .catch(function(err) {
        console.log(err);
      });

    request({
      url: "/movie/coming_soon?count=8",
      methods: "get"
    })
      .then(function(response) {
        console.log(response);
        commit({
          type: "getMovie",
          tag: "newMovies",
          res: response.data.subjects
        });
      })
      .then(function(err) {
        console.log(err);
      });

    request({
      url: "/movie/top250?count=8",
      methods: "get"
    })
      .then(function(response) {
        console.log(response);
        commit({
          type: "getMovie",
          tag: "topMovies",
          res: response.data.subjects
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getMoreMovie({ commit, state }, { moviesType }) {
    var moreUrl = "/movie/in_theaters?count=20";
    switch (moviesType) {
      case "1": {
        moreUrl = "/movie/in_theaters?count=20";
        break;
      }
      case "2": {
        moreUrl = "/movie/coming_soon?count=20";
        break;
      }
      case "3": {
        moreUrl = "/movie/top250?count=8";
        break;
      }
    }
    request({
      url: moreUrl,
      methods: "get"
    })
      .then(function(response) {
        console.log(response);
        commit({
          res: response.data.subjects,
          type: "getMoreMovie"
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
export default {
  state,
  mutations,
  actions
};
