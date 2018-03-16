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
	}
}
</script>

<style lang="scss">
@import '../style/yo/usage/core/reset.scss';
.loginWrap{
	@include flex();
	width: 100%;
	padding: .15rem .3rem 0;
}


</style>