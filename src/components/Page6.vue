<template>
	<div class="page6" v-bind:class="{'play':current === 6}">
		<div class="p6-bg-grid"></div>
		<div class="p6-desc">
			<div class="p6-desc-top"></div>
			<div class="p6-desc-bottom"></div>
			<div class="p6-desc-center">
				<div class="p6-desc-title"></div>
				<div class="p6-desc-title-left"></div>
				<div class="p6-desc-title-right"></div>
			</div>
			<div class="p6-desc-text"></div>
			<div class="p6-desc-bg-dress-circle1"></div>
			<div class="p6-desc-bg-dress-circle2"></div>
			<div class="p6-circle">
				<div class="p6-dw"></div>
				<div class="p6-circle1"></div>
				<div class="p6-circle1_1"></div>
				<div class="p6-circle2"></div>
				<div class="p6-circle2_1"></div>
				<div class="p6-circle3"></div>
				<div class="p6-circle3_1"></div>
				<div class="p6-circle4"></div>
				<div class="p6-circle4_1"></div>
				<div class="p6-circle5"></div>
				<div class="p6-circle5_1"></div>
				<div class="p6-circle6"></div>
				<div class="p6-circle6_1"></div>
			</div>
			<div class="p6-line">
				<div class="p6-line1"></div>
				<div class="p6-line2"></div>
				<div class="p6-line3"></div>
				<div class="p6-line4"></div>
				<div class="p6-line5"></div>
			</div>
			<div class="p6-line-left"></div>
			<div class="p6-line-right"></div>
<!-- 			<div class="p6-left-circle1 circle"></div>
			<div class="p6-left-circle2 circle"></div>
			<div class="p6-right-circle1 circle"></div>
			<div class="p6-right-circle2 circle"></div> -->
		</div>
		<div class="dir-next"></div>
	</div>
</template>

<script>
export default {
	props: {
		current: {
			type: Number
		}
	}
}
</script>

<style scoped>
.page6 {
	background-image: url(../assets/images/p7_bg.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
}
.p6-bg-grid {
	background-image: url(../assets/images/p4_bg_grid.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 375px;
	height: 395.5px;
	left: 0px;
	top: 0px;
}
.p6-desc {
	position: absolute;
	width: 372.5px;
	height: 516px;
	top: 8px;
	left: 50%;
	margin-left: -186.25px;
	background: rgba(0,8,22,0.4);
}
.p6-desc .p6-desc-top {
	background-image: url(../assets/images/p5_top.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 360px;
	height: 89.5px;
	left: 50%;
	top: 0px;
	margin-left: -180px;
}
.p6-desc .p6-desc-bottom {
	background-image: url(../assets/images/p6_bottom.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 355.5px;
	height: 9.5px;
	left: 50%;
	bottom: 0px;
	margin-left: -177.75px;
}
.p6-desc .p6-desc-center {
	position: absolute;
	top: 90px;
	left: 50%;
	width: 337px;
	height: 43.5px;
	margin-left: -168.5px;
}
.p6-desc .p6-desc-center .p6-desc-title {
	background-image: url(../assets/images/p6_title.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 242px;
	height: 43.5px;
	left: 50%;
	margin-left: -121px;
}
.p6-desc .p6-desc-bg-dress-circle1 {
	background-image: url(../assets/images/p6_dress_circle1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 134.5px;
	height: 140.5px;
	left: 0;
	top: 254px;
}
.p6-desc .p6-desc-bg-dress-circle2 {
	background-image: url(../assets/images/p6_dress_circle2.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 81px;
	height: 81px;
 	left: 271px;
	top: 362px;
}
.p6-desc .p6-desc-center .p6-desc-title-left {
	background-image: url(../assets/images/p6_title_left.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 6.5px;
	height: 43.5px;
	left: 0px;
}
.p6-desc .p6-desc-text {
	background-image: url(../assets/images/p6_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 63px;
	height: 14px;
	left: 25px;
	top: 179px;
}
.p6-desc .p6-dw {
	background-image: url(../assets/images/p6_dw.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 67.5px;
	height: 72px;
	left: 193px;
	top: 190px;
}
.p6-desc .p6-circle1 {
	background-image: url(../assets/images/p6_circle1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 81px;
	height: 81px;
	left: 24px;
	top: 286px;
}
.p6-desc .p6-circle1_1 {
	background-image: url(../assets/images/p6_circle1_1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 81px;
	height: 80px;
	left: 25px;
	top: 286px;
}
.p6-desc .p6-circle2 {
	background-image: url(../assets/images/p6_circle2.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 64px;
	height: 63.5px;
	left: 100px;
	top: 358.5px;
}
.p6-desc .p6-circle2_1 {
	background-image: url(../assets/images/p6_circle2_1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 67px;
	height: 66px;
	left: 98px;
	top: 357.5px;
}
.p6-desc .p6-circle3 {
	background-image: url(../assets/images/p6_circle3.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 84.5px;
	height: 84.5px;
	left: 139px;
	top: 219px;
}
.p6-desc .p6-circle3_1 {
	background-image: url(../assets/images/p6_circle3_1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 88.5px;
	height: 87px;
	left: 137px;
	top: 217px;
}
.p6-desc .p6-circle4 {
	background-image: url(../assets/images/p6_circle4.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 58px;
	height: 58px;
	left: 190px;
	top: 335px;
}
.p6-desc .p6-circle4_1 {
	background-image: url(../assets/images/p6_circle4_1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 64px;
	height: 63.5px;
	left: 186px;
	top: 333px;
}
.p6-desc .p6-circle5 {
	background-image: url(../assets/images/p6_circle5.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 84px;
	height: 84px;
	left: 255px;
	top: 250px;
}
.p6-desc .p6-circle5_1 {
	background-image: url(../assets/images/p6_circle5_1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 91px;
	height: 91.5px;
	left: 252px;
	top: 246px;
}
.p6-desc .p6-circle6 {
	background-image: url(../assets/images/p6_circle6.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 64px;
	height: 63.5px;
	left: 280px;
	top: 371px;
}
.p6-desc .p6-circle6_1 {
	background-image: url(../assets/images/p6_circle6_1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 67px;
	height: 66px;
	left: 279px;
	top: 369px;
}
.p6-desc .p6-line1 {
	background-image: url(../assets/images/p6_line1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 47.5px;
	height: 47px;
	left: 72px;
	top: 334px;
}
.p6-desc .p6-line2 {
	background-image: url(../assets/images/p6_line2.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 40px;
	height: 113.5px;
	left: 123px;
	top: 271px;
}
.p6-desc .p6-line3 {
	background-image: url(../assets/images/p6_line3.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 48.5px;
	height: 110.5px;
	left: 182px;
	top: 272px;
}
.p6-desc .p6-line4 {
	background-image: url(../assets/images/p6_line4.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 53.5px;
	height: 51.5px;
	left: 231px;
	top: 307px;
}
.p6-desc .p6-line5 {
	background-image: url(../assets/images/p6_line5.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 15.5px;
	height: 73px;
	left: 295px;
	top: 325px;
}
.p6-desc .p6-desc-center .p6-desc-title-right {
	background-image: url(../assets/images/p6_title_right.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 6.5px;
	height: 43.5px;
	right: 0px;
}
.p6-desc .p6-line-left {
	background-image: url(../assets/images/p2_light.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 1px;
	height: 276px;
	left: 5px;
	top: 50px;
	z-index: 10;
}
.p6-desc .p6-line-right {
	background-image: url(../assets/images/p2_light.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 1px;
	height: 276px;
	right: 6px;
	top: 50px;
	z-index: 10;
}
.p6-desc .circle {
  background-image: url(../assets/images/p1_circle.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
}
.p6-desc .p6-left-circle1 {
	left: 20px;
	top: 30px;
}
.p6-desc .p6-left-circle2 {
	left: 43px;
	top: 30px;
}
.p6-desc .p6-right-circle1 {
	right: 20px;
	top: 30px;
}
.p6-desc .p6-right-circle2 {
	right: 43px;
	top: 30px;
}

/* 动画 */
/* 上下拉开 */
.play .p6-desc-top {
	opacity: 0;
	-webkit-animation: show-top .5s linear .5s forwards;
}
 @keyframes show-top {
 	0% {
		opacity: 1;
		top: 200px;
 	}
 	100% {
		opacity: 1;
		top: 0px;
 	}
 }
.play .p6-desc-bottom {
	opacity: 0;
	-webkit-animation: show-bottom .5s linear .5s forwards;
}
@keyframes show-bottom {
 	0% {
		opacity: 1;
		bottom: 200px;
 	}
 	100% {
		opacity: 1;
		bottom: 0px;
 	}
 }
/* 背景展现 */
.play .p6-bg-grid{
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p6-desc-center {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p6-circle {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1.5s forwards;
}
.play .p6-desc-text {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p6-desc-bg-dress-circle1 {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p6-desc-bg-dress-circle2 {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p6-desc .p6-line-left {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p6-desc .p6-line-right {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
@keyframes showIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
/*圆圈转动*/
.play .p6-circle1_1 {
	opacity: 0;
	-webkit-animation: rotate-circle 3s linear 2.5s infinite;
}
.play .p6-circle2_1 {
	opacity: 0;
	-webkit-animation: rotate-circle 3s linear 2.5s infinite;
}
.play .p6-circle3_1 {
	opacity: 0;
	-webkit-animation: rotate-circle 3s linear 2.5s infinite;
}
.play .p6-circle4_1 {
	opacity: 0;
	-webkit-animation: rotate-circle 3s linear 2.5s infinite;
}
.play .p6-circle5_1 {
	opacity: 0;
	-webkit-animation: rotate-circle 3s linear 2.5s infinite;
}
.play .p6-circle6_1 {
	opacity: 0;
	-webkit-animation: rotate-circle 3s linear 2.5s infinite;
}
@keyframes rotate-circle {
	0% {
		opacity: 1;
		-webkit-transform: rotate(0deg);
	}
	100% {
		opacity: 1;
		-webkit-transform:  rotate(360deg);
	}
}

.play .p6-dw{
  opacity: 0;
  -webkit-animation: show-dw .5s linear 3.5s forwards;
}
@keyframes show-dw {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.play .p6-line1 {
	opacity: 0;
	-webkit-animation: show-line-1 .5s linear 2.5s forwards;
}
@keyframes show-line-1 {
	0% {
		opacity: 1;
		width: 0px;
		height: 0px;
	}
	100% {
		opacity: 1;
		width: 47.5px;
		height: 47px;
	}
}
.play .p6-line2 {
	opacity: 0;
	-webkit-animation: show-line-2 .5s linear 3s forwards;
}
@keyframes show-line-2 {
	0% {
		opacity: 1;
		width: 0px;
		height: 0px;
		top: 384.5px;
	}
	100% {
		opacity: 1;
		width: 40px;
		height: 114px;
		top: 271px;
	}
}
.play .p6-line3 {
	opacity: 0;
	-webkit-animation: show-line-3 .5s linear 3.5s forwards;
}
@keyframes show-line-3 {
	0% {
		opacity: 1;
		width: 0px;
		height: 0px;
	}
	100% {
		opacity: 1;
		width: 48.5px;
		height: 110.5px;
	}
}
.play .p6-line4 {
	opacity: 0;
	-webkit-animation: show-line-4 .5s linear 4s forwards;
}
@keyframes show-line-4 {
	0% {
		opacity: 1;
		width: 0px;
		height: 0px;
		top: 358.5px;
	}
	100% {
		opacity: 1;
		width: 53.5px;
		height: 51.5px;
		top: 307px;
	}
}
.play .p6-line5 {
	opacity: 0;
	-webkit-animation: show-line-5 .5s linear 4.5s forwards;
}
@keyframes show-line-5 {
	0% {
		opacity: 1;
		width: 0px;
		height: 0px;
	}
	100% {
		opacity: 1;
		width: 15.5px;
		height: 73px;
	}
}
/*四个圆角出现闪动*/
.play .p6-desc .circle {
	opacity: 0;
	-webkit-animation: small-circle-show .5s linear 1s forwards;
}
@keyframes small-circle-show {
	0% {
	   opacity: 0;
	}
	50% {
	   opacity: 1;
	}
	75% {
	   opacity: 0;
	}
	100% {
	   opacity: 1;
	}
}

.play .dir-next {
  opacity: 0;
  -webkit-animation: showIn .2s linear 3.5s forwards, shake-next 1s ease-in 4s infinite;
}
@keyframes showIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes shake-next  {
  0% {
    bottom: 18px;
  }
  50% {
    bottom: 24px;
  }
  100% {
    bottom: 30px;
  }
}
/* 网格抖动 */
.play .p6-bg-grid {
	opacity: 0;
	-webkit-animation: shake-bg .1s linear 1s infinite alternate;
}
@keyframes shake-bg {
	0% {
		top: 0px;
		opacity: 1;
		right: -1;
	}
	100% {
		top: 2px;
		opacity: 1;
		right: 1;
	}
}
 @media only screen
 and (max-device-width : 736px)
  and (min-device-width: 414px){
 	.p6-desc {
 		height: 620px;
 	}
   .p6-desc .p6-circle {
     position: relative;
 		top: 40px;
 	}
   .p6-desc .p6-line {
     position: relative;
 		top: 40px;
 	} .p6-desc .p6-desc-bg-dress-circle1 {
 		top: 294px;
 	} .p6-desc .p6-desc-bg-dress-circle2 {
 		top: 402px;
 	}
 }
@media only screen
 and (max-device-width : 350px){
 .dir-next {
 	bottom: -5px;
 }
 .p6-desc {
 	top: 4px;
 	width: 320px;
 	height: 430px;
 	margin-left: -160px;
 }
 .p6-desc .p6-desc-top{
 	width: 308px;
 	margin-left: -154px;
 }
 .p6-desc .p6-desc-bottom{
 	width: 308px;
 	margin-left: -154px;
 }
 .p6-desc .p6-desc-center {
 	width: 288px;
    margin-left: -144px
 }
.p6-desc .p6-circle {
	position: relative;
    left: -24px;
    top: -20px;
 }
 .p6-desc .p6-line {
 	position: relative;
 	left: -24px;
 	top: -20px;
 }
 .p6-desc .p6-desc-text {
 	top: 166px;
 }
 .play .dir-next {
	opacity: 0;
	-webkit-animation: show-in .2s linear 1.5s forwards, shake-next1 2s linear 1.7s infinite;
}
@keyframes show-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes shake-next1  {
  0% {
    bottom: -5px;
  }
  50% {
    bottom: -1px;
  }
  100% {
    bottom: -7px;
  }
}
}

</style>
