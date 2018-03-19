<template>
	<div class="wrap">
		<header-cmpt></header-cmpt>
		<noshopping-cmpt v-if="!nohas"></noshopping-cmpt>
		<hasgoods-cmpt v-else></hasgoods-cmpt>
		<div class="cartPay" v-if="nohas">
			<div class="cartPayBox">
				<span class="cartSelectAll">
					<i class="selectAll" :class="{AllChoose:isAllChoose}" @click="allChoose"></i>
					<label for="selectAll">
						<b>全选</b>
					</label>
				</span>
				<div class="cartPayInfo">
					<span><em>合计：</em><b>￥0.00</b></span>
					<span><em>优惠：</em><b>￥0.00</b></span>
				</div>
			</div>
			<p class="PayBtn">去结算(0)</p>
		</div>
	</div>
</template>

<script>
import HeaderCmpt from './layout/HeaderCmpt.vue';
import NoshoppingCmpt from './shopcart/noShopping.vue';
import HasgoodsCmpt from './shopcart/HasgoodsCmpt.vue';
export default {
	data: () => {
		return {
			nohas: true,
			isAllChoose: false
		}
	},
	components: {
		HeaderCmpt,
		NoshoppingCmpt,
		HasgoodsCmpt
	},
	methods: {
		allChoose(){
			this.isAllChoose = !this.isAllChoose;
		}
	}
}
</script>

<style lang="scss">
@import '../style/yo/usage/core/reset.scss';
.wrap{
	height: 100%;
	@include flexbox();
	@include flex-direction( column );
	background-color: #f3f5f6;
	.wrap header .headerTop{
		background-color: #fafafa;
	}
	header .headerTop{
		background-color: #fff;
	}
	header .goBack{
		background-image: url('../assets/images/gobackBlack.png');
		background-size: .1rem .2rem;
		background-repeat: no-repeat;
		background-position: center;
	}
	header .headerMenu{
		background-image: url('../assets/images/menuBlack.png');
	}
	.cartPay{
		height: .5rem;
		@include border( 1px 0 0 0, #666 );
		background-color: #fff;
		@include flexbox();
		padding: 0 0 0 .1rem;
		@include justify-content( space-between );
		.cartPayBox{
			@include flexbox();
			.cartSelectAll{
				@include flexbox();
				@include align-items();
				.selectAll{
					width: .25rem;
					height: .25rem;
					background-image: url('../assets/images/noselect.png');
					background-size: .16rem .16rem;
					background-position: center;
					background-repeat: no-repeat;
					margin-right: .08rem;
				}
				.AllChoose{
					background-image: url('../assets/images/selected.png');
				}
				b{
					font-size: .12rem;
					color: #666;
				}
			}
			.cartPayInfo{
				@include align-self( flex-start );
				@include flexbox();
				@include flex-direction( column );
				margin-left: .03rem;
				span{
					display: block;
					height: .14rem;
					em,b{
						display: inline-block;
						width: .5rem;
						font-style: normal;
						font-size: .14rem;
						font-weight: 400;
						line-height: .14rem;
					}
					b{
						color: #f33;
					}
					&:first-child{
						margin-top: .05rem;
						em{
							font-size: .14rem;
							color: #252525;
						}
					}
					&:last-child{
						em{
							font-size: .12rem;
							color: #999;
							line-height: .12rem;
						}
						b{
							font-size: .12rem;
							color: #666;
						}
					}
				}
			}
		}
		.PayBtn{
			width: .98rem;
			height: 100%;
			@include flexbox();
			@include justify-content();
			@include align-items();
			color: #fff;
			background-color: #d9d9d9;
		}
	}
}
</style>