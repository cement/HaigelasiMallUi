import cart from '@/api/cart'
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, NavBar, Tabbar, TabbarItem,Stepper, Button, Icon  } from 'vant';
import store from '@/store'

const baseApi = process.env.VUE_APP_BASE_API
export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        [NavBar.name]: NavBar,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Stepper.name]: Stepper,
        [Button.name]: Button,
        [Icon.name]: Icon
    },

    data() {
        return {
            title:document.title,
            activeFooter: 2,
            isLogin:false,
            // checkedGoods: [],
            // checkeAllCarts:[],
            cartList: [],
            totalPrices:0,
            checkedAll: false
        }
    },
    created(){

    },
    mounted(){
      this.init()
    },
    computed: {
        checkedLength(){
            return this.cartList.filter(item=>item.status).length;
        },
        submitBarText() {
            // const count = this.checkedGoods.length;
            const count = this.cartList.filter(item=>item.status).length;
            return '结算' + (count ? `(${count})` : '');
        }
    },

    methods: {
        init(){
            const user = store.state.app.user
            // this.isLogin = user.nickName||user.id
            this.isLogin = !!user.mobile

            if(this.isLogin) {
                cart.queryByUser().then(response => {
                    let cartList = response.data
                    for (const index in cartList) {
                        let cart = cartList[index]
                        // cart.checked = true
                        cart.thumb = baseApi + '/file/getImgStream?idFile=' + cart.goods.pic
                        // this.checkedGoods.push(cartList[index].id + '')
                    }
                    this.cartList = cartList
                    this.totalPrices =  this.totalPrice()
                }).catch((err) => {

                })
            }
        },
        onClickLeft(){
          this.$router.go(-1)
        },
        submit() {
            for (let i = 0;i < this.cartList.length;i++){
                let item = this.cartList[i];
                if (item.status){
                    cart.updateStatus(item.id,1)
                }else{
                    cart.updateStatus(item.id,0)
                }
            }

            this.$router.push('checkout')
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        stepperEvent(item, arg) {
            const count = arg[0];
            cart.updateCount(item.id,count)
            this.totalPrices =  this.totalPrice()
        },
        toHome() {
            this.$router.push('/')
        },
        toLogin() {
            this.$router.push({path:'login', query: {redirect:'cart'}})
        },
        /*@ysh 此处实现有逻辑问题，采用vat官网做法*/
        // checkAll( ) {
        //     if (this.checkedGoods.length === this.cartList.length) {
        //         this.checkeAllCarts = this.checkedGoods
        //         this.checkedGoods = []
        //     } else {
        //         this.checkedGoods = this.checkeAllCarts
        //     }
        // },

        checkAll() {
            this.$refs.checkboxGroup.toggleAll(true);
        },
        cancleAll(){
            this.$refs.checkboxGroup.toggleAll(false);
        },
        toggleAll() {
            this.checkedAll = !this.checkedAll
            for (let i = 0;i<this.cartList.length;i++){
               this.cartList[i].status =this.checkedAll
                cart.updateStatus(this.cartList[i].id,this.checkedAll?1:0);
            }
             // this.$refs.checkboxGroup.toggleAll(this.checkedAll);
            // this.$refs.checkboxGroup.toggleAll();
            this.totalPrices =  this.totalPrice()
        },
        bindChange(ids){

        },
        checkboxClick(item){
            item.status = !item.status
            cart.updateStatus(item.id,item.status?1:0).then(res=>{
                for (let i = 0;i<this.cartList.length;i++){
                    if(!this.cartList[i].status){
                        this.checkedAll = false
                        this.totalPrices =  this.totalPrice()
                        return;
                    }
                }
                this.checkedAll = true
                this.totalPrices =  this.totalPrice()
            })
        },
        itemClick(item){
            this.$router.push("/goods/"+item.goods.id)
        },
        totalPrice() {
            return this.cartList.reduce((total, item) => total + (item.status ? (parseFloat(item.price) * item.count) : 0), 0)
        }

    }
};
