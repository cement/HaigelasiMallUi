import request from '@/utils/request'
import axios from 'axios';

export default {
    methods: {
        wxpay() {
            axios.post(url, data)
                .then((res) => {
                    if (res.code == 200) {
                        const pay_params = res.data.jsApiParameters

                        if (typeof WeixinJSBridge == "undefined") {
                            if (document.addEventListener) {
                                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                            } else if (document.attachEvent) {
                                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                            }
                        } else {
                            this.onBridgeReady(pay_params);
                        }
                    } else {
                        alert('微信支付调起失败！');
                    }
                }).catch((err) => {
                console.log(err);
            })
        }

