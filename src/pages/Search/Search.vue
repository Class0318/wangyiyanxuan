<template>
  <div>
     <div id="search_header">
         <div class="search_house" @click="$router.push('/msite')">
         <i class="iconfont icon-weibiaoti-"></i>
        </div>
     <div class="search_middle">
        <span class="search_find">发现</span>
        <span class="search_home">甄选家</span>
      </div>
      <div class="search_footer" @click="$router.push('/goods')">
        <i class="iconfont icon-icon_search"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div id="search_middle">
        <div class="wrapper">
            <ul class="search_list">
                <li class="search_item" :class="{on:isIndex === index}" @click="navclick(index)"
                 v-for="(item,index) in labels" :key="index" >{{item}}</li>
               
            </ul>
        </div>
    </div>
    <div id="search_things">
        <img class="search_one" src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
        <img class="search_two" src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344" alt="">
    </div>
    <div class="search_August">
      <div class="search_one">
        <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
      </div>
      <div class="search_two">
        <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?
        imageView&quality=75&thumbnail=750x0" alt=""/>
      </div>
      <div class="search_three">
        <img src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isIndex:'0',
        labels:['推荐','好货内部价','回购榜','晒单','盛夏','推荐','好货内部价','回购榜','晒单']
      }
    },
    mounted(){
        let scroll = new BScroll('.wrapper',{
          scrollX: true,
          click: true
      })
    },
    methods:{
      navclick(index){
        this.isIndex = index 
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#search_header
  margin-top 20px
  display flex
  width 100%
  height 50px
  align-items center
  .search_house
    .iconfont
      font-size 50px
      color #666666
      padding-left 20px
  .search_middle
    margin-left 180px
    .search_find
      font-size 40px
      color #B4282D
      font-weight bold
    .search_home
      font-size 28px
      color #7F7F7F
      margin-left: 14px;


  .search_footer
    margin-left: 160px;
    .iconfont
      font-size 50px
      color #666666
    .icon-icon_search
      padding-right 16px
#search_middle
  .wrapper
    margin-top value
    height 72px
    overflow hidden
    .search_list
      // display flex
      display inline-block
      align-items center
      // height 18px
      // width 1000px
      white-space nowrap
      margin-top 20px
      .search_item
        display inline-block
        border 2px solid white
        padding: 16px 24px;
        font-size 28px
        color #7F7F7F
        &.on
          color red
      .red
        color #B4282D
        border-bottom 2px solid red
        margin-left: 14px;

#search_things
  width 100%
  height 484px
  img
    width 100%
    height 484px
    display block
  .search_one
    width 752px
    height 242px
  .search_two
    width 750px
    height 344px
.search_August
  width 100%
  height 85px
  .search_one
    img
      width 100%
      height 170px
  .search_two
    img 
      width 100%
      height 340px
  .search_three
    img 
      width 100%
      height 167px

 

</style>
