var posts=["TypeScript/TypeScript函数类型/","TypeScript/TypeScript泛型/","TypeScript/TypeScript语法/","TypeScript/TypeScript语法拓展/","TypeScript/TypeScript面向对象/","ajax/ajax/","common/maven/","common/npm发布包/","common/匹配系统难点记录/","common/常用包/","common/部署项目记录/","git/git/","h5c3/css/","h5c3/flex/","ide/vscode/","java/JDBC/","java/Spirng-事务/","java/java-io流-File类/","java/java-servlet/","java/java反射/","java/java多线程/","java/java异常处理/","java/java新特征/","java/java日期时间api小计/","java/java比较器/","java/java泛型/","java/java网络编程/","java/java集合-collection-map/","java/java面向对象编程（基础）/","java/java面向对象编程（进阶）/","java/java面向对象编程（高级）/","java/mybatis/","java/spring-Aop/","java/spring笔记/","js/js_advanced/","js/js_modules/","linux/archlinux/","js/web_api/","nodejs/express/","nodejs/mysql/","nodejs/node/","webpack/webpack基础/","vue/Vue-State_management/","vue/Vue3进阶/","vue/vue-router/","vue/vue3/","vue/vue核心基础/","vue/vue组件化编程/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};