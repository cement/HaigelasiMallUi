import categoryApi from '@/api/category'
import goodsApi from '@/api/goods'
import topicApi from '@/api/topic'
import store from '@/store'
const baseApi = process.env.VUE_APP_BASE_API

import {
    Card,
    Cell,
    CellGroup,
    Col,
    Icon,
    Lazyload,
    Row,
    Tab,
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Tabs,
    Toast,
    Divider,
    Panel,
    Image,
    List
} from 'vant';

export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Card.name]: Card,
        [Toast.name]: Toast,
        [Divider.name]: Divider,
        [List.name]: List,
        [Panel.name]: Panel,
        [Image.name]: Image,
        Lazyload


    },
    data() {
        return {
            loading: false,
            finished: false,
            navList: [],
            banners: [],
            hotList: [],
            newList: [],
            goodsList: [],
            activeFooter: 0,
            activeNav: 0,
            total:0,
            listQuery: {
                page: 1,
                limit: 50,
                idCategory: undefined
            },
            count: 0,
            isLoading: false,
            topicList: []
        }
    },
    created(){
        this.onCreate();

    },
    beforeMounted(){
        // this.init()
    },
    mounted() {
         this.init()
    },
    computed: {
    },

    methods: {
        onCreate(){
            let categoryData = store.state.app.category;
            if (!categoryData || categoryData.length==0) {
                let platform = navigator.platform
                store.dispatch('app/toggleDevice', platform)
                categoryApi.getAllCategories().then(response => {
                    let navList = response.data
                    this.navList = navList
                    store.dispatch('app/toggleCategory', navList)
                }).catch((err) => {
                    Toast.fail(err);
                })
            } else {
                this.navList = categoryData

            }
        },

        init() {
            if (!this.activeNav){
                this.queryTopic();
                this.queryRecom();
            }else{
                let idCategory = this.navList[this.activeNav].id;
                this.getBanners(idCategory);
                this.getGoodslist(idCategory);
            }

        },
        queryRecom() {
            goodsApi.searchHot().then(response => {
                let list = response.data
                for (const index in  list) {
                    const item = list[index]
                    item.img = baseApi+'/file/getImgStream?idFile=' + item.pic
                }
                this.hotList = list;
            }).catch((err) => {
                Toast(err)
            })
            goodsApi.searchNew().then(response => {
                let list = response.data
                for (const index in  list) {
                    const item = list[index]
                    item.img = baseApi+'/file/getImgStream?idFile=' + item.pic
                }
                this.newList = list

            }).catch((err) => {
                Toast(err)
            })
        },
        queryTopic(){
            topicApi.queryAll().then(response => {
                let list = response.data
                for (const index in  list) {
                    const item = list[index]
                    item.img = baseApi+'/file/getImgStream?idFile=' + item.article.img
                }
                this.topicList = list
            })
        },

        getBanners(idCategory) {
            let bannerList = this.navList[idCategory].bannerList;

            let imgList = new Array()
            for (let i = 0; i < bannerList.length; i++) {
                let url = ''
                let page = bannerList[i].page
                if (page != '') {
                    if (page.indexOf('http') === 0) {
                        url = page
                    } else {
                        url = '#/' + bannerList[i].page
                    }
                }
                if (bannerList[i].param != '') {
                    const param = JSON.parse(bannerList[i].param)
                    for (const key in param) {
                        url += '/' + param[key]
                    }
                }
                imgList.push({
                    url: url,
                    // path: baseApi + '/file/getImgStream?idFile=' + bannerList[i].idFile
                    path: baseApi + '/file/getStreamById?idFile=' + bannerList[i].idFile
                })
            }
            this.banners = imgList
        },
        getGoodslist(idCategory) {
            this.listQuery['idCategory'] = idCategory
            goodsApi.queryGoods(this.listQuery).then(response => {
                let list = response.data.records
                this.total = response.data.total
                for (var index in  list) {
                    const item = list[index]
                    item.img = baseApi + '/file/getImgStream?idFile=' + item.pic
                }
                this.goodsList = list;

            }).catch((err) => {
                Toast(err)
            })
        },
        clickNav(index, title) {
            this.activeNav = index;
            this.init();

        },
        loadMore() {
            this.loading = false;

            this.finished = true;
        },
        clickSwipe(index, p2) {
            console.log(index + p2);
        },
        viewGoodsDetail(id) {
            this.$router.push({path: '/goods/'+id})
        },
        formatPrice(price) {
            return (price / 100).toFixed(2)
        },
        toTopic(id) {
            this.$router.push({path: '/topic/'+id})
          // Toast('敬请期待')
        },
        showGoodsList(){
            // console.log("===showGoodsList===");
        }

    }
};
