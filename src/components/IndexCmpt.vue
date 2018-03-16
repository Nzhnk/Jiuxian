<template>
	<div class="container">
		<router-view></router-view>
	</div>
</template>


<script>
import FooterCmpt from './layout/FooterCmpt.vue';

export default {
	components: {
		FooterCmpt
	}
};
</script>

<style lang="scss">
@import '../style/yo/usage/core/reset.scss';

.container{
	width: 100%;
	height: 100%;
	background-color: #fff;
	@include flexbox();
	@include flex-direction( column );
}
</style>