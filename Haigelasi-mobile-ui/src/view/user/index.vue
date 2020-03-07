<template>
    <div>
        <div align="center">
            <van-image
                    round
                    width="120"
                    height="120"
                    margin="20"
                    :src="avatarUrl"
            style="margin-top: 2rem"/>
        </div>
        <div align="center" style="margin: 1rem;color: #3a8ee6">
            <span>{{user.nickName}}</span>
        </div>
        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="pending-payment" @click="toOrder(1)"/>
                待付款
            </van-col>
            <van-col span="6">
                <van-icon name="tosend" @click="toOrder(2)"/>
                待发货
            </van-col>
            <van-col span="6">
                <van-icon name="logistics" @click="toOrder(3)"/>
                已发货
            </van-col>
            <van-col span="6">
                <van-icon name="bag-o" @click="toOrder(4)"/>
                已完成
            </van-col>
        </van-row>

        <van-cell-group class="user-group" style="margin-top: 10px">
            <van-cell icon="records" title="全部订单" is-link to="order"/>
        </van-cell-group>

        <van-cell-group class="user-group">
            <!--      <van-cell icon="points" title="我的积分" is-link @click="sorry"/>-->
            <!--      <van-cell icon="gold-coin-o" title="我的优惠券" is-link @click="sorry" />-->
            <!--      <van-cell icon="gift-o" title="我收到的礼物" is-link  @click="sorry"/>-->
            <van-cell icon="location-o" title="收货地址" is-link to="address"/>
        </van-cell-group>
        <van-cell-group class="user-group">
            <van-cell icon="setting-o" title="设置" is-link to="setting"/>
        </van-cell-group>
        <van-cell-group class="user-group">
            <van-cell icon="warning-o" title="关于本公司" is-link url="http://www.haigelasi.com"/>
        </van-cell-group>
        <!--微信不允许外链，并且跳转出去也无法跳转回来-->
<!--        <van-cell-group class="user-group">-->
<!--            <van-cell icon="warning-o" title="天猫旗舰店" is-link url="https://haigelasi.tmall.com"/>-->
<!--        </van-cell-group>-->

        <van-tabbar v-model="activeFooter">
            <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" replace to="/search">发现</van-tabbar-item>
            <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script src="./user.js"></script>

<style lang="less">
    .user {
        &-poster {
            width: 100%;
            display: block;
        }

        &-group {
            margin-bottom: 15px;
            margin-left: 15px;
            margin-right: 15px;
        }

        &-links {
            padding: 15px 0;
            font-size: 12px;
            text-align: center;
            background-color: #fff;

            .van-icon {
                display: block;
                font-size: 24px;
            }
        }
    }
</style>
