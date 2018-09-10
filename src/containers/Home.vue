<template>
    <div class="middle">
        <home-list :items="events"></home-list>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <loading slot="spinner"></loading>
        </infinite-loading>
    </div>
</template>

<script>
// 导入状态数据管理
import { mapState, mapActions } from "vuex";
import homeList from "../components/homeList";
import InfiniteLoading from "vue-infinite-loading";
import loading from "../components/Loading";

export default {
    components: {
        homeList,
        InfiniteLoading,
        loading
    },
    data() {
        return {
            index: 0
        };
    },
    created() {
        console.log("created");
    },
    // 计算属性 数据回调与vue进行绑定
    computed: {
        ...mapState({
            events: state => state.home.events
        })
    },
    methods: {
        onInfinite() {
            console.log("onInfinite", this.index++);
            setTimeout(() => {
                this.$store.dispatch({
                    type: "loadMore",
                    param: ""
                });
                // 通知loading控件可再加载
                this.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded");
            }, 1000);
        },
        ...mapActions["loadMore"]
    }
};
</script>
<style scoped>
.middle {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: white;
}
</style>

