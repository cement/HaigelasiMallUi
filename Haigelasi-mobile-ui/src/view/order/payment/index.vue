<template>
    <div>
<!--                left-arrow-->
        <van-nav-bar
                :title="title"
                @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-cell title="订单编号" :value="order.orderSn"/>
            <van-cell title="应付金额">
                <span class="red strong">￥{{formatPrice(order.totalPrice)}}</span>
            </van-cell>
        </van-cell-group>

        <van-radio-group v-model="payType">
            <van-cell-group>
                <van-cell clickable @click="radio = 'wxpay'">
                    <img

                            style="width:120px;margin-right: 200px;"
                            slot="icon"
                            slot-scope="props"
                            src="@/assets/img/wxpay.png"
                    >
                    <van-radio slot="right-icon" name="wxpay"/>
                </van-cell>
                <van-cell clickable @click="radio = 'alipay'" v-if ='false'>
                    <img

                            style="width:120px;margin-right: 200px;"
                            slot="icon"
                            slot-scope="props"
                            src="@/assets/img/alipay.png"
                    >
                    <van-radio slot="right-icon" name="alipay"/>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
        <van-button class="footer" type="primary" size="large" round block @click="pay">立即支付</van-button>
        <van-tabbar v-model="activeFooter">
            <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" replace to="/search">发现</van-tabbar-item>
            <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script src="./payment.js"></script>

<style lang="less">
    .red {
        color: red;
    }

    .strong {
        font-weight: bold;
    }

    .van-cell-group {
        margin-top: 10px;
    }

    .footer {
        margin-top: 3rem;
        /*position: fixed;*/
        /*bottom: 4rem;*/
    }
</style>
