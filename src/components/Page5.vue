<template>
	<div class="page5" v-bind:class="{'play':current === 5}">
		<div class="p5-bg-grid"></div>
		<div class="p5-desc">
			<div class="p5-desc-top"></div>
			<div class="p5-desc-bottom"></div>
			<div class="p5-desc-center">
				<div class="p5-3d p5-desc-center-penguin"></div>
				<div class="p5-3d p5-desc-center-penguin-light"></div>
				<div class="p5-3d p5-desc-center-penguin-bottom"></div>
				<div class="p5-3d p5-desc-center-penguin-left"></div>
				<div class="p5-3d p5-desc-center-penguin-right"></div>
			</div>
			<div class="p5-desc-title"></div>
			<div class="p5-line-left"></div>
			<div class="p5-line-right"></div>
			<div class="p5-left-circle1 circle"></div>
			<div class="p5-left-circle2 circle"></div>
			<div class="p5-right-circle1 circle"></div>
			<div class="p5-right-circle2 circle"></div>
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
.page5 {
	background-image: url(../assets/images/p7_bg.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
}
.p5-bg-grid {
	background-image: url(../assets/images/p4_bg_grid.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 375px;
	height: 395.5px;
	left: 0px;
	top: 0px;
}
.p5-desc {
	position: absolute;
	width: 372.5px;
	height: 450px;
	top: 8px;
	left: 50%;
	margin-left: -186.25px;
	background: rgba(0,8,22,0.4);
}
.p5-desc .p5-desc-top {
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
.p5-desc .p5-desc-bottom {
	background-image: url(../assets/images/p5_bottom.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 353px;
	height: 2.5px;
	left: 50%;
	bottom: 0px;
	margin-left: -176.5px;
}
.p5-desc .p5-desc-center {
	position: absolute;
	top: 115px;
	left: 50%;
	width: 257px;
	height: 314.5px;
	margin-left: -128.5px;
	-webkit-transform: translateZ(1000px);
}
.p5-desc .p5-3d{
	-webkit-backface-visibility:hidden;
	-webkit-transform-style: preserve-3d;
	-webkit-perspective: 1000px;
}
.p5-desc .p5-desc-center-penguin {
	background-image: url(../assets/images/p5_qq.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 120.5px;
	height: 131px;
	left: 50%;
	top: 37px;
	margin-left: -60.25px;
	/*z-index: 100;*/
}
.p5-desc .p5-desc-center-penguin-light {
	background-image: url(../assets/images/p5_qq_light.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 175.5px;
	height: 78.5px;
	left: 50%;
	top: -7px;
	margin-left: -85.25px;
	z-index: 10000;
}
.p5-desc .p5-desc-center-penguin-bottom {
	background-image: url(../assets/images/p5_qq_bottom.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 160.5px;
	height: 43px;
	left: 50%;
	top: 147px;
	margin-left: -80.25px;
}
.p5-desc .p5-desc-center-penguin-left {
	background-image: url(../assets/images/p4_people_left.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 11.5px;
	height: 207px;
	left: 0px;
	top: 6px;
}
.p5-desc .p5-desc-center-penguin-right {
	background-image: url(../assets/images/p4_people_right.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 11.5px;
	height: 207px;
	right: 0px;
	top: 6px;
}
.p5-desc .p5-desc-title {
	background-image: url(../assets/images/p5_title.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 177px;
	height: 68px;
	left: 50%;
	top: 454px;
	margin-left: -88.5px;
}
.p5-desc .p5-line-left {
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
.p5-desc .p5-line-right {
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
.p5-desc .circle {
  background-image: url(../assets/images/p1_circle.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
}
.p5-desc .p5-left-circle1 {
	left: 15px;
	top: 122px;
}
.p5-desc .p5-left-circle2 {
	left: 15px;
	top: 146px;
}
.p5-desc .p5-right-circle1 {
	right: 15px;
	top: 286px;
}
.p5-desc .p5-right-circle2 {
	right: 15px;
	top: 310px;
}
/*上下拉开*/
.play .p5-desc-top {
	opacity: 0;
	-webkit-animation: show-top .5s linear .5s forwards;
}
@keyframes show-top {
	0% {
	  top: 160px;
	  opacity: 1;
	}
	100% {
	  top: 0px;
	  opacity: 1;
	}
}
.play .p5-desc-bottom {
	opacity: 0;
	-webkit-animation: show-bottom .5s linear .5s forwards;
}
@keyframes show-bottom {
	0% {
	  bottom: 160px;
	  opacity: 1;
	}
	100% {
	  bottom: 0px;
	  opacity: 1;
	}
}
.play .p5-bg-grid {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p5-desc-title {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p5-desc .p5-line-left {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p5-desc .p5-line-right {
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
.play .p5-desc-center-penguin-left {
	opacity: 0;
	-webkit-animation: penguin-left .5s linear 1.5s forwards;
}
@keyframes penguin-left {
   	0% {
     	left: 110px;
     	opacity: 1;
   	}
   	100% {
     	left: 0;
     	opacity: 1;
   	}
}
.play .p5-desc-center-penguin-right {
	opacity: 0;
	-webkit-animation: penguin-right .5s linear 1.5s forwards;
}
 @keyframes penguin-right {
    0% {
     	right: 110px;
     	opacity: 1;
   	}
   	100% {
     	right: 0;
     	opacity: 1;
   	}
 }
.play .p5-desc-center-penguin {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1.2s forwards , penguin-rotate 5s linear 1.5s infinite alternate;
}
.play .p5-desc-center-penguin-light {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1.2s forwards, penguin-light 5s linear 1.5s infinite;
}
.play .p5-desc-center-penguin-bottom {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1.2s forwards;
}
/*四个圆角出现闪动*/
.play .p5-desc .circle {
	opacity: 0;
	-webkit-animation: circle-show .5s linear 1.5s forwards;
}
@keyframes circle-show {
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

@keyframes penguin-rotate {
	0% {
		
		-webkit-transform: rotateY(0deg);
	}
	33% {

		-webkit-transform: rotateY(-30deg);
	}
	66% {

		-webkit-transform: rotateY(0deg);
	}
	100% {

		-webkit-transform: rotateY(30deg);
	}
}

@keyframes penguin-light {
	0% {
		opacity: 0;
	}
	3% {
		opacity: 1;
	}
	33% {
		opacity: 0;
	}
	66% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
.play .dir-next {
	opacity: 0;
	-webkit-animation: showIn .5s linear 2s forwards;
}
/* 网格抖动 */
.play .p5-bg-grid {
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
 and (max-device-width : 667px ) {
 	.p5-desc {
 		height: 488px;
 	}
 	.p5-desc .p5-desc-title {
		top: 454px;
 }
}
@media only screen
 and (max-device-width : 320px){
 .dir-next {
 	bottom: -5px;
 }
 .p5-desc {
 	top: 4px;
 	width: 320px;
 	height: 450px;
 	margin-left: -160px;
 }
 .p5-desc .p5-desc-top{
 	width: 308px;
 	margin-left: -154px;
 }
 .p5-desc .p5-desc-bottom{
 	width: 308px;
 	margin-left: -154px;
 }
 .p5-desc .p5-desc-center {
	top: 90px;
	width: 240px;
	margin-left: -120px;
 }
 .p5-desc .p5-left-circle1 {
 	top: 94px;
 }
 .p5-desc .p5-left-circle2 {
 	top: 118px;
 }
 .p5-desc .p5-right-circle1 {
 	top: 258px;
 }
 .p5-desc .p5-right-circle2 {
 	top: 282px;
 }
 .p5-desc .p5-desc-title{
 	top: 414px;
 }
/* 	.p5-desc .p5-desc-title {
		top: 500px;
 }*/
 }


</style>