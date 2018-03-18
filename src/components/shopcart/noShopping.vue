<template>
	<div class="shopBox">
		<div class="shopTip">
			<i></i>
			<p>自营商品实付满100元免运费，偏远地区满500免运费</p>
		</div>
		<div class="catKongBox">
			<img src="../../assets/images/kong.png" alt="">
			<p>购物车还是空的</p>
			<p><span>快去逛逛吧~</span></p>
			<a href="#/home">促销活动</a>
		</div>
	</div>
</template>
</script>
<style lang="scss">
@import '../../style/yo/usage/core/reset.scss';
.shopBox{
	@include flex();
	width: 100%;
	background-color: #f3f5f6;
	.shopTip{
		@include flexbox();
		padding: 0 0 0 .1rem;
		@include align-items();
		height: .22rem;
		@include border( 1px 0 1px 0, #ffe9c6 );
		background-color: #fff4e2;
		i{
			width: .12rem;
			height: .12rem;
			background-image: url(../../assets/images/carttip.png);
			background-size: .12rem .12rem;
			margin-right: .05rem;
		}
		p{
			font-size: .12rem;
			color: #f33;
		}
	}
	.catKongBox {
		@include flexbox();
		@include flex-direction( column );
		@include align-items();
		margin-top: 1rem;
		img{
			width: .64rem;
			height: .64rem;
			margin-bottom: .1rem;
		}
		p{
			line-height: .2rem;
			font-size: .12rem;
			color: #666;
			span{
				color: #999;
			}
		}
		a{
			margin-top: .2rem;
			height: .26rem;
			line-height: .26rem;
			background-color: #fff;
			padding: 0 .1rem;
			font-size: .12rem;
			color: #666;
			@include border-radius( 5px );
			border: 1px solid #ccc;
		}
	}
}
</style>