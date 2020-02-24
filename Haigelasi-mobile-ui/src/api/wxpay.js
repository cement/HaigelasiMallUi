import request from '@/utils/request'

export default {
    getPayparams: function (orderId) {
        return request({
            url: 'http://192.168.1.111/wxpay/unifiedOrder/'+orderId,
            method: 'get'
        })
    }
}

