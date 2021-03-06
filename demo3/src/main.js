/*
 * @Author: w
 * @Date: 2021-05-10 15:58:27
 * @LastEditors: w
 * @LastEditTime: 2021-05-11 10:37:17
 */
import "./public-path";
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

let routerInstance = null;
let instance = null;

function render(props = {}){
  const { container } = props;
  //  不这样写会报错
  instance = createApp(App).use(store).use(router).mount(container ? container.querySelector('#app') : '#app')
  // instance = createApp(App).use(store).use(router).mount('#app')
}


// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
 export async function bootstrap () {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}

export const mount = async props => {
  console.log('[vue] props from main framework', props)
  // storeTest(props)
  render(props)
  // instance.config.globalProperties.$onGlobalStateChange =
  //   props.onGlobalStateChange
  // instance.config.globalProperties.$setGlobalState = props.setGlobalState
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
 export async function unmount () {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  routerInstance = null
}


/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
 export async function update (props) {
  console.log('update props', props)
}


