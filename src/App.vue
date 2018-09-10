<template>
    <div id="app">
        <van-nav-bar class="van-nav-bar" :fixed="navFixed" right-text="菜单" @click-left="onClickLeft" @click-right="onClickRight" :title="getTitle(active)"></van-nav-bar>
        <router-view/>
        <van-tabbar v-model="active">
            <van-tabbar-item v-for="item in tabBar" :key="item.id" info="">
                <span>{{item.title}}</span>
                <img slot="icon" slot-scope="props" dot=true info="item.badge" :src="props.active ? item.active : item.normal">
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "App",
    filters: {},
    created() {
        if (active == 0) {
            this.$router.push({ name: "home" });
        } else if (active == 1) {
            this.$router.push({ name: "news" });
        } else if (active == 2) {
            this.$router.push({ name: "mine" });
        }
    },
    methods: {
        onClickLeft() {},
        onClickRight() {},
        getTitle: function(value) {
            return this.tabBar[value].title;
        }
    },
    watch: {
        active: function(newValue, oldValue) {
            if (newValue == 0) {
                this.$router.push({ name: "home" });
            } else if (newValue == 1) {
                this.$router.push({ name: "news" });
            } else if (newValue == 2) {
                this.$router.push({ name: "mine" });
            }
            this.defines.tabBarItemIndex = newValue;
        }
    },
    data() {
        return {
            navFixed: true,
            active: this.defines.tabBarItemIndex,
            tabBar: [
                {
                    normal: require("./assets/icon-home-normal.png"),
                    active: require("./assets/icon-home-active.png"),
                    title: "首页",
                    badge: "",
                    id: 0
                },
                {
                    normal: require("./assets/icon-news-normal.png"),
                    active: require("./assets/icon-news-active.png"),
                    title: "电影",
                    badge: "1",
                    id: 1
                },
                {
                    normal: require("./assets/icon-mine-normal.png"),
                    active: require("./assets/icon-mine-active.png"),
                    title: "我的",
                    badge: "2",
                    id: 2
                }
            ]
        };
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.van-nav-bar {
    background-color: rgb(17, 139, 214) !important;
    color: white;
    height: 44px;
    line-height: 44px;
}
.van-tabbar {
    height: 50px;
}
.van-nav-bar__title ~ .van-nav-bar__title::before {
    height: 44px;
}
</style>
