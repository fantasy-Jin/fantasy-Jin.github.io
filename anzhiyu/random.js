var posts=["TypeScript/TypeScript函数类型/","TypeScript/TypeScript泛型/","TypeScript/TypeScript语法/","TypeScript/TypeScript语法拓展/","TypeScript/TypeScript面向对象/","ajax/ajax/","common/npm发布包/","git/git/","common/部署项目记录/","h5c3/flex/","h5c3/css/","java/java-io流-File类/","ide/vscode/","java/java反射/","java/java多线程/","java/java异常处理/","java/java新特征/","java/java日期时间api小计/","java/java比较器/","java/java泛型/","java/java网络编程/","java/java集合-collection-map/","js/js_advanced/","java/java面向对象编程（基础）/","java/java面向对象编程（进阶）/","java/java面向对象编程（高级）/","js/js_modules/","linux/archlinux/","js/web_api/","nodejs/express/","vue/Vue3进阶/","nodejs/mysql/","vue/Vue-State_management/","nodejs/node/","vue/vue-router/","webpack/webpack基础/","vue/vue3/","vue/vue核心基础/","vue/vue组件化编程/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};