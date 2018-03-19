<template>
	<div class="registerBox">
		<div class="phoneNumber">
			<i></i>
			<input type="text" name="" placeholder="手机号" id="regPhoneNumber" v-model="regPhoneNumber">
		</div>
		<div class="identcode">
			<input type="text" name="" placeholder="请输入验证码" id="regIdentCode" v-model="regIdentCode">
			<img src="../../assets/images/captchaimg.jpg" title="验证码">
			<p>换一张</p>
		</div>
		<div class="checkcode">
			<input type="text" name="" placeholder="请输入校验码" id="regCheckCode" v-model="regCheckCode">
			<span>获取校验码</span>
		</div>
		<div class="passonce">
			<i></i>
			<input type="password" name="" placeholder="请输入密码" id="regPass" v-model="regPass">
		</div>
		<div class="passagain">
			<i></i>
			<input type="password" name="" placeholder="再次输入密码" id="regPassAgain" v-model="regPassAgain">
		</div>
		<div class="registerBtn" @click="doRegister">
			<span>确认注册</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data: () => {
		return {
			regPhoneNumber: '',
			regIdentCode: '',
			regCheckCode: '',
			regPass: '',
			regPassAgain: ''
		}
	},
	methods: {
		doRegister(){
			// 进行正则匹配
			/*if( this.regPhoneNumber.match( /^0?(13|14|15|17|18|19)[0-9]{9}$/g ) ){
				console.log(this.regPhoneNumber);
			} else {
				console.log(123);
			}*/
			axios( {
				url : '/api/users/signup',
				method : 'POST',
				data : {
					username: this.regPhoneNumber,
					password: this.regPass
				}
			} )
			.then( ( result ) => {
				console.log( JSON.parse(result.data) );
			})
		}
	}
};

</script>

<style lang="scss">
@import '../../style/yo/usage/core/reset.scss';
.registerBox{
	font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
	font-size: .14rem;
	.identcode, .phoneNumber, .checkcode, .passonce, .passagain{
		width: 100%;
		height: .42rem;
		@include flexbox();
		@include align-items();
		@include border-radius( 5px );
		border: 1px  solid #ccc;
		margin-top: .1rem;
		margin-bottom: .4rem;
		i{
			width: .4rem;
			height: .4rem;
			background: url('../../assets/images/user.png') no-repeat;
			background-position: center;
		}
		input{
			@include flex();
			border: none;
			height: 100%;
		}
	}
	.passonce i, .passagain i{
		background: url('../../assets/images/pass.png') no-repeat;
		background-position: center;
	}
	.phoneNumber i{
		background: url('../../assets/images/phone.png') no-repeat;
		background-position: center;
	}
	.identcode, .checkcode{
		border: none;
		input{
			text-indent: .1rem;
			width: 1.2rem;
			@include border-radius( 5px );
			border: 1px solid #ccc;
		}
		img{
			width: 1.1rem;
			height: .4rem;
			margin: 0 .1rem 0 .3rem;
		}
	}
	.checkcode{
		@include justify-content( space-between );
		margin-bottom: .4rem;
		input{
			@include flex( none );
			width: 1.45rem;
		}
		span{
			width: 1rem;
			height: .4rem;
			text-align: center;
			line-height: .4rem;
			background-color: #df3832;
			color: #fff;
			@include border-radius( 5px );
		}
	}
	.registerBtn{
		height: .34rem;
		@include flexbox();
		@include justify-content();
		span{
			width: 3rem;
			height: .34rem;
			line-height: .34rem;
			text-align: center;
			background-color: #DE4B45;
			@include border-radius( 5px );
			color: #fff;
		}
	}
}
</style>