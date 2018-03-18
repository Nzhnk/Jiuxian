<template>
	<div class="container">
		<header-cmpt></header-cmpt>
		<div class="loginWrap">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
import HeaderCmpt from './layout/HeaderCmpt.vue';

export default {
	components : {
		HeaderCmpt
	},
	beforeCreate(){
		this.$store.state.headerTitle.title = '用户登录';
	},
	create(){
		console.log(this.$store.state.title);
	}
}
</script>

<style lang="scss">
@import '../style/yo/usage/core/reset.scss';
body{
	font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
}
.loginWrap{
	@include flex();
	width: 100%;
	padding: .15rem .3rem 0;
	overflow-y: scroll;
}


</style>