<template>
	<div class="page4" v-bind:class="{'play':current === 4}">
		<div class="p4-bg-left"></div>
		<div class="p4-bg-right"></div>
		<div class="p4-bg-grid"></div>
		<div class="p4-desc">
			<div class="p4-desc-top"></div>
			<div class="p4-desc-bottom"></div>
			<div class="p4-desc-people-eara">
				<div class="p4-desc-people"></div>
				<div class="p4-desc-people-left"></div>
				<div class="p4-desc-people-right"></div>
			</div>
			<div class="p4-desc-title"></div>
			<div class="p4-desc-text1"></div>
			<div class="p4-desc-text2"></div>
			<!-- <div class="p4-light"></div> -->
			<div class="p4-line-left"></div>
			<div class="p4-line-right"></div>
			<div class="p4-time-base"></div>
			<div class="p4-time-point"></div>
			<div class="p4-time-line"></div>
			<div class="p4-1951"></div>
			<div class="p4-2016"></div>
			<div class="p4-1951-text"></div>c
			<div class="p4-2016-text"></div>
			<div class="p4-left-circle1 circle"></div>
			<div class="p4-left-circle2 circle"></div>
			<div class="p4-right-circle1 circle"></div>
			<div class="p4-right-circle2 circle"></div>
		</div>
		<div class="p4-mask"></div>
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
.p4-bg-left {
	background-image: url(../assets/images/p4_bg_left.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 171.5px;
	height: 274.5px;
	left: 0px;
	top: 127px;
}
.p4-bg-right {
	background-image: url(../assets/images/p4_bg_right.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 131px;
	height: 71.5px;
	right: 0px;
	top: 120px;
}
.p4-bg-grid {
	background-image: url(../assets/images/p4_bg_grid.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 375px;
	height: 395.5px;
	left: 0px;
	top: 0px;
}
.p4-desc {
	position: absolute;
	width: 372.5px;
	height: 625px;
	top: 8px;
	left: 50%;
	margin-left: -186.25px;
	/*background: rgba(0,8,22,0.4);*/
	z-index: 10;
}
.p4-desc .p4-desc-top {
	background-image: url(../assets/images/p4_top.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 360px;
	height: 89.5px;
	left: 50%;
	top: 0px;
	margin-left: -180px;
}
.p4-desc .p4-desc-bottom {
	background-image: url(../assets/images/p2_bottom.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 353px;
	height: 5px;
	left: 50%;
	bottom: 0px;
	margin-left: -176.5px;
}
.p4-desc .p4-desc-people-eara {
	position: absolute;
	top: 76px;
	left: 50%;
	width: 257px;
	height: 314.5px;
	margin-left: -128.5px;
}
.p4-desc .p4-desc-people {
	background-image: url(../assets/images/p4_people.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 210px;
	height: 315.4px;
	left: 50%;
	bottom: 0px;
	margin-left: -105px;
}
.p4-desc .p4-desc-people-left {
	background-image: url(../assets/images/p4_people_left.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 11.5px;
	height: 207px;
	left: 0;
	top: 46px;
}
.p4-desc .p4-desc-people-right {
	background-image: url(../assets/images/p4_people_right.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 11.5px;
	height: 207px;
	right: 0px;
	top: 46px;
}
.p4-desc .p4-desc-title {
	background-image: url(../assets/images/p4_title.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 185px;
	height: 25px;
	left: 50%;
	margin-left: -92.5px;
	top: 309px;
}
.p4-desc .p4-desc-text1 {
	background-image: url(../assets/images/p4_text1.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 319px;
	height: 11px;
	left: 50%;
	margin-left: -159px;
	top: 342px;
}
.p4-desc .p4-desc-text2 {
	background-image: url(../assets/images/p4_text2.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 141px;
	height: 30px;
	left: 50%;
	margin-left: -70.5px;
	top: 371px;
}
/* 四角圆圈 */
.p4-desc .circle {
  background-image: url(../assets/images/p1_circle.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
}
.p4-desc .p4-left-circle1 {
	left: 15px;
	top: 122px;
}
.p4-desc .p4-left-circle2 {
	left: 15px;
	top: 146px;
}
.p4-desc .p4-right-circle1 {
	right: 15px;
	top: 286px;
}
.p4-desc .p4-right-circle2 {
	right: 15px;
	top: 310px;
}
/* 时间轴 */
.p4-desc .p4-line-left {
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
.p4-desc .p4-line-right {
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
.p4-desc .p4-light {
	background: rgba(255,255,255,.5);
	box-shadow: 0px 0px 5px #FFFFFF;
	width: 1px;
	height: 480px;
	position: absolute;
	left: 230px;
	margin-top: 15px;
	z-index: 110;
	opacity: 0;
}
.p4-desc .p4-1951{
	background-image: url(../assets/images/p4_1951.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 56px;
	height: 17.5px;
	top: 456px;
	left: 24px;
}
.p4-desc .p4-2016 {
	background-image: url(../assets/images/p4_2016.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 58px;
	height: 17.5px;
	top: 456px;
	right: 20px;
}
.p4-desc .p4-time-base {
	background-image: url(../assets/images/p2_time_base.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 329.5px;
	height: 24px;
	top: 482.5px;
	right: 14px;
	left: 50%;
	margin-left: -163.75px;
}
.p4-desc .p4-time-point {
	background-image: url(../assets/images/p2_progress.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 31.5px;
	height: 14.4px;
	top: 488px;
	left: 324px;
}
.p4-desc .p4-time-line {
	background: #4F93FC;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 320px;
	height: 1px;
	top: 494.5px;
	left: 23px;
}
.p4-desc .p4-1951-text {
	background-image: url(../assets/images/p4_1951_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 139px;
	height: 29px;
	top: 514.5px;
	left: 24px;
}
.p4-mask {
	background-image: url(../assets/images/mask.png);
	background-size: 800px 603px;
	background-repeat: repeat-x;
	position: absolute;
	width: 100%;
	height: 100%;
	background-position: -425px;
}

.p4-desc .p4-2016-text {
	background-image: url(../assets/images/p4_2016_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 111px;
	height: 27px;
	top: 514.5px;
	right: 20px;
}

.play .p4-mask {
	-webkit-animation: show-mask 2s linear 2.3s forwards;
}
@keyframes show-mask {
	0% {
		background-position-x: -425px;
	}
	100% {
		background-position-x: 0px;
	}
}


/*拉开动画*/
.play .p4-desc .p4-desc-top {
	opacity: 0;
	-webkit-animation: show-top .5s linear .5s forwards;
}
@keyframes show-top {
	0% {
	  top: 280px;
	  opacity: 1;
	}
	100% {
	  top: 0px;
	  opacity: 1;
	}
}
.play .p4-desc .p4-desc-bottom {
	opacity: 0;
	-webkit-animation: showBottom .5s linear .5s forwards;
}
@keyframes showBottom {
	0% {
	  bottom: 280px;
	  opacity: 1;
	}
	100% {
	  bottom: 0px;
	  opacity: 1;
	}
}
.play .p4-bg-left {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p4-bg-right {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
.play .p4-bg-grid {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1s forwards;
}
/*其余组件出现*/
/* 出现其余的组件 */
.play .p4-desc .p4-time {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
.play .p4-desc .p4-line-left {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
.play .p4-desc .p4-line-right {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}

.play .p4-desc .p4-time-base {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
.play .p4-desc .p4-time-ponit {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
.play .p4-desc .p4-1951 {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
.play .p4-desc .p4-2016 {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
.play .p4-desc .p4-1951-text {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
.play .p4-desc .p4-2016-text {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.5s forwards;
}
/*四个圆角出现闪动*/
.play .p4-desc .circle {
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

@keyframes showIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
 /*时间轴滑动*/
/* .play .p4-desc .p4-light {
 	opacity: 0;
 	-webkit-animation: time-show 2s linear 2.3s forwards;
 }
 @keyframes time-show {
 	0% {
 		opacity: 1;
 		left: 18px;
 	}
 	100% {
 		left: 356px;
 		opacity: 0;
 	}
 }*/
 .play .p4-desc .p4-time-point {
 	opacity: 0;
 	-webkit-animation: point-show 2s linear 2.3s forwards;
 }
 @keyframes point-show {
 	0% {
 		opacity: 1;
 		left: 0px;
 	}
 	100% {
 		opacity: 1;
 		left: 324px;
 	}
 }
 .play .p4-desc .p4-time-line {
 	opacity: 0;
 	-webkit-animation: line-show 2s linear 2.3s forwards;
 }
 @keyframes line-show {
 	0% {
 		opacity: 1;
 		width: 0px;
 	}
 	100% {
 		opacity: 1;
 		width: 320px;
 	}
 }

 /*人转开出现*/
 .play .p4-desc .p4-desc-people-left {
	opacity: 0;
	-webkit-animation: people-left .5s linear 1.7s forwards;
 }
 @keyframes people-left {
   0% {
     left: 110px;
     opacity: 1;
   }
   100% {
     left: 0;
     opacity: 1;
   }
 }
 .play .p4-desc .p4-desc-people-right {
	opacity: 0;
	-webkit-animation: people-right .5s linear 1.7s forwards;
 }
 @keyframes people-right {
   0% {
     right: 110px;
     opacity: 1;
   }
   100% {
     right: 0;
     opacity: 1;
   }
 }
 .play .p4-desc .p4-desc-people {
	opacity: 0;
	-webkit-animation: showPeople .5s linear 1.8s forwards;
 }
 @keyframes showPeople {
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
 .play .p4-desc .p4-desc-title {
	opacity: 0;
	-webkit-animation: showPeople .5s linear 1.8s forwards;
 }
 .play .p4-desc .p4-desc-text1 {
	opacity: 0;
	-webkit-animation: showPeople .5s linear 1.8s forwards;
 }
 .play .p4-desc .p4-desc-text2 {
	opacity: 0;
	-webkit-animation: showPeople .5s linear 1.8s forwards;
 }
 /*next*/
 .page4.play .dir-next {
 	opacity: 0;
 	-webkit-animation: showIn .5s linear 4.7s forwards;
 }
 /* 网格抖动 */
 .play .p4-bg-grid {
 	opacity: 0;
 	-webkit-animation: shake-bg .1s linear 1.8s infinite alternate;
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
and (max-device-height: 736px)
 and (min-device-width: 414px){
	.p4-mask {
		background-size: 883.2px auto;
		background-position: -469.2px;
	}
	.play .p4-mask {
	-webkit-animation: show-mask1 2s linear 2.3s forwards;
}
@keyframes show-mask1 {
	0% {
		background-position-x: -469.2px;
	}
	100% {
		background-position-x: 0px;

	}
}
}

@media only screen
and (max-device-height: 667px) {
	.p4-desc {
		height: 615px;
	}
}
@media only screen
 and (max-device-width : 320px){
 .dir-next {
 	bottom: -5px;
 }
 .p4-desc {
 	top: 4px;
 	width: 320px;
 	height: 540px;
 	margin-left: -160px;
 }
 .p4-desc .p4-desc-top{
 	width: 308px;
 	margin-left: -154px;
 }
 .p4-desc .p4-desc-bottom{
 	width: 308px;
 	margin-left: -154px;
 }
 .p4-desc .p4-1951 {
 	top: 431px;
 }
 .p4-desc .p4-2016 {
 	top: 431px;
 }
 .p4-desc .p4-1951-text {
 	top: 486.5px;
 }
 .p4-desc .p4-2016-text {
 	top: 486.5px;
 }
 .p4-desc .p4-time-base{
 	width: 276px;
 	margin-left: -138px;
 	top: 456.5px;
 }
 .p4-desc .p4-time-point{
 	top: 463px;
 	left: 270px;
 }
 .p4-desc .p4-time-line {
 	width: 267px;
 	top: 470px;
 }
 .p4-desc .p4-up-text {
 	left: 13px;
 }
 .p4-desc .p4-up-people {
 	left: 129px;
 }
 .play .p4-desc .p4-time-point {
 	opacity: 0;
 	-webkit-animation: point-show1 1.7s linear 2.3s forwards;
 }
 @keyframes point-show1 {
 	0% {
 		opacity: 1;
 		left: 0px;
 	}
 	100% {
 		opacity: 1;
 		left: 270px;
 	}
 }
 .play .p4-desc .p4-time-line {
 	opacity: 0;
 	-webkit-animation: line-show1 1.7s linear 2.3s forwards;
 }
 @keyframes line-show1 {
 	0% {
 		opacity: 1;
 		width: 0px;
 	}
 	100% {
 		opacity: 1;
 		width: 267px;
 	}
 }
.p4-desc .p4-desc-people-eara {
	top: 46px;
	width: 240px;
	margin-left: -120px;
 }
 .p4-desc .p4-left-circle1 {
 	top: 94px;
 }
 .p4-desc .p4-left-circle2 {
 	top: 118px;
 }
 .p4-desc .p4-right-circle1 {
 	top: 258px;
 }
 .p4-desc .p4-right-circle2 {
 	top: 282px;
 }
}
</style>
