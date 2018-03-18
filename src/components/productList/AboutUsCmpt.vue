<template>
	<div class="aboutUs">
		<p>北京酒仙网络科技有限公司版权所有</p>
		<p>北京市北京经济技术开发区经海五路58号院8幢4层</p>
		<p><span>400-617-9999</span></p>
		<p><a href="javascript:void(0);">关于我们</a></p>
	</div>
</template>

<script>

</script>

<style lang="scss">
	@import '../../style/yo/usage/core/reset.scss';

	.aboutUs {
		@include flex();
		@include flex-direction(column);
		width: 100%;
		height: 100px;
		text-align: center;
		line-height: 20px;
		color: #999;
		font-size: 12px;
		padding: 10px 0 5px;
		background: #f2f5f6;
	}
</style>