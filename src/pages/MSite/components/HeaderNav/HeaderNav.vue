<template>
<div id="home">
  <div class="wrapper">
    <ul id="listContainer">
      <li class="item2" :class="{on:isIndex === index}" @click="navclick(index)"
      v-for="(item, index) in labels" :key="index">{{item}}
      </li>
    </ul>
  </div>
  <div class="zhezhao">
    <div class="pindao_one">全部频道</div>
    <div class="more" @click="showHeader">
      <i class="iconfont icon-icon_arrow_right"></i>
    </div>
    <ul class="pindao_two" v-show="isShow">
      <li class="item">居家生活</li>
      <li class="item">服饰鞋包</li>
      <li class="item">美食酒水</li>
      <li class="item">服饰鞋包</li>
      <li class="item">美食酒水</li>
      <li class="item">服饰鞋包</li>
      <li class="item">美食酒水</li>
      <li class="item">服饰鞋包</li>
      <li class="item">服饰鞋包</li>
    </ul>
    
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow:false,
        isIndex:'0',
        labels:['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子']
      }
    },
    mounted(){
      let wrapper = document.querySelector('.wrapper')
        let scroll = new BScroll('.wrapper',{
          scrollX: true,
          click: true
      })
    },
    methods:{
      showHeader(){
        this.isShow=!this.isShow
      },
      navclick(index){
        this.isIndex = index
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#home
  .wrapper
    width 750px
    height 60px
    overflow hidden
    #listContainer
      display inline-block
      white-space nowrap
      .item2
        display inline-block
        font-size 28px
        color #333333
        margin: 14px 26px
        &.on
          color red
      .icon-icon_arrow_right
        position: absolute;
        top: 98px;
        right: 32px;
        font-size: 40px;
        color #333333
      .item_red
        color red
  
  .zhezhao
    background white
    position relative
    .pindao_one
      position fixed
      left 40px 
      top 150px
      z-index 99
      font-size 30px
      color #333333
    .more
      position fixed
      right 20px
      top 120px
      z-index 11
    .pindao_two
      z-index 100
      background white
      position absolute
      flex: 1;
      flex-wrap:nowrap
      padding-top 50px
      .item
        width: 2rem;
        height: .74667rem;
        line-height: .74667rem;
        text-align: center;
        float: left;
        margin-bottom: .53333rem;
        margin-left: .4rem;
        background: #FAFAFA;
        border: 1px solid #CCC;
        border-radius: .05333rem;



    
</style>
