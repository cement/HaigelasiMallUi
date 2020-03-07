<template>
    <div class="setting">
        <van-nav-bar
                :title="title"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-cell-group style="margin-bottom: 15px;margin-top: 15px;">
            <van-cell icon="flower-o" title="头像" is-link to="avatar">
                <van-image
                        round
                        width="30"
                        height="30"
                        :src="avatarUrl"
                />
            </van-cell>
            <van-cell icon="user-o" title="姓名" :value="user.nickName"is-link to="updateUserName"/>
            <van-cell icon="share" title="性别" is-link :value="user.genderStr" @click="showGender=true"/>
<!--            <van-cell icon="closed-eye" title="修改密码" is-link to="updatePwd"/>-->
<!--            <van-cell icon="phone-o" title="更换手机" is-link to="updateMobile"/>-->
        </van-cell-group>
        <van-cell-group style="margin-bottom: 15px;">
            <van-cell icon="location-o" title="收货地址" is-link to="address"/>
        </van-cell-group>
        <van-cell-group style="margin-bottom: 15px;">
            <van-cell icon="warning-o" title="关于本公司" is-link url="http://haigelasi.com"/>
        </van-cell-group>
        <van-popup v-model="showGender"  :style="{ padding:'20px',width:'50px', height: '50px' }">
            <van-radio-group v-model="user.gender" @change="onChangeGender">
                <van-radio name="male">男</van-radio>
                <van-radio name="female">女</van-radio>
            </van-radio-group>
        </van-popup>
        <div class="logout">
            <van-button color="#1482f0" type="danger" plain round block @click="onLogout">退出登录</van-button>
<!--            <van-button type="danger" plain round block @click="onGomall">返回首页</van-button>-->
        </div>
        <van-tabbar v-model="activeFooter">
            <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" replace to="/search">发现</van-tabbar-item>
            <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script src="./setting.js"></script>

<style lang="less">
    .setting {
        &-group {
            margin-bottom: 15px;
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
        .logout{
            position: fixed;
            bottom:4rem;
            width:100%;
            color: #1482f0;
        }
    }
</style>
