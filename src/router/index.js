import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeCmpt.vue';
import Classify from '@/components/ClassifyCmpt.vue';
import Shoppingcart from '@/components/ShoppingcartCmpt.vue';
import Mine from '@/components/MineCmpt.vue';
import Activity from '@/components/ActivityCmpt.vue';
import FooterCmpt from '@/components/layout/FooterCmpt.vue';
import Login from '@/components/login/LoginCmpt.vue';
import Register from '@/components/login/RegisterCmpt.vue';
import Getpassword from '@/components/login/GetpasswordCmpt.vue';
import Center from '@/components/login/CenterCmpt.vue';

Vue.use(Router);

export default new Router( {
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
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
			redirect: '/mine/center',
			component: Mine,
			children: [
				{
					path: 'center',
					name: 'center',
					component: Center
				},
				{
					path: 'login',
					name: 'login',
					component: Login
				},
				{
					path: 'register',
					name: 'register',
					component: Register
				},
				{
					path: 'getpassword',
					name: 'getpassword',
					component: Getpassword
				}
			]
		},
		{
			path: '/activity',
			name: 'activity',
			component: Activity
		}
	]
} );
