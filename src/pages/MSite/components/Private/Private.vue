<template>
<div>
  11111
    <div class="private">
    <div class="title">私人定制</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(personalShop, index) in personalShopArr" :key="index">
          <ul class="private_custom">
           <li class="private_pic" v-for="(good,index) in personalShop" :key="index">
            <img :src="good.primaryPicUrl" alt="">
            <span>{{good.tagName}}</span>
          </li>
        </ul>
        </div>
        <!-- <div class="swiper-slide">
          <ul class="private_custom">
            <li class="private_pic">
              <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>网易智造T300无线吸尘器... ￥1599</span>
            </li>
            <li class="private_pic">
              <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>严选礼品卡1000元面...￥1000</span>
            </li>
            <li class="private_pic">
              <img src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>全球通用，转换插座...￥999</span>
            </li>
          </ul>
        </div> -->
        <!-- <div class="swiper-slide">
          <ul class="private_custom">
            <li class="private_pic">
              <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>网易智造T300无线吸尘器... ￥1599</span>
            </li>
            <li class="private_pic">
              <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>严选礼品卡1000元面...￥1000</span>
            </li>
            <li class="private_pic">
              <img src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>全球通用，转换插座...￥999</span>
            </li>
          </ul>
        </div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="bian"></div>
  </div>
</template>

<script src="lodash.js"></script>
<script type="text/ecmascript-6">
    import chunk from 'lodash/chunk'
    import {mapState} from 'vuex'
    export default {
    
    async mounted(){
      await this.$store.dispatch('getHome') 
      
    },
    computed:{
      // ...mapState(['homedata']),
      ...mapState({
        homedata:state => state.msite.homedata
      }),
       personalShopArr () {
        let arr3 = []
        if(this.homedata.personalShop){
          this.homedata.personalShop.reduce((arr, shop)=>{
            arr.push(shop)
            if(arr.length === 3){
              arr3.push(arr)
              arr = []
            }
            return arr
          }, [])
        }
        return arr3
      },
    },
   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.private
  box-sizing border-box
  .title
    width 100%
    height 100px
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    padding: 54px 40px;
  .swiper-container
    .swiper-wrapper
      .swiper-slide
        .private_custom
          overflow hidden
          display flex
          width 100%
          .private_pic
            height 310px
            margin: 10px 16px;
            img
              width 216px
              height 216px
              background #F5F5F5
            span
              font-size 24px
.bian
  width 100%
  height 20px
  background #F5F5F5
</style>
