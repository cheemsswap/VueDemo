为路由添加组件内的守卫
https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB

# 组件进入守卫 
beforeRouteEnter(to, from, next){
   next((vm)=>{
   })
}

# 组件复用守卫
在当前路由改变，但是该组件被复用时调用
举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
可以访问组件实例 `this`

beforeRouteUpdate(to, from, next) {

},

# 组件离开守卫
这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}