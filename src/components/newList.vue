<template>
    <div class="scroller">
        <div class="header">
            <h3>{{title}}</h3>
            <router-link :to="'moreMovie/' + movieType" append>
                <button class="header-more">查看更多</button>
            </router-link>
        </div>
        <div class="content">
            <ul class="hasCover" v-if="type == 'hasCover'">
                <li v-for="item in items" :key="item.id">
                    <router-link :to="'newsDetail/' + item.id" append>
                        <div class="hasCover-link">
                            <div class="hasCover-link-content">
                                <img v-if="item.images" :src="item.images.large" alt="">
                            </div>

                            <div class="info_wrap">
                                <span class="title">{{item.title}}({{item.original_title}})</span>
                                <rating v-if="item.rating" :rating="item.rating"></rating>
                                <span class="info-wrap-type">{{item.genres | getMovieType}}</span>
                                <span class="info-wrap-year">上映时间:{{item.year}}</span>
                                <span class="info-warp-author" @click="openAutonrInfo(item.directors[0].alt)">作者简介</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
import rating from "./rating";
export default {
    name: "newList",
    components: {
        rating: rating
    },
    props: ["title", "type", "items", "movieType"],
    methods: {
        pushNewsDetail(n) {
            this.$router.push({
                name: "newsDetail",
                query: { id: n }
            });
        },
        openAutonrInfo(url) {
            window.location.href = url;
        },
        moreMovieAction() {
            this.$router.push({
                name: "moreMovie",
                query: { id: this.movieType }
            });
        }
    },
    filters: {
        getMovieType: function(value) {
            return value.join(",");
        }
    }
};
</script>

<style lang="scss" scoped>
.scroller {
    padding-top: 0.5rem;
    .header {
        text-align: left;
        width: 100%;
        margin-left: 0.5rem;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .header-more {
            color: rgb(132, 199, 135);
            margin-right: 0.5rem;
        }
    }
}
.content {
    box-sizing: content-box;
}
.hasCover {
    /* 不换行 */
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;

    img {
        height: 200px;
        width: 150px;
        margin-left: 10px;
    }
    .hasCover-link {
        width: 100%;
        display: flex;
        flex-direction: row;
        // justify-content: space-around;
    }
    .title {
        display: block;
        max-width: 100%;
        margin: 0.2rem 0.1rem 0.5rem 0rem;
        text-align: left;
        font-size: 20px;
        color: #111;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        word-wrap: normal;
    }
    .info_wrap {
        text-align: right;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        padding-left: 15px;
        margin-right: 0px;
        .info-wrap-type {
            font-size: 15px;
            text-align: left;
            margin-top: 15px;
            color: rgb(41, 37, 37);
        }
        .info-wrap-year {
            font-size: 15px;
            text-align: left;
            margin-top: 15px;
            color: rgb(41, 37, 37);
        }
        .info-warp-author {
            font-size: 14px;
            text-align: right;
            margin-top: 20px;
            margin-right: 10px;
            color: rgb(41, 37, 37);
        }
    }
    .hasCover-link-content {
        margin-left: 0;
        margin-bottom: 20px;
    }
}
.news-list {
    width: 100%;
}
</style>
