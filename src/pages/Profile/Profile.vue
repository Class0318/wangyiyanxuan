<template>
  <div>
<!-- 登录首页 -->
  <div id="go" v-show="isLoginMain">
    <!--头部 -->
    <div id="profile_header">
      <div class="profile_tubiao" @click="$router.push('/msite')">
        <i class="iconfont icon-weibiaoti-"></i>
      </div>
      <div class="profile_pic">
        <img src="./images/aa.png" alt="">
      </div>
      <div class="profile_right">
        <i class="iconfont icon-gouwuche"></i>
        <i class="iconfont icon-icon_search"></i>
      </div>
    </div>
    <!--中间图片 -->
    <div id="profile_middle">
      <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <!-- 登陆按钮 -->
    <div id="profile_login">
      <div class="profile_phone" @click="showPhone">
          <i class="iconfont icon-shouji"></i>
          <span>手机号快捷登录</span>
      </div>
      <div class="profile_mes" @click="showMail">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账户登录</span>
      </div>
    </div>
    <!-- 登录方式 -->
    <div id="profile_way">
      <div class="profile_wx">
          <i class="iconfont icon-weixin"></i> 
          <span class="profile_weixin">微信</span>  |
      </div>
      <div class="profile_QQ">
        <i class="iconfont icon-qq"></i> 
        <span class="profile_qq">QQ</span>   |
      </div>
      <div class="profile_wb">
        <i class="iconfont icon-weibo"></i> 
        <span class="profile_weibo">微博</span>
      </div>
    </div>
  </div>
<!-- 手机号登录 -->
  <div id="phone_star" v-show="isLoginByPhone">
     <div id="phone_header">
      <div class="phone_tubiao">
        <i class="iconfont icon-weibiaoti-"></i>
      </div>
      <div class="phone_pic">
        <img src="./images/aa.png" alt="">
      </div>
      <div class="phone_right">
        <i class="iconfont icon-gouwuche"></i>
        <i class="iconfont icon-icon_search"></i>
      </div>
    </div>
    <!--中间图片 -->
    <div id="phone_middle">
      <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div id="phone_buttom">
      <div class="phone_hao">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="phone_yan">
        <input type="text" placeholder="请输入短信验证码">
        <div class="yanzheng">获取验证码</div>
      </div>
      <div class="unlogin">
        <div class="unlogin_one">
          <span class="unlogin_two">遇到问题？</span>
          <span class="unlogin_three">使用验证码登录</span>
        </div>
      </div>
      <div class="phone_anniu">
        <span class="anniu_one">登录</span>
      </div>
      <div class="beizhu">
        <input type="checkbox">
        <span class="beizhu_one">我同意</span>
        <span class="beizhu_two">《服务条款》</span>
        <span class="beizhu_three">和</span>
        <span class="beizhu_four">《网易隐私政策》</span>
      </div>
      <div class="last" @click="showMsite">
        <span class="lastone">其他登录方式</span>
        <i class="iconfont icon-weibiaoti-"></i>
      </div>
    </div>
  </div> 
<!-- 邮箱登录 -->
  <div id="email_star" v-show="isLoginByEmail">
     <div id="email_header">
      <div class="email_tubiao">
        <i class="iconfont icon-weibiaoti-"></i>
      </div>
      <div class="email_pic">
        <img src="./images/aa.png" alt="">
      </div>
      <div class="email_right">
        <i class="iconfont icon-gouwuche"></i>
        <i class="iconfont icon-icon_search"></i>
      </div>
    </div>
    <!--中间图片 -->
    <div id="email_middle">
      <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div id="email_buttom">
      <div class="email_hao">
        <input type="text" placeholder="请输入邮箱">
      </div>
      <div class="email_yan">
        <input type="text" placeholder="密码">
        <div class="yanzheng">获取验证码</div>
      </div>
      <div class="unlogin">
        <div class="unlogin_one">
          <span class="unlogin_two">注册账号</span>
          <span class="unlogin_three">忘记密码</span>
        </div>
      </div>
      <div class="email_anniu">
        <span class="anniu_one">登录</span>
      </div>
      <div class="beizhu">
        <input type="checkbox">
        <span class="beizhu_one">我同意</span>
        <span class="beizhu_two">《服务条款》</span>
        <span class="beizhu_three">和</span>
        <span class="beizhu_four">《网易隐私政策》</span>
      </div>
      <div class="last" @click="isLoginqita">
        <span class="lastone">其他登录方式</span>
        <i class="iconfont icon-weibiaoti-"></i>
      </div>
    </div>
  </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isLoginMain:true,//是否显示登录的首页
        isLoginByPhone:false,//是否手机登录
        isLoginByEmail:false,//是否邮箱登录
        
      }
    },
    methods:{
      isLoginqita(){
        this.isLoginMain=true,
        this.isLoginByPhone=false,
        this.isLoginByEmail=false
      },
      showPhone(){
        this.isLoginByPhone=true,
        this.isLoginMain=false,
        this.isLoginByEmail=false
      },
      showMail(){
        this.isLoginByPhone=false,
        this.isLoginMain=false,
        this.isLoginByEmail=true
      },
      showMsite(){
        this.isLoginByPhone=false,
        this.isLoginMain=true,
        this.isLoginByEmail=false
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#go
  #profile_header
    width 100%
    height 44px
    display flex
    justify-content space-between
    padding: 10px 10px;
    box-sizing: border-box;
    .profile_tubiao
      .icon-weibiaoti-
        font-size 50px
    .profile_pic
      img
        width: 172px;
        height: 54px;
    .profile_right
      .iconfont
        margin-right: 10px;
        font-size 50px
  #profile_middle
    position absolute
    top 20%
    left 37%
    img 
      width 268px
      height 90px
  #profile_login
    padding: 488px 44px
    .profile_phone
      display flex
      align-items center
      width 670px
      height 94px
      border 1px solid red
      background: red;
      color: white;
      border-radius: 5px;
      .icon-shouji
        font-size 68px
        margin-left 180px
      span 
        font-size 28px
        margin-left 28px
    .profile_mes
      display flex
      align-items center
      margin-top: 30px;
      width 670px
      height 94px
      border 1px solid red
      color: red;
      border-radius: 5px;
      .icon-youxiang
        font-size 68px
        margin-left 180px
      span 
        font-size 28px
        margin-left 28px
  #profile_way
    width 100%
    height 40px
    display flex
    align-items center
    justify-content center
    .profile_wx
      padding-left 40px
      .profile_weixin
        padding-left 20px
        font-size 28px
        color #7F7F7F
      .icon-weixin
        color #7F7F7F
    .profile_QQ
      padding-left 40px
      .profile_qq
        padding-left 20px
        font-size 28px
        color #7F7F7F
      .icon-qq
        color #7F7F7F
    .profile_wb
      padding-left 40px
      .profile_weibo
        padding-left 20px
        font-size 28px
        color #7F7F7F
      .icon-weibo
        color #7F7F7F
#phone_star
  #phone_header
    width 100%
    height 44px
    display flex
    justify-content space-between
    padding: 10px 10px;
    box-sizing: border-box;
    padding-top: 20px;
    .phone_tubiao
      .icon-weibiaoti-
        font-size 50px
    .phone_pic
      img
        width: 172px;
        height: 54px;
    .phone_right
      .iconfont
        margin-right: 10px;
        font-size 50px
  #phone_middle
    text-align center
    padding-top 110px
    img 
      width 268px
      height 90px
  #phone_buttom
    width 100%
    text-align center
    padding-top 50px
    .phone_hao
      border-bottom 2px solid #ccc
      input
        width: 8.27rem;
        height: 0.6rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
    .phone_yan
      position relative
      display flex
      justify-content space-between
      width 100%
      border-bottom 2px solid #ccc 
      input
        width: 8.27rem;
        height: 0.6rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
        margin-left 60px
      .yanzheng
        position absolute
        bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 100px;
        width 164px
        height 52px
        font-size 28px
        border 1px solid #7F7F7F
    .unlogin
      margin-top 40px
      width 100%
      height 42px
      display: flex;
      align-items: center;
      justify-content: space-between;
      .unlogin_one
        .unlogin_two
          font-size 30px
          color #7F7F7F
        .unlogin_three
          font-size 30px
          color #7F7F7F
          margin-left: 320px;
    .phone_anniu
      width 600px
      height 95px
      border 2px solid red
      background red
      border-radius 8px
      margin-top 100px
      margin-left 70px    
      .anniu_one
        font-size: 36px;
        line-height: 95px;
        color: white;
    .beizhu
      width 100%
      padding-top 40px
      input 
        font-size 20px
      .beizhu_one
        font-size 28px
        color #7F7F7F
      .beizhu_two
        font-size 28px
        color #007AFF
      .beizhu_three
        font-size 28px
        color #7F7F7F
      .beizhu_four
        font-size 28px
        color #007AFF
    .last
      width 100%
      padding-top: 40px;
      .lastone
        font-size 30px
        padding-right: 40px;
        color #333333
#email_star
  #email_header
    width 100%
    height 44px
    display flex
    justify-content space-between
    padding: 10px 10px;
    box-sizing: border-box;
    padding-top: 20px;
    .email_tubiao
      .icon-weibiaoti-
        font-size 50px
    .email_pic
      img
        width: 172px;
        height: 54px;
    .email_right
      .iconfont
        margin-right: 10px;
        font-size 50px
  #email_middle
    text-align center
    padding-top 110px
    img 
      width 268px
      height 90px
  #email_buttom
    width 100%
    text-align center
    padding-top 50px
    .email_hao
      border-bottom 2px solid #ccc
      input
        width: 8.27rem;
        height: 0.6rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
    .email_yan
      position relative
      display flex
      justify-content space-between
      width 100%
      border-bottom 2px solid #ccc 
      input
        width: 8.27rem;
        height: 0.6rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
        margin-left 60px
      .yanzheng
        position absolute
        bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 100px;
        width 164px
        height 52px
        font-size 28px
        border 1px solid #7F7F7F
    .unlogin
      margin-top 40px
      width 100%
      height 42px
      display: flex;
      align-items: center;
      justify-content: space-between;
      .unlogin_one
        .unlogin_two
          font-size 30px
          color #7F7F7F
        .unlogin_three
          font-size 30px
          color #7F7F7F
          margin-left: 320px;
    .email_anniu
      width 600px
      height 95px
      border 2px solid red
      background red
      border-radius 8px
      margin-top 100px
      margin-left 70px    
      .anniu_one
        font-size: 36px;
        line-height: 95px;
        color: white;
    .beizhu
      width 100%
      padding-top 40px
      input 
        font-size 20px
      .beizhu_one
        font-size 28px
        color #7F7F7F
      .beizhu_two
        font-size 28px
        color #007AFF
      .beizhu_three
        font-size 28px
        color #7F7F7F
      .beizhu_four
        font-size 28px
        color #007AFF
    .last
      width 100%
      padding-top: 40px;
      .lastone
        font-size 30px
        padding-right: 40px;
        color #333333














        

      
        





      




















 </style>
