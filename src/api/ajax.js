import axios from 'axios'
import qs from 'qs'

//添加拦截请求器
axios.interceptors.request.use(config=> {
  //1.处理post请求的请求体参数：转化成urlencoded格式 （默认用的json格式）
  const {method,data} = config 
  if(method.toUpperCase() === 'POST' && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

//添加响应拦截器
axios.interceptors.response.use(response => {
  //2.让成功的结果不是response 而是response.data:响应拦截器成功的回调
  return response.data
  //3.统一处理请求错误：响应拦截器的失败回调
},error =>{
  //console.log('发送请求失败'，error,message)
  //中断promise链
    return new Promise(() =>{})
})
export default axios