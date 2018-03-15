import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeCmpt';
import Classify from '@/components/ClassifyCmpt';
import Shoppingcart from '@/components/ShoppingcartCmpt';
import Mine from '@/components/MineCmpt';
import Activity from '@/components/ActivityCmpt';

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
