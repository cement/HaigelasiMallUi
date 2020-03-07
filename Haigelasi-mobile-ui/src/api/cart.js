import request from '@/utils/request'

export default {
    count: function () {
        return request({
            url: '/user/cart/count',
            method: 'get'
        })
    },
    queryByUser: function () {
        return request({
            url: '/user/cart/queryByUser',
            method: 'get'
        })
    },
    add: function (params) {
        return request({
            url: '/user/cart/add',
            method: 'POST',
            data:params
        })
    },
    updateCount:function(id,count){
        return request({
            url: '/user/cart/updateCount/'+id+'/'+count,
            method: 'POST',
        })
    },
    updateStatus:function(id,status){
        return request({
            url: '/user/cart/updateStatus/'+id+'/'+status,
            method: 'POST',
        })
    }
}
