/*
* @Author: Zhang Guohua
* @Date:   2020-04-29 16:06:20
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-29 17:00:06
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import scrollLoad from './scroll-load'

scrollLoad.install = function (Vue) {
	Vue.component('scroll-load', scrollLoad)
	if (typeof window !== 'undefined' && window.Vue) {
     window.Vue.use(vshare);
  }
}

export default scrollLoad