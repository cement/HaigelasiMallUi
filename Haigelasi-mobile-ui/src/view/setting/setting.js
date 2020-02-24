import loginApi from '@/api/login'
import userApi from '@/api/user'
import store from '@/store'
import {Button, Cell, CellGroup, Col, Icon, Image, NavBar, Popup, Radio, RadioGroup, Row, Toast} from 'vant';

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
        [Toast.name]: Toast,
        [Image.name]: Image,
        [Popup.name]: Popup,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio
    },
    store,
    data() {
        return {
            avatarUrl: '/logo.jpg',
            user: {},
            showGender: false
        }
    },
    created(){
        let search = window.location.search
        console.log(search)
        this.getWxuser(search)
    },
    mounted() {
        this.init()
        // console.log(this.$router.query)


    },
    methods: {
        init() {
            this.user = store.state.app.user
            console.log("==== init ===");
            console.log(this.user);
            if (this.user.avatar) {

                this.avatarUrl = baseApi + '/file/getImgStream?idFile=' + this.user.avatar

            }
        },
        onClickLeft() {
            this.$router.go(-1)
        },
        onChangeGender(name) {
            this.user.gender = name
            this.user.genderStr = (name === 'male' ? '男' : '女')
            console.log(this.user)
            userApi.updateGender(name).then(response => {
                store.dispatch('app/toggleUser', this.user)
                this.showGender = false
            })
        },
        onLogout() {
            console.log('logout')
            loginApi.logout().then(response => {
                store.dispatch('app/toggleUser', {})
                store.dispatch('app/toggleToken', '')
                this.$router.push({path: '/index'})
            }).catch(err => {
            })
        },
        onGomll(){
            this.$router.push({path: '/index'})
        },
        getWxuser(search){
            console.log(search);
            if(search.indexOf('?')!=-1){
                let obj = {};
                let query = search.substr(1);
                var  itemArray = query.split("&");
                for (let i= 0;i<itemArray.length;i++){
                    let item = itemArray[i].split('=');
                    obj[item[0]]=item[1]
                }

                console.log(obj)
                userApi.getWxuser(obj.id).then(res=>{
                    store.dispatch('app/toggleToken',res.token)
                    store.dispatch('app/toggleUser',res.wxUser)
                    console.log(res.wxUser)
                    this.user = store.state.app.user

                })
            }else{

            }

        }
    }
}
