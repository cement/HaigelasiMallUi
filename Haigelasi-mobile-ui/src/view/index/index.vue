<template>
    <div class="index">
        <van-tabs v-model="activeNav" @click="clickNav">
            <van-tab v-for="nav in navList" :title="nav.name" v-bind:key="nav.id" :name="nav.id">
            </van-tab>
        </van-tabs>
        <div class="subject" v-if="!activeNav">
            <van-row>
                    <van-col  v-for="(topic,index) in topicList" :key="index" :span="(index+3)%3===0?12:6"  >
                        <van-image height="100"
                                   @click="toTopic(topic.id)"
                                   :src="topic.img"></van-image>
                        <div class="text"> {{topic.title}}</div>
                    </van-col>

            </van-row>


        <van-panel title="热门推荐">
            <van-card v-for="(goods,index) in hotList" :key="index"
                      :price="formatPrice(goods.price)"
                      :desc="goods.descript"
                      :title="goods.name"
                      :thumb="goods.img"
                      :thumb-link="goods.link"
                      @click="viewGoodsDetail(goods.id)"
            />
        </van-panel>
        <br>
        <van-panel title="新品推荐">
            <van-card v-for="(goods,index) in newList" :key="index"
                      :price="formatPrice(goods.price)"
                      :desc="goods.descript"
                      :title="goods.name"
                      :thumb="goods.img"
                      :thumb-link="goods.link"
                      @click="viewGoodsDetail(goods.id)"
            />
        </van-panel>
        </div>
        <div class="goodlist" v-if="activeNav">
            <van-swipe :autoplay="3000" style="height: 200px;">
                <van-swipe-item v-for="(image, index) in banners" :key="index" @click="clickSwipe">
                    <a :href="image.url"><img v-lazy="image.path" style="width:100%;"/></a>
                </van-swipe-item>
            </van-swipe>
            <van-cell-group class="goods-cell-group" >
                <van-cell title="商品列表" is-link @click="showGoodsList"/>
            </van-cell-group>
            <van-list
                    v-model="loading"
                    :finished="finished"
                    @load="loadMore"
            >
            <van-card v-for="(goods,index) in goodsList" :key="index"
                      :num="goods.stock"
                      :price="formatPrice(goods.price)"
                      :desc="goods.descript"
                      :title="goods.name"
                      :thumb="goods.img"
                      :thumb-link="goods.link"
                      @click="viewGoodsDetail(goods.id)"
            />
            </van-list>

        </div>

        <br><br><br><br>

        <van-tabbar v-model="activeFooter">
            <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" replace to="/search">发现</van-tabbar-item>
            <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script src="./welcome.js"></script>

<style lang="less">
    .index {
        .subject {
            padding: 0px 0px 5px 0px;
            .text {
                display: none;
                width:100%;
                padding: 5px;
                position: absolute;
                z-index: 10;
                margin-top: -32px;
                background-color: #979595;
                color: #ffffff;
                font-size: 12px;
                opacity: .8;
            }
        }


        .van-card {
            background-color: #ffffff;
        }

        .goods {
            padding-bottom: 50px;
            &-cell-group {
                margin: 15px 0;

                .van-cell__value {
                    color: #999;
                }
            }
        }
    }
</style>
