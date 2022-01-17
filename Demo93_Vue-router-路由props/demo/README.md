vue-router 的props的使用

在路由配置里面 声明props 

1、直接props:{id:'11',name:'222'} 
2、props:true ,会将params转成props
3、props($route){
    return {id:$route.query.id,...} 
} 使用回调函数的方式 可处理query