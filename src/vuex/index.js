import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
	state: {
		HEADER_TITLE:{
			title: ''
		},
		USER_INFO:{},
		SHOPP_CART:{}
	},
	mutations: {
		changeTitle( state, payload ){
			state.HEADER_TITLE.title = payload.title;
		},
		saveInfo( state, payload ){},
		saveCart( state, payload ){}
	}
} );