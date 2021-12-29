/* echarts组件 */
import easyEcharts from './src/easyEcharts.vue'
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('easy-echarts', easyEcharts)
}
//这样就可以使用Vue.use进行全局安装了。
easyEcharts.install = function(Vue){
  Vue.component(easyEcharts.name, easyEcharts)
}

/* 其他组件 */


/* 暴露 */
export {
    easyEcharts
}