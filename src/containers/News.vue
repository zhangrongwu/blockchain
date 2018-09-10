<template>
    <div class="middle">
        <news-list type='hasCover' :items="hotMovies" title='影院热映' movieType='1'></news-list>
        <news-list type='hasCover' :items="topMovies" title='免费在线电影' movieType='2'></news-list>
        <news-list type='hasCover' :items="newMovies" title='新片速递' movieType='3'></news-list>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import newsList from "../components/newList";
export default {
    name: "News",
    computed: {
        ...mapState({
            hotMovies: state => state.news.hotMovies,
            topMovies: state => state.news.topMovies,
            newMovies: state => state.news.newMovies,
            movieTags: state => state.news.movieTags
        })
    },
    components: {
        newsList: newsList
    },

    methods: {
        getMovie() {
            this.$store.dispatch("getMovie");
        },
        ...mapActions["getMovie"]
    },
    created() {
        this.getMovie();
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
    background-color: aliceblue;
    margin-top: 45px;
    margin-bottom: 50px;
}
</style>

