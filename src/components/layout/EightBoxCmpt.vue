<template>
	<div class="eightBox">
		<div>
			<a href="javascript:void(0);">
				<img :src="imgsrc1">
			</a>
		</div>
		<div>
			<a href="javascript:void(0);">
				<img :src="imgsrc2">
			</a>
		</div>
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
		<div>
			<a href="javascript:void(0);">
				<img :src="imgsrc5">
			</a>
		</div>
		<div>
			<a href="javascript:void(0);">
				<img :src="imgsrc6">
			</a>
		</div>
		<div>
			<a href="javascript:void(0);">
				<img :src="imgsrc7">
			</a>
		</div>
		<div>
			<a href="javascript:void(0);">
				<img :src="imgsrc8">
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['imgsrc1', 'imgsrc2', 'imgsrc3', 'imgsrc4', 'imgsrc5', 'imgsrc6', 'imgsrc7', 'imgsrc8']
	}
</script>

<style lang="scss">
	@import '../../style/yo/usage/core/reset.scss';

	.eightBox {
		@include flexbox();
		@include flex();
		@include flex-wrap(wrap);
		@include justify-content(space-between);
		@include align-content(flex-start);
		width: 100%;
		background: #fff;
		border-bottom: 1px solid #f0f0f0;
		div {
			width: 50%;
			border-bottom: 1px solid #f0f0f0;
		}
		div:nth-child(odd) {
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
</style>