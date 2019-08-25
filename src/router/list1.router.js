
export default{
  path:'/list1',
  name:'list1',
  component:() => import(/* webpackChunkName: "list1" */'@/components/demo1/list1.vue')
}