import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeCmpt.vue';
import Classify from '@/components/ClassifyCmpt.vue';
import Shoppingcart from '@/components/ShoppingcartCmpt.vue';
import Mine from '@/components/MineCmpt.vue';
import Activity from '@/components/ActivityCmpt.vue';
import FooterCmpt from '@/components/layout/FooterCmpt.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/classify',
			name: 'classify',
			component: Classify
		},
		{
			path: '/shoppingcart',
			name: 'shoppingcart',
			component: Shoppingcart
		},
		{
			path: '/mine',
			name: 'mine',
			component: Mine
		},
		{
			path: '/activity',
			name: 'activity',
			component: Activity
		}
	]
})
