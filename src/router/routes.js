//所有路由配置数组
import MSite from '../pages/MSite/MSite.vue'
import Category from '../pages/Category/Category.vue'
import Search from '../pages/Search/Search.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Profile from '../pages/Profile/Profile.vue'


export default [{
  path:'/msite',
  component:MSite
},
{
  path:'/category',
  component:Category
},
{
  path:'/search',
  component:Search
},
{
  path:'/shopping',
  component:Shopping
},
{
  path:'/profile',
  component:Profile
},
{
  path:'/',
  redirect:'/msite'
}

]