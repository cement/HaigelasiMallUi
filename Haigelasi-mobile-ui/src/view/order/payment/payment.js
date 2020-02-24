import wxpay  from '@/api/wxpay'
import {Button, Cell, CellGroup, NavBar, Radio, RadioGroup, Toast} from 'vant'
export default {
    components: {
        [NavBar.name]: NavBar,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Button.name]: Button,
        [Toast.name]: Toast
    },

    data() {
        return {
            order: {},wxpay,
            payType: 'wxpay'
        }
    },
    mounted() {
        this.init();
        initBridgeReady();
    },
    computed: {

    },

    methods: {
        init() {
            let orderSn = this.$route.query.orderSn
            console.log(orderSn)
            let totalPrice = this.$route.query.totalPrice
            this.order ={orderSn:orderSn,totalPrice:totalPrice}
        },
        initBridgeReady(){
            if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        },
        pay() {
            this.payType == 'wxpay'
            let payTypeName = this.payType == 'wxpay' ? '微信支付' : '支付宝'
            Toast('准备使用' + payTypeName + '支付')
            if(this.payType == 'wxpay'){
                wxpay.getPayparams(this.order.orderSn).then(res=>{
                    let wxpayParams = res.data;
                    colsole.log(res.data);
                    this.onBridgeReady(wxpayParams);
                });
            }
            //this.$router.push('/')
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        onBridgeReady(params) {
            const pay_params = JSON.parse(params);
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId": pay_params.appId,  //公众号名称，由商户传入
                    "timeStamp": pay_params.timeStamp,  //时间戳，自1970年以来的秒数
                    "nonceStr": pay_params.nonceStr,  //随机串
                    "package": pay_params.package,
                    "signType": pay_params.signType,  //微信签名方式：
                    "paySign": pay_params.paySign  //微信签名
                },
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                        Toast('支付成功！');
                        this.$router.push('/order')
                    }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
                        Toast('支付取消！');
                    }else if(res.err_msg == "get_brand_wcpay_request:fail"){
                        Toast('支付失败！');
                    }else{
                        Toast('支付失败！');
                    }
                });
        },

    }
};
