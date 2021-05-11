/*
 * @Author: w
 * @Date: 2021-05-10 15:36:36
 * @LastEditors: w
 * @LastEditTime: 2021-05-11 09:46:47
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

registerMicroApps([
  {
    name: 'demo2', // app name registered
    entry: '//localhost:1002',
    container: '#subapp-container',
    activeRule: '/demo2',
  },
  {
    name: 'demo3', // app name registered
    entry: '//localhost:1003',
    container: '#subapp-container',
    activeRule: '/demo3',
  },
]);

start();