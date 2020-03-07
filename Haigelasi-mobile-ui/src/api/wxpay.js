import request from '@/utils/request'

export default {
    /*统一下单*/
    getPayparams: function (orderSn) {
        return request({
            url: process.env.VUE_APP_WXPAY_URL+'/wxpay/unifiedOrder/'+orderSn,
            method: 'get'
        })
    },
    /*订单支付状态*/
    getOrderStatus:function (orderSn) {
        return request({
            url: process.env.VUE_APP_WXPAY_URL+'/wxpay/getOrderPayStatus/'+orderSn,
            method: 'get'
        })
    }
}

