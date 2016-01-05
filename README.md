## web router for javascript
```js

router
    .def(function(){
        router.go('/home/');   //定义默认状态显示情况
    })
    .add('/home/', function(){
        div.innerHTML = 'welcome home page'; //添加对应需要跳转的路由
    })
    .add('/list/', function(o){
        div.innerHTML = 'welcome list page';
    })
    .add('/detail/', function(o){
        console.log(o);
        div.innerHTML = 'welcome detail page, name:' + o.name;
    })
    .init();//执行操作
```
Routing is the process of determining what code to run when a URL is requested.
