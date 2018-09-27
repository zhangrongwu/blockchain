import request from "../../services/network";
const state = {
  information_id: 98329,
  events: []
};
// mutations与actions方法互相对应
// 协调回调action
const mutations = {
  loadMore(state, payload) {
    state.information_id += 10;
    state.events = state.events.concat(payload.res);
  }
};
// 外部直接调用的方法
const actions = {
  loadMore({ commit, state }) {
    request({
      url:
        "v6/information/list?catelogue_key=www&limit=10&information_id=" +
        state.information_id +
        "&flag=down&version=9.9.9",
      methods: "get",
      params: ""
    })
      .then(function(response) {
        console.log(response);
        commit({ type: "loadMore", res: response.data.list });
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
