import userApi from '@/api/user'
import store from '@/store'
import {Cell, CellGroup, Col, Icon, Row, Image,Tabbar, TabbarItem, Toast} from 'vant';

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
        [Toast.name]: Toast
    },
    data() {
        return {
            activeFooter: 3,
            avatarUrl:''
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let user = store.state.app.user
            console.log(user)
            if (user.avatar) {
                if(user.avatar.startsWith('http')){

                    this.avatarUrl =  user.avatar
                }else{
                    this.avatarUrl = baseApi + '/file/getImgStream?idFile=' + this.user.avatar

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
        }
    }
}
