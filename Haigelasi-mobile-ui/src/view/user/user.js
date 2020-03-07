import userApi from '@/api/user'
import store from '@/store'
import {Cell, CellGroup, Col, Icon, Row, Image, Tabbar, TabbarItem, Toast, NavBar} from 'vant';

export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [Image.name]: Image,
        [CellGroup.name]: CellGroup,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Toast.name]: Toast,
        [NavBar.name]: NavBar,
    },
    data() {
        return {
            user:{},
            activeFooter: 3,
            avatarUrl:'',
            redirect:''
        }
    },
    mounted() {
        this.init()
        this.redirect = this.$route.query.redirect
    },
    methods: {
        init() {
            let user = this.user = store.state.app.user
            console.log(user)
            if (user.avatar) {
                if(user.avatar.startsWith('http')){
                    this.avatarUrl =  user.avatar
                }else{
                    this.avatarUrl = process.env.VUE_APP_BASE_API + '/file/getImgStream?idFile=' + this.user.avatar

                }
            }

            userApi.getUserInfo().then(response => {

            }).catch((err) => {
                this.$router.replace({path:'login',query:{redirect:'user'}})
            })
        },
        sorry(){
          Toast('敬请期待')
        },
        toOrder(status){
            this.$router.push({path:'order',query:{status:status}})
        },
        // onClickLeft() {
        //     if (this.redirect){
        //         this.$router.push(this.redirect);
        //     }else{
        //         this.$router.go(-1);
        //     }
        // }
    }
}
