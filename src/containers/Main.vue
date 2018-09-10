<template>
    <div class="middle">
        <home-header-view></home-header-view>
        <router-view></router-view>
    </div>
</template>

<script>
// 导入状态数据管理
import { mapState, mapActions } from "vuex";
import homeHeaderView from "../components/homeHeaderView";
import home from "@/containers/Home";

export default {
    components: {
        homeHeaderView,
        home
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
    margin-top: 45px;
}
</style>

