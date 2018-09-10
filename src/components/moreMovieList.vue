<template>
    <div class="more">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" pulling-text="下拉即可刷新..." loosing-text="释放即可刷新..." loading-text="加载中...">
            <van-list v-model="loadMore" :finished="finished" @load="onLoadMore" loading-text="加载中..." :offset="offset">
                <van-cell v-for="(item, index) in items" :key="index">
                    <div class="info_wrap">
                        <span class="title">{{item.title}}({{item.original_title}})</span>
                        <span class="info-wrap-type">{{item.genres}}</span>
                        <span class="info-wrap-year">上映时间:{{item.year}}</span>
                        <span class="info-warp-author">作者简介</span>
                    </div>
                </van-cell>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    props: ["items"],
    data() {
        return {
            refreshing: false,
            loadMore: false,
            finished: false,
            offset: 300
        };
    },
    created() {
        console.log("items测试" + this.items);
    },
    methods: {
        onRefresh() {
            console.log("下拉刷新");
            setTimeout(() => {
                this.refreshing = false;
            }, 500);
        },
        onLoadMore() {
            console.log("加载更多");
            setTimeout(() => {
                // 网络请求数据加载
                this.loadMore = false;
                if (this.items.length >= 200) {
                    this.finished = true;
                }
            }, 500);
        }
    }
};
</script>

<style scoped>
.more {
    width: 100%;
    height: 80%;
}
.info_wrap {
    display: flex;
    flex-direction: column;
    line-height: 30px;
}
.title {
    color: rgb(21, 131, 36);
    font-size: 15px;
}
.info-wrap-type {
    color: blueviolet;
    font-size: 15px;
}
.info-warp-author {
    color: rgba(137, 150, 167, 0.774);
}
</style>
