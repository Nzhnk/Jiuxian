<template>
	<div class="towBox">
		<div class="towBox-top">
			<div>
				<a href="javascript:void(0);">
					<img :src="imgsrc1">
				</a>
			</div>
			<div style="border: 0;">
				<a href="javascript:void(0);">
					<img :src="imgsrc2">
				</a>
			</div>
		</div>
		<div class="towBox-bottom">
			<div>
				<a href="javascript:void(0);">
					<img :src="imgsrc3">
				</a>
			</div>
			<div>
				<a href="javascript:void(0);">
					<img :src="imgsrc4">
				</a>
			</div>
			<div style="border: 0;">
				<a href="javascript:void(0);">
					<img :src="imgsrc5">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['imgsrc1', 'imgsrc2', 'imgsrc3', 'imgsrc4', 'imgsrc5']
	}
</script>

<style lang="scss">
	@import '../../style/yo/usage/core/reset.scss';

	.towBox {
		@include flexbox();
		@include flex();
		@include flex-direction(column);
		width: 100%;
		background: #fff;
		border-bottom: 1px solid #f0f0f0;
		div {
			border-right: 1px solid #f0f0f0;
		}
		a {
			display: block;
			width: 100%;
		}
		img {
			width: 100%;
		}
	}

	.towBox-top {
		@include flexbox();
		@include flex();
		width: 100%;
	}

	.towBox-bottom {
		@include flexbox();
		@include flex();
		width: 100%;
	}
</style>