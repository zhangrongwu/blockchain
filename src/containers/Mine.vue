<template>
  <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" /> 待付款
      </van-col>
      <van-col span="6">
        <van-icon name="pending-orders" /> 待接单
      </van-col>
      <van-col span="6">
        <van-icon name="pending-deliver" /> 待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" /> 待发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="exchange" title="我的积分" is-link />
      <van-cell icon="gold-coin" title="我的优惠券" is-link />

      <van-cell icon="gift" title="我收到的礼物" is-link />
    </van-cell-group>

    <button @click="nativeMethod">打开原生方法</button>
  </div>
</template>
<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    },
    methods: {
        nativeMethod() {
            try {
                window.webkit.messageHandlers.wkWebViewCountent();
            } catch (error) {
                alert("点击失败");
            }
        }
    }
};
</script>

<style scoped>
.user-poster {
    width: 100%;
    height: 200px;
    display: block;
}
.user-group {
    margin-bottom: 0.3rem;
}
.user-links {
    padding: 15px 0;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
}
.user-links.van-icon {
    display: block;
    font-size: 24px;
}
.van-cell {
    line-height: 20px;
    font-size: 14px;
    text-align: left;
}
</style>

