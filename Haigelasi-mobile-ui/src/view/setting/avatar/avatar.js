import userApi from '@/api/user'
import {Button, Cell, CellGroup, Field, Image, NavBar, Toast, Uploader} from 'vant'
import store from '@/store'

const baseApi = process.env.VUE_APP_BASE_API
export default {
    components: {
        [Button.name]: Button,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [NavBar.name]: NavBar,
        [Field.name]: Field,
        [Toast.name]: Toast,
        [Image.name]: Image,
        [Uploader.name]: Uploader
    },
    data() {
        return {
            avatarUrl: '/logo.jpg'
        }
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
            this.$router.go(-1)
        },
        afterRead(vantFile) {
            console.log('上传成功', vantFile)
            userApi.upload({
                name: vantFile.file.name,
                type: vantFile.file.type,
                base64: vantFile.content
            }).then(response => {
                //更新用户信息
                store.dispatch('app/toggleUser', response.data)
                this.avatarUrl = baseApi + '/file/getImgStream?idFile=' + response.data.avatar
            })
        }
    }
}
