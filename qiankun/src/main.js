/*
 * @Author: w
 * @Date: 2021-05-10 15:36:36
 * @LastEditors: w
 * @LastEditTime: 2021-05-11 14:07:54
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerMicroApps, 
  start,
  setDefaultMountApp,
  initGlobalState
 } from 'qiankun';

let app = null;


// 主应用创建共享状态：
// const { onGlobalStateChange, setGlobalState } = initGlobalState({
//   user: 'qiankun'
// })

// onGlobalStateChange((value, prev) =>
//   console.log('[onGlobalStateChange - master]:', value, prev)
// )

function render({ appContent, loading } = {}) {
  if(!app){
    app = createApp(App).use(store).use(router).mount('#app')
  }
}

render()

// 主应用注册微应用并启动
registerMicroApps([
  {
    name: 'demo2', // 微应用名称，必须唯一性
    entry: '//localhost:1002',    // 微应用入口（暂时只是线下的，线上的估计不一样
    container: '#subapp-container', // 微应用的容器节点（选择器），或者是元素实例
    activeRule: '/demo2',           // 微应用的激活规则
  },
  {
    name: 'demo3', // app name registered
    entry: '//localhost:1003',
    container: '#subapp-container',
    activeRule: '/demo3',
  },
]);

// 主应用建立共享状态
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
  // 首次打开时显示骨架屏
  showSke: true,
});

onGlobalStateChange((value, prev) =>{
  // console.log('[onGlobalStateChange - master]:', value, prev)
  
})

setGlobalState({
  ignore: 'master',
  // user: {
  //   name: 'master'
  // }
  msg: '来自master动态设定的消息',
})

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/vue3')

start();