<template>
    <div>
        <img class="user-poster" src="@/assets/img/banner.jpg">
        <van-popup v-model="popupShow">
            <!--            <van-loading size="64px" type="spinner" color="#1989fa">登录中...</van-loading>-->
            <van-loading size="40px" style="background-color: gray;">登录中...</van-loading>
        </van-popup>
        <!--<van-loading type="spinner" color="#1989fa">登录中...</van-loading>-->
        <div class="input-group">
            <van-cell-group v-show="show1">
                <van-field
                        v-model="mobile"
                        required
                        clearable
                        label="账号"
                        placeholder="测试账号:15011112222"
                />
            </van-cell-group>
            <van-cell-group v-show="show1">
                <van-field
                        v-model="smsCode"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码"
                >
                    <van-button slot="button" size="small" type="primary" @click="sendSms" v-show="!hasSendSms">发送验证码
                    </van-button>
                    <van-button slot="button" size="small" disabled type="primary" v-show="hasSendSms">
                        {{second}}秒后重新获取
                    </van-button>
                </van-field>
            </van-cell-group>
            <van-cell-group v-show="show1">
                <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="测试密码：admin"
                        required
                />

            </van-cell-group>
        </div>
        <div class="button-group">
            <van-button type="warning" size="large" v-show="false" round @click="loginOrRegister">立即登录/注册</van-button>

            <van-button type="info" size="large" v-show="false" round @click="toLoginByPassword">用户名密码登录</van-button>

            <van-button type="warning" size="large" v-show="false" round @click="loginByPass">登录</van-button>


            <van-button type="info" size="large" v-show="false" round @click="toRegister">手机短信登录/注册</van-button>
            <van-button type="primary" size="large" v-show="show2" round @click="wxLogin">微信登录</van-button>


        </div>
        <van-tabbar v-model="activeFooter">
            <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" replace to="/search">发现</van-tabbar-item>
            <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script src="./login.js"></script>

<style lang="less">
    .input-group {
        margin: 20px;

        .van-cell-group {
            height: 3rem;
        }
    }

    .button-group {
        margin: 15px;

        .van-button {
            margin-top: 2rem;
        }
    }

    .user {
        &-poster {
            width: 100%;
            display: block;
        }

        &-group {
            margin: 15px;
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
