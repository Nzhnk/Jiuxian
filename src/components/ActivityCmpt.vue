<template>
	<div class="content">
		<header-cmpt></header-cmpt>
		<div class="activityContent"></div>
		<div class="activityFooter">
			<img src="../../static/activity/float.png">
		</div>
	</div>
</template>

<script>
	import HeaderCmpt from './layout/HeaderCmpt.vue';

	export default {
		components: {
			HeaderCmpt
		}
	}
</script>

<style lang="scss">
	@import '../style/yo/usage/core/reset.scss';

	.content {
		@include flexbox();
		@include flex-direction(column);
		width: 100%;
		height: 100%;
	}

	.activityContent {
		@include flexbox();
		@include flex();
		@include flex-direction(column);
	}

	.activityFooter {
		width: 100%;
		img {
			width: 100%;
		}
	}
</style>