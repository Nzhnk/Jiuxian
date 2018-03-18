<template>
	<ul class="commonFooter" :isshow="true">
		<router-link tag="li" to="/home" active-class="active"><i></i></router-link>
		<router-link tag="li" to="/classify" active-class="active"><i></i></router-link>
		<router-link tag="li" to="/activity" active-class="active"><i></i></router-link>
		<router-link tag="li" to="/shoppingcart" active-class="active"><i></i></router-link>
		<router-link tag="li" to="/mine" active-class="active"><i></i></router-link>
	</ul>
</template>

<script>
</script>

<style lang="scss">
@import '../../style/yo/usage/core/reset.scss';

.commonFooter{
	height: .42rem;
	padding: 0 .165rem;
	background: #f1f1f1;
	@include border( 1px 0 0 0, #ccc );
	@include flexbox();
	@include align-items( center );
	text-align: center;
	li{
		@include flexbox();
		@include justify-content();
		width: 20%;
		height: .42rem;
		line-height: .42rem;
		i{
			width: .42rem;
			height: .42rem;
			background: url('../../assets/images/homeAct.png') no-repeat;
			background-size: .42rem .348rem;
			background-position: center top;
		}
		&:nth-child(2) i{
			background: url('../../assets/images/class.png') no-repeat;
			background-size: .42rem .348rem;
			background-position: center top;
		}
		&:nth-child(3) i{
			background: url('../../assets/images/active.png') no-repeat;
			background-size: .42rem .42rem;
			background-position: center top;
		}
		&:nth-child(4) i{
			background: url('../../assets/images/shopcart.png') no-repeat;
			background-size: .42rem .348rem;
			background-position: center top;
		}
		&:last-child i{
			background: url('../../assets/images/mine.png') no-repeat;
			background-size: .42rem .348rem;
			background-position: center top;
		}
	}
	.active{
		color: #f00;
	}
}

</style>