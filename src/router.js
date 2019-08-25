import Vue from 'vue'
import Router from 'vue-router'
const Test= () => import('@/components/test')
Vue.use(Router)

const routerList=[];
function importAll(msg){
  // for(let item of msg.keys()){
  //  console.log(item)
  // }
  msg.keys().forEach((key)=>
    routerList.push(msg(key).default)
  )
}
importAll(require.context('./router',true,/\.router\.js/));
export default new Router({
  routes: [
    {
      path: '/',
      component: Test,
    },
    ...routerList
  ]
})
