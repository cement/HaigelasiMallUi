<template>
    <div>
        <van-nav-bar
                :title="title"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="cart" v-if="isLogin && cartList.length>0">
            <!--    <van-checkbox-group class="card-goods" v-model="checkedGoods" v-if="isLogin && cartList.length>0" ref="checkboxGroup" @change="bindChange">-->
            <div v-for="item in cartList" :key="item.id+''" class="card-goods__item">
                <van-checkbox :name="item.id+'' " v-model="item.status" v-on:click="checkboxClick(item)"></van-checkbox>
                <van-card style="margin-left:15px;"
                          :title="item.title"
                          :desc="item.goods.descript"
                          :num="item.count"
                          :price="formatPrice(item.price)"
                          :thumb="item.thumb"
                          @click="itemClick(item)"
                >

                    <!---->
                    <div slot="footer" @click.stop="">
                        <van-stepper v-model="item.count" @change="stepperEvent(item,arguments)" disableInput/>
                    </div>
                </van-card>
            </div>
            <br><br><br><br><br>

            <!--    </van-checkbox-group>-->
            <van-submit-bar
                    :price="totalPrices"
                    :disabled="!checkedLength"
                    :button-text="submitBarText"
                    @submit="submit"
                    v-if="isLogin && cartList.length>0">
                <van-checkbox v-model="checkedAll" @click="toggleAll" style="padding: 0 10px;">全选</van-checkbox>
            </van-submit-bar>
        </div>
        <div class="no-data" v-if="isLogin && cartList.length === 0 ">
            <p style="text-align: center;color:lightgray">
                <van-icon name="cart-o" style="text-align: center" size="3rem"/>
                <br>
                购物车还是空的
            </p>
            <van-button type="default" block round @click="toHome">去逛逛</van-button>
        </div>
        <div class="no-data" v-if="!isLogin">
            <p style="text-align: center;color:lightgray">
                <van-icon name="cart-o" style="text-align: center" size="3rem"/>
                <br>
                您还没有登录
            </p>
            <van-button type="primary" block round @click="toLogin">立即登录</van-button>
        </div>

        <van-tabbar v-model="activeFooter">
            <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" replace to="/search">发现</van-tabbar-item>
            <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script src="./cart.js"></script>

<style lang="less">

    .no-data {
        margin-top: 60%;
    }

    .van-submit-bar {
        bottom: 48px;
    }

    .card-goods {
        background-color: #fff;

        &__item {
            position: relative;
            background-color: #fafafa;

            .van-checkbox__label {
                width: 100%;
                height: auto; // temp
                padding: 0 10px 0 15px;
                box-sizing: border-box;
            }

            .van-checkbox__icon {
                top: 50%;
                left: 10px;
                z-index: 1;
                position: absolute;
                margin-top: -10px;
            }

            .van-card__price {
                color: #f44;
            }
        }
    }
</style>
