// import Cookies from 'js-cookie'

const COOKIE_KEY_PRE="HaigelasiMall-"
const tokenKey = COOKIE_KEY_PRE+"token"
const cartKey = COOKIE_KEY_PRE+"cart"

// this.getCartGoods()||this.setCartGoods(JSON.stringify({}))

export default {
  getToken:function(){
    return localStorage.getItem(tokenKey)
  },
  setToken:function(token){
    localStorage.setItem(tokenKey,token)
  },
  removeToken:function(){
    localStorage.removeItem(tokenKey)
  },
  set:function(key,value){
    localStorage.setItem(key,value)
  },
  get:function(key){
    return localStorage.getItem(key)
  },
  del:function(key){
    localStorage.removeItem(key)
  },



  getCartGoods(){
    return localStorage.getItem(cartKey)
  },
  setCartGoods:function(cartGoodsObj){
    localStorage.setItem(cartKey,cartGoodsObj);
  },

  clearCartGoods:function(){
    localStorage.clear(cartKey);
  },
  getCartGoodsItem(goodsId){
    let cartGoods = this.getCartGoods();
    let cartGoodsObj = JSON.parse(cartGoods);
     return cartGoodsObj[goodsId];
  },
  setCartGoodsItem(goods){
    let cartGoods = this.getCartGoods()||'{}';
    let cartGoodsObj = JSON.parse(cartGoods);
    cartGoodsObj[goods.id] = goods;
    localStorage.setItem(cartKey,JSON.stringify(cartGoodsObj))
  },
  delCartGoodsItemById(goodsId) {
    let cartGoods = this.getCartGoods();
    let cartGoodsObj = JSON.parse(cartGoods);
    delete cartGoodsObj[goodsId];
    this.setCartGoodsItem(cartGoodsObj)
  },
  delCartGoodsItem(goods) {
    let cartGoods = this.getCartGoods();
    let cartGoodsObj = JSON.parse(cartGoods);
    delete cartGoodsObj[goods.id];
    this.setCartGoodsItem(cartGoodsObj)
  }


}
// export function getToken() {
//   // return Cookies.get(tokenKey)
//   return localStorage.getItem(tokenKey)
// }
//
// export function setToken(token) {
//   // return Cookies.set(tokenKey, token)
//   localStorage.setItem(tokenKey,token)
// }
//
// export function removeToken() {
//   return Cookies.remove(tokenKey)
//   localStorage.removeItem(tokenKey)
// }
// export function set(key,value){
//   // return Cookies.set(key,value)
//   localStorage.setItem(key,value)
// }
// export  function get(key){
//   // return Cookies.get(key)
//   return localStorage.getItem(key)
// }
