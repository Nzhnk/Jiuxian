<template>
	<div class="publicBanner">
		<a href="javascript:void(0);">
			<img :src="imgsrc">
		</a>
	</div>
</template>

<script>
	export default {
		props: ['imgsrc']
	}
</script>

<style lang="scss">
	@import '../../style/yo/usage/core/reset.scss';

	.publicBanner {
		@include flexbox();
		@include flex();
		width: 100%;
		background: #fff;
		a {
			display: block;
			width: 100%;
		}
		img {
			width: 100%;
		}
	}
</style>