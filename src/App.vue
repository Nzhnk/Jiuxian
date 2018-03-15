<template lang="html">
	<div class="container">
		<div class="content">
			<router-view></router-view>
		</div>
		<footer-cmpt></footer-cmpt>
	</div>
</template>

<script>
import FooterCmpt from './components/layout/FooterCmpt.vue';

export default {
	components : {
		FooterCmpt
	}
}
</script>

<style lang="scss">
@import "./style/yo/usage/core/reset.scss";
.container{
	background: #fff;
	@include flexbox();
	@include flex-direction( column );
	height: 100%;
	header{
		height: 0.39rem;
		line-height: 0.39rem;
		background: #f00;
		text-align: center;
	}
	.content{
		@include flex();
		width: 100%;
	}
}
</style>