import loginApi from '@/api/login'
import userApi from '@/api/user'
import store from '@/store'
import {Button, Cell, CellGroup, Col, Icon, Image, NavBar,Tabbar, TabbarItem, Popup, Radio, RadioGroup, Row, Toast} from 'vant';

const baseApi = process.env.VUE_APP_BASE_API
export default {
    components: {
        [Row.name]: Row,
        [Button.name]: Button,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [NavBar.name]: NavBar,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Toast.name]: Toast,
        [Image.name]: Image,
        [Popup.name]: Popup,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio
    },
    store,
    data() {
        return {
            title:document.title,
            avatarUrl: '/logo.jpg',
            user: {},
            showGender: false,
            activeFooter:5
        }
    },
    created(){
        let search = window.location.search
        this.getWxuser(search)
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.user = store.state.app.user
            if (this.user.avatar) {
                if(this.user.avatar.startsWith('http')){
                    this.avatarUrl =  this.user.avatar
                }else{
                    this.avatarUrl = baseApi + '/file/getImgStream?idFile=' + this.user.avatar
                }
            }
        },
        onClickLeft() {

            this.$router.push('user')
        },
        onChangeGender(name) {
            this.user.gender = name
            this.user.genderStr = (name === 'male' ? '男' : '女')

            userApi.updateGender(name).then(response => {
                window.console.log(response);
                store.dispatch('app/toggleUser', this.user)
                this.showGender = false
            })
        },
        onLogout() {
            loginApi.logout().then(response => {
                // window.console.log(response);
                store.dispatch('app/toggleUser', {})
                store.dispatch('app/toggleToken', '')
                this.$router.push({path: '/index'})
            }).catch(err => {
                window.console.log(err)
            })
        },
        onGomall(){
            this.$router.push({path: '/index'})
        },
        getWxuser(search){
            if(search.indexOf('?')!=-1){
                let obj = {};
                let query = search.substr(1);
                var  itemArray = query.split("&");
                for (let i= 0;i<itemArray.length;i++){
                    let item = itemArray[i].split('=');
                    obj[item[0]]=item[1]
                }
                userApi.getWxuser(obj.id).then(res=>{
                    store.dispatch('app/toggleToken',res.token)
                    store.dispatch('app/toggleUser',res.wxUser)
                    this.user = store.state.app.user
                    // console.log(this.user)
                    if (this.user.avatar) {
                        if(this.user.avatar.startsWith('http')){
                            this.avatarUrl =  this.user.avatar
                        }else{
                            this.avatarUrl = process.env.VUE_APP_BASE_API + '/file/getImgStream?idFile=' + this.user.avatar
                        }
                    }
                })
            }else{

            }

        }
    }
}
