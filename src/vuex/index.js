import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

// 头部标题模块
const headerTitle = {
	state: {
		title: '',
		path: ''
	},
	mutations: {
		changeTitle ( state ) {
			state.title = '选 酒';
		}
	}
};


export default new Vuex.Store( {
	modules: {
		headerTitle
	}
} );