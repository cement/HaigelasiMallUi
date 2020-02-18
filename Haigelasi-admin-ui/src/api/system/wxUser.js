import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/wx/user/list',
        method: 'get',
        params
    })
}


export function save(params) {
    return request({
        url: '/wx/user',
        method: 'post',
        params
    })
}

export function remove(id) {
    return request({
        url: '/wx/user',
        method: 'delete',
        params: {
            id: id
        }
    })
}
