<template>
    <div>
        <more-movie-list :items="movies"></more-movie-list>
    </div>
</template>

<script>
import moreMovieList from "../components/moreMovieList";
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            moviesType: "1"
        };
    },
    computed: {
        ...mapState({
            movies: state => state.news.moreMoviews
        })
    },
    components: {
        moreMovieList
    },
    created() {
        this.getMoreMovie();
    },
    methods: {
        getMoreMovie() {
            this.$store.dispatch({
                type: "getMoreMovie",
                moviesType: this.moviesType
            });
        },
        ...mapActions["getMoreMovie"]
    }
};
</script>

<style scoped>
</style>
