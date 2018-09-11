<template>
    <div class="home-header" fixed=true>
        <van-tabs sticky=true @click="tabOnClick" offset-top=44px>
            <van-tab v-for="item in titles" :title=item.title :key="item.id">
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            titles: [
                {
                    id: "1",
                    title: "推荐",
                    name: "tuijian"
                },
                {
                    id: "2",
                    title: "头条",
                    name: "toutiao"
                },
                {
                    id: "3",
                    title: "政策",
                    name: "zhengce"
                },
                {
                    id: "4",
                    title: "行情",
                    name: "Hangqing"
                }
            ]
        };
    },
    methods: {
        tabOnClick(index, title) {
            this.$router.push({ name: this.titles[index].name });
        }
    }
};
</script>

<style scoped>
.home-header {
    top: 44px;
    left: 0;
    right: 0;
    z-index: 99;
    overflow: hidden;
    position: fixed !important;
}
</style>





