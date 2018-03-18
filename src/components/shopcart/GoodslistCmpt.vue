<template>
	<li>
		<div class="pubWrap">
			<span>满减</span>
			<a href="javascript:;">再购398.00元立享【满398.00元减50.00元】</a>
		</div>
		<div class="catShopCont">
			<i :class="{Selected:isSelected}" @click="changeSelected"></i>
			<div class="catShopInfo">
				<a href="javascript:;" class="catShopImgBox"><img src="../../../static/shopcart/goodsPic.jpg" alt=""></a>
				<div class="catInfo">
					<h4>53° 仙潭迎宾潭酒  酱香型白酒 500ml*6  白酒整箱</h4>
					<p>
						<span>￥199.00</span>
						<span>冰点价</span>
					</p>
					<div class="catCalItem">
						<span @click="decrease">-</span>
						<input type="text" name="" v-model="count">
						<span @click="increase">+</span>
					</div>
				</div>
			</div>
			<a href="javascript:;" class="cartRemove">| 删除</a>
		</div>
		<p class="catInfoTip">买2件，可获得赠品</p>
		<div class="cartGift">
			<div class="cartGiftImg"><img src="../../../static/shopcart/gift.jpg"></div>
		</div>
	</li>
</template>

<script>
export default {
	data: () => {
		return {
			isSelected: false,
			count: '1'
		}
	},
	methods: {
		changeSelected(){
			this.isSelected = !this.isSelected;
		},
		decrease(){
			if( this.count <= 1){
				this.count = 1;
			} else {
				this.count--;
			}
		},
		increase(){
			this.count++;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/yo/usage/core/reset.scss';
li{
	@include border( 0 0 1px 0, #666 );
	.pubWrap{
		@include flexbox();
		@include align-items();
		padding: .1rem .1rem 0 .4rem;
		span{
			font-size: .12rem;
			padding: 0 .03rem;
			color: #c58cff;
			@include border( 1px, #c58cff );
		}
		a{
			color: #feac37;
			font-size: .12rem;
			margin-left: .05rem;
			// @include flex();
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	.catShopCont{
		@include flexbox();
		padding: 0 .1rem;
		margin: .1rem 0;
		@include justify-content( space-between );
		@include align-items();
		i{
			width: .25rem;
			height: .25rem;
			background-image: url('../../assets/images/noselect.png');
			background-size: .16rem .16rem;
			background-position: center;
			background-repeat: no-repeat;
			margin-right: .08rem;
		}
		.Selected{
			background-image: url('../../assets/images/selected.png');
		}
		.catShopInfo{
			@include flexbox();
			.catShopImgBox{
				width: .83rem;
				height: .83rem;
				@include border( 1px, #666 );
				img{
					width: 100%;
					height: 100%;
				}
			}

		}
		.catInfo{
			width: 1.9rem;
			margin-left: .1rem;
			h4{
				font-size: .12rem;
				height: .36rem;
				line-height: .18rem;
				font-weight: 400;
			}
			p{
				span:first-child{
					font-size: .12rem;
					line-height: .18rem;
					color: #f00;
				}
				span:last-child{
					display: inline-block;
					padding: 0 .03rem;
					color: #fff;
					background-color: #ffa855;
					@include border-radius( 4px );
					font-size: .12rem;
				}
			}
			.catCalItem{
				@include flexbox();
				height: .22rem;
				width: .75rem;
				@include border-radius( 2px );
				border: 1px solid #999;
				span{
					width: .21rem;
					height: 100%;
					line-height: .22rem;
					text-align: center;
					&:first-child{
						@include border( 0 1px 0 0, #999 );
					}
					&:last-child{
						@include border( 0 0 0 1px, #999 );
					}
				}
				input{
					@include flex();
					text-align: center;
					border: none;
				}
			}
		}
	}
	.cartRemove{
		width: .45rem;
		text-align: right;
		@include align-self( flex-end );
		font-size: .12rem;
		color: #666;
	}
	.catInfoTip{
		padding: .05rem .1rem .05rem .38rem;
		color: #feac37;
		font-size: .12rem;
		line-height: .12rem;
	}
	.cartGift{
		@include flexbox();

	}
}

</style>