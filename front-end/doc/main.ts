import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.performance = process.env.NODE_ENV === 'development';

new Vue({
	render(h){
		return h(App);
	},
}).$mount('#app');