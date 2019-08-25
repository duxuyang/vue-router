export default{
  path:'/pan1',
  name:"pan1",
  component:()=>import(/* webpackChunkName: "pan1" */'@/components/demo2/pan1'),
  children:[
    {
      path:'/',
      name:'pan2',
      component:()=>import(/* webpackChunkName: "pan2" */'@/components/demo2/pan2')
    },
    {
      path:'pan3',
      name:'pan3',
      component:()=>import(/* webpackChunkName: "pan3" */'@/components/demo2/pan3')
    }
  ]
}