import request from "../../services/network";
const state = {
  skip: 0,
  events: []
};
// mutations与actions方法互相对应
// 协调回调action
const mutations = {
  loadMore(state, payload) {
    state.skip += 10;
    state.events = state.events.concat(payload.res);
  }
};
// 外部直接调用的方法
const actions = {
  loadMore({ commit, state }) {
    console.log("数量" + state.skip);
    request({
      url: "/event/list?loc=108288&start=" + state.skip + "&count=10",
      methods: "get",
      params: ""
    })
      .then(function(response) {
        console.log(response);
        commit({
          type: "loadMore",
          res: response.data.events
        });
        console.log("数量2: " + state.skip);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
export default {
  state,
  mutations,
  actions
};
