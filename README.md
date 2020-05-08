# scroll-load

适用于首屏内容过多时，对首屏暂时不出现在用户视野中的模块，进行延迟加载，从而减少首次渲染的内容，提高复杂情况下首屏渲染的速度。减少用户等待，同时也能降低服务端接口压力。

## 版本介绍

项目版本：目前改项目为初步版本，在以遇到的首屏加载问题为目标，解决首屏渲染中，对一些不出现在首屏的内容延迟加载。后续可与骨架屏搭配使用，也会随问题的演变，不断的进行优化。

## how to use
安装：
```
npm install vue-scroll-render

yarn add vue-scroll-render
```

如何使用？
```js
// main.js 中引入
import scrollLoad from 'vue-scroll-render'
Vue.use(scrollLoad)
```
```html

<!-- 组件中使用 -->
<scroll-load>
  <!-- 需要延迟加载的模块 -->
  <lazy></lazy>
</scroll-load>
```


## 一些配置

- showBlock <Boolean>：支持用户自己配置何时进行**延迟模块加载**，传入该参数即可。此时不会再监听页面的滚动。适用于弹窗类的，与滚动无关，用户自行定义加载节点。
- bottom <Number>: 支持配置延迟模块距离可视窗口底部多少时，开始进行加载。默认为 100;

