import wxpay from '@/api/wxpay'
import {Button, Cell, CellGroup, NavBar, Radio, RadioGroup, Tabbar, TabbarItem, Toast} from 'vant'

export default {
    components: {
        [NavBar.name]: NavBar,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },

    data() {
        return {
            title: document.title,
            order: {},
            payType: 'wxpay',
            activeFooter: 5
        }
    },
    mounted() {
        this.init();
        this.initBridgeReady();
    },
    computed: {},

    methods: {
        init() {
            let orderSn = this.$route.query.orderSn
            console.log(orderSn)
            let totalPrice = this.$route.query.totalPrice
            this.order = {orderSn: orderSn, totalPrice: totalPrice}
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        initBridgeReady() {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
            }
        },
        pay() {
            this.payType == 'wxpay'
            let payTypeName = this.payType == 'wxpay' ? '微信支付' : '支付宝'
            Toast('准备使用' + payTypeName + '支付')
            if (this.payType == 'wxpay') {
                wxpay.getPayparams(this.order.orderSn).then(res => {
                    let wxpayParams = res.data;
                    console.log("-------------++++-------------");
                    console.log(res.data);
                    this.onBridgeReady(wxpayParams);
                });
            }
            //this.$router.push('/')
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        onBridgeReady(wxpayParams) {
            let currentOrderSn = this.order.orderSn
            let vueRouter = this.$router;
            // const pay_params = JSON.parse(params);
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId": wxpayParams.appId,  //公众号名称，由商户传入
                    "timeStamp": wxpayParams.timeStamp,  //时间戳，自1970年以来的秒数
                    "nonceStr": wxpayParams.nonceStr,  //随机串
                    "package": wxpayParams.package,   //perpayid=xxxxxxx
                    "signType": wxpayParams.signType,  //微信签名方式：
                    "paySign": wxpayParams.paySign  //微信签名
                },
                function (res) {
                    Toast({
                        message:"订单支付查询中",
                        icon: 'like-o'
                    })
                    if (res.err_msg == 'get_brand_wcpay_request:ok') {
                        let timer = 0;
                        let intervalId = setInterval(function () {
                             wxpay.getOrderStatus(currentOrderSn).then(res => {
                                Toast(res.data.order_msg)
                                if (res.data.order_status == '2' || timer++>3) {
                                    Toast.success(`订单${res.data.order_msg}`);
                                    clearInterval(intervalId);
                                    vueRouter.push("order/detail/"+currentOrderSn)

                                }
                                if (timer++>=6){
                                    Toast.fail(`订单${res.data.order_msg}`);
                                    clearInterval(intervalId);
                                }
                              });
                        }, 3000);
                    } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
                        Toast('支付取消!!!');
                    } else if (res.err_msg == 'get_brand_wcpay_request:fail') {
                        Toast('支付失败！');
                    } else {
                        Toast('支付失败！');
                    }

                },
                function (err) {
                    console.log(err)
                    Toast.fail(err)
                }
            );
        },

    }
};
// wxpay.getOrderStatus(this.order.orderSn).then(res => {
//     console.log(res);
//     console.log("支付成功!!!");
//     Toast(res.data.order_mesage);
//     this.$router.push("/user");
// });