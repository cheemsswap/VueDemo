这里我首先复习了一下 
路由别名 和 query传参，

又往里面添加了params传参形式

1、使用params 必须要给path 配置好接受的参数 例如:path: "details/:title/:url",

坑
1、在router-link :to 使用对象的时候  不能用path 必须要用别名
