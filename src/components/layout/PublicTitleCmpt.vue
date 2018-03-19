<template>
	<div class="publicTitle">
		<a href="javascript:void(0);">
			<img :src="data">
		</a>
	</div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>

<style lang="scss">
	@import '../../style/yo/usage/core/reset.scss';

	.publicTitle {
		@include flexbox();
		@include flex();
		height: auto;
		min-height: 0.32rem;
		max-height: 0.64rem;
		font-size: 0;
		text-align: center;
		border-bottom: 1px solid #f1f1f1;
		background: #fff;
		width: 100%;
		img {
			height: auto;
			width: 100%;
		}
	}
</style>