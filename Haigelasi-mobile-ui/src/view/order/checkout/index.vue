<template>
    <div>
        <van-nav-bar
                :title="title"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-cell-group>
        <van-cell :title="addrText" is-link to="address"/>
        </van-cell-group>
            <div   v-for="item in cartList"
                   :key="item.id"    class="card-goods__item">
                <van-card
                        style="margin-left:15px;"
                        :title="item.title"
                        :desc="item.goods.descript"
                        :num="item.count"
                        :price="formatPrice(item.price)"
                        :thumb="item.thumb"
                        @click="itemClick(item)"
                >
                </van-card>
            </div>

        <van-submit-bar
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="submitBarText"
                @submit="submit"
        >
<!--            <van-icon name="arrow-left" @click="gotoCart" >再想想</van-icon>-->
<!--            <van-checkbox v-model="checkedAll" @click="toggleAll" style="padding: 0 10px;">全选</van-checkbox>-->
        </van-submit-bar>

        <van-tabbar v-model="activeFooter">
            <van-tabbar-item icon="home-o"  replace to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search"  replace to="/search">发现</van-tabbar-item>
            <van-tabbar-item icon="cart-o"  replace to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o"  replace to="/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script src="./checkout.js"></script>

<style lang="less">
    .van-submit-bar{
        bottom:48px;
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
