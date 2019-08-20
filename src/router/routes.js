//所有路由配置数组
import MSite from '../pages/MSite/MSite.vue'
import Category from '../pages/Category/Category.vue'
import Search from '../pages/Search/Search.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Profile from '../pages/Profile/Profile.vue'
import Phone from '../pages/Phone/Phone.vue'
import Goods from '../pages/Goods/Goods.vue'


export default [{
  path:'/msite',
  component:MSite,
  meta:{
    showFooter:true
  }
},
{
  path:'/category',
  component:Category,
  meta:{
    showFooter:true
  }
},
{
  path:'/search',
  component:Search,
  meta:{
    showFooter:true
  }
},
{
  path:'/shopping',
  component:Shopping,
  meta:{
    showFooter:true
  }
},
{
  path:'/profile',
  component:Profile,
  meta:{
    showFooter:false
  }
},
{
  path:'/goods',
  component:Goods,
  meta:{
    showFooter:false
  }
},
{
  path:'/',
  redirect:'/msite'
}

]