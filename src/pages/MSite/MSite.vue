<template>
  <div>
<!--头部-->
<HeaderLogo/>
<!--导航-->
<HeaderNav/>
<!--轮播图-->
<Banner/>
<!--退款退货-->
<Logistics/>
<!--商品分类-->
<Classify/>
<!--广告-->
<Advertising/>
<!--底部-->
<!--特价区-->
 <Bargain/>
<!--私人定制-->
<Private/>
<!--限时购-->
<Limited/>
<!--新品首发-->
<Newsgoods/>
<!--人气推荐-->
<Welcome/>

<!--类目热销榜-->
<HotSale/>
</div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import HeaderLogo from './components/HeaderLogo/HeaderLogo'
  import HeaderNav from './components/HeaderNav/HeaderNav'
  import Banner from './components/Banner/Banner'
  import Logistics from './components/Logistics/Logistics'
  import Classify from './components/Classify/Classify'
  import Advertising from './components/Advertising/Advertising'
  import Bargain from './components/Bargain/Bargain'
  import Private from './components/Private/Private'
  import Limited from './components/Limited/Limited'
  import Newsgoods from './components/Newsgoods/Newgoods'
  import Welcome from './components/Welcome/Welcome'
  import HotSale from './components/HotSale/HotSale'

  
  export default {
    components:{
      HeaderLogo,
      HeaderNav,
      Banner,
      Logistics,
      Classify,
      Advertising,
      Bargain,
      Private,
      Limited,
      Newsgoods,
      Welcome,
      HotSale
    },
    mounted(){
       var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

     })

        
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
