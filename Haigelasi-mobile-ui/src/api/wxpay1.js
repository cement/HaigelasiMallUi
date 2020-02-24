import axios from 'axios';
export default {
    methods:{
        wxpay() {
            axios.post(url,data)
                .then((res) => {
                if(res.code == 200) {
                const pay_params = res.data.jsApiParameters

                if (typeof WeixinJSBridge == "undefined"){
                    if( document.addEventListener ){
                        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                    }else if (document.attachEvent){
                        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                    }
                }else{
                    this.onBridgeReady(pay_params);
                }
            }else{
                alert('微信支付调起失败！');
            }
        }).catch((err) => {
                console.log(err);
        })
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
                        alert('支付成功！');
                    }
                });
        },
    }

}