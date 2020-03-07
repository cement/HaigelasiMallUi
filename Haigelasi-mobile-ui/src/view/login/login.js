import loginApi from '@/api/login'
import store from '@/store'
import { Row, Col, Icon, Cell, CellGroup,Field,Button,Toast,Image,
    Tabbar,Popup,Loading,
    TabbarItem,Dialog} from 'vant';

export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Field.name]: Field,
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Dialog.name]: Dialog,
        [Popup.name]: Popup,
        [Image.name]: Image,
        [Loading .name]: Loading

    },
    data() {
        return {
            mobile:'',
            smsCode:'',
            password:'',
            activeFooter:3,
            show1:false,
            show2:true,
            redirect:'',
            hasSendSms: false,
            second: 60,
            wxauthurl:'',
            popupShow:false
        }
    },
    mounted(){
      this.init()
        // this.wxLogin()
    },
    methods:{
        init(){
            if(store.state.app.user.nickName){
                this.$router.push({path: '/index'})
                return
            }
            if(this.$route.query.redirect){
                this.redirect = this.$route.query.redirect
                console.log('redirect',this.redirect)
            }
        },
        toLoginByPassword(){
            this.show1 = false;
            this.show2 = true;
        },
        toRegister(){
            this.show2 = false;
            this.show1 = true;
        },
        wxLogin(){
            this.popupShow = true;
            window.location.href= process.env.VUE_APP_WXLOGIN_URL+'/wxLogin/login';
            // window.open('http://cement.imwork.net/wxLogin/login');
            // this.$router.push({path: '/user'})
            // loginApi.wxLogin().then(response=>{
            //      console.log("==================");
            //      console.log(response);
            //      this.wxauthurl = response.redirectUrl;
            //
            //
            //      // loginApi.wxAuth(response.redirectUrl).then(res=>{
            //      //     console.log(res);
            //      // })
            //       // window.location.href=response.redirectUrl;
            //      // let wxuser = response.wxuser;
            //      // Toast.success("欢迎 "+wxuser.nickname+" 来到海格拉斯养生小店！");
            //      // store.dispatch('app/wxUser',wxuser);
            //      // this.$router.push({path: '/index'});
            // }).catch(error=>{
            //     console.log(error);
            //     Toast.fail(error);
            // });
        },
        loginOrRegister(){
            loginApi.loginOrReg(this.mobile,this.smsCode).then( response=> {
                store.dispatch('app/toggleToken',response.data.token)
                store.dispatch('app/toggleUser',response.data.user)
                if(response.data.initPassword){
                    Toast({duration:8000,message:'欢迎新用户，请谨慎保管您的初始密码：'+response.data.initPassword})
                }
                if(this.redirect){
                    this.$router.push({path: this.redirect})
                }else {
                    this.$router.push({path: '/index'})
                }
            }).then( (err) => {
                // Toast.fail(err)
            })
        },
        loginByPass(){
            loginApi.loginByPassword(this.mobile,this.password).then( response=> {
                store.dispatch('app/toggleToken',response.data.token)
                store.dispatch('app/toggleUser',response.data.user)
                if(this.redirect){
                   this.$router.push({path: this.redirect})
                }else {
                   this.$router.push({path: '/index'})
                }
            }).catch( err=>{
                Toast(err)
            })
        },
        sendSms(){
            this.hasSendSms = true
            loginApi.sendSmsCode(this.mobile).then( response => {
                this.setTimeOut()
                const smsCode = response.data
                Toast('提示：测试阶段不发送短信验证码：'+smsCode)
            })
        },
        setTimeOut () {
            let timer = setTimeout(() => {
                this.setTimeOut()
                if(this.second > 0) {
                    this.second--
                }
            }, 1000)
            if(this.second <= 0) {
                this.hasSendSms = false
                this.second = 60
                clearTimeout(timer)
            }
        },
    }
};
