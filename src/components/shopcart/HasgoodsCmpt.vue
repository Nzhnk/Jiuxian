<template>
	<div class="cartWarp">
		<div class="cartContainer">
			<div class="cartBox">
				<div class="pucTitle">
					<i :class="{AllSelect:isAllSelect}" @click="changeSelect"></i>
					<span><img src="../../../static/shopcart/shoplogo.png" alt=""></span>
					<p>潭酒官方旗舰店</p>
				</div>
				<ul class="catShopList">
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
				</ul>
			</div>

			<div class="cartBox">
				<div class="pucTitle">
					<i></i>
					<span><img src="../../../static/shopcart/shoplogo.png" alt=""></span>
					<p>潭酒官方旗舰店</p>
				</div>
				<ul class="catShopList">
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
					<goodslist-cmpt></goodslist-cmpt>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import GoodslistCmpt from './GoodslistCmpt.vue';
export default {
	data: () => {
		return {
			isAllSelect: false
		}
	},
	components: {
		GoodslistCmpt
	},
	methods: {
		changeSelect(){
			this.isAllSelect = !this.isAllSelect;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../style/yo/usage/core/reset.scss';
.cartWarp{
	font-family: '华文细黑';
	margin-top: .08rem;
	@include border( 1px 0 0 0, #666 );
	@include flex();
	width: 100%;
	overflow-y: scroll;
	.cartBox{
		@include flex();
		width: 100%;
		margin-bottom: .1rem;
		.pucTitle{
			height: .45rem;
			@include flexbox();
			background-color: #fff;
			padding: 0 .1rem;
			@include align-items();
			@include border( 0 0 1px 0, #666 );
			i{
				width: .25rem;
				height: .25rem;
				background-image: url('../../assets/images/noselect.png');
				background-size: .16rem .16rem;
				background-position: center;
				background-repeat: no-repeat;
			}
			.AllSelect{
				background-image: url('../../assets/images/selected.png');
			}
			span{
				width: .15rem;
				height: .15rem;
				margin: 0 .08rem;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			p{
				font-size: .12rem;
				color: #252525;
				letter-spacing: .02rem;
			}
		}
		.catShopList{
			background-color: #fff;
		}
	}
}
</style>