<template>
	<div class="page2" v-bind:class="{'play':current===2}">
		<div class="p2-bg-left"></div>
		<div class="p2-bg-right"></div>
		<div class="p2-bg-right"></div>
		<div class="p2-bg-left-grid"></div>
		<div class="p2-bg-right-grid"></div>
		<div class="p2-desc">
			<div class="p2-top"></div>
			<div class="p2-bottom"></div>
			<ul class="p2-time" id="p2-time">
				<li v-for="item of items">
					<span :style="{opacity: 1 - $index/10}">{{item}}</span>
				</li>
			</ul>
			<div class="p2-light"></div>
			<div class="p2-line-left"></div>
			<div class="p2-line-right"></div>
			<div class="p2-time-base"></div>
			<div class="p2-time-point"></div>
			<div class="p2-time-line"></div>
			<div class="p2-1935"></div>
			<div class="p2-2016"></div>
			<div class="p2-1935-text"></div>
			<div class="p2-2016-text"></div>
			<div class="p2-left-circle1 circle"></div>
			<div class="p2-left-circle2 circle"></div>
			<div class="p2-right-circle1 circle"></div>
			<div class="p2-right-circle2 circle"></div>
			<div class="p2-up-text"></div>
			<div class="p2-up-people"></div>
		</div>
		<div class="dir-next"></div>
<!--     <div class="p2-bg"></div>
  	<div class="p2-text">
		  <div class="p2-text-inner"></div>
		</div>
		<div class="p2-people-area">
		  <div class="p2-people-body"></div>
		  <div class="p2-people-foot1"></div>
		  <div class="p2-people-foot2"></div>
		  <div class="p2-people-hand1"></div>
		</div> -->

  </div>
</template>

<script>
export default {
	props: {
		current: {
			type: Number
		}
	},
	data () {
		return {
		 isanimation: false,
		 items: [
		 		1935,
	 			1938,	
				1960,	
				1965,	
				1987,	
				2016,	
		 	]
		}
	},
	methods: {
		test () {
			this.isanimation = true;
			console.log('d');
		},
		changeDate () {
			setInterval(() => {
				var first = this.items[0];
				this.items.splice(0,1);
				this.items.push(first);
			},1000);
		}

	},
	ready () {
		this.changeDate();
		console.log(this.current);
		var self = this;
		// setTimeout(function(){
		//   self.$dispatch('preventSwipe');
		// },4000);
	}
}
</script>

<style scoped>
.p2-bg-left {
	background-image: url(../assets/images/p2_bg_left.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 176px;
	height: 399px;
	left: 0px;
	top: 107px;
}
.p2-bg-right{
	background-image: url(../assets/images/p2_bg_right.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 153.5px;
	height: 367px;
	right: 0px;
	top: 99px;
}
.p2-bg-left-grid {
	background-image: url(../assets/images/p2_bg_left_grid.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 161.5px;
	height: 326px;
	left: 0px;
	top: 118px;
}
.p2-bg-right-grid {
	background-image: url(../assets/images/p2_bg_right_grid.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 194.5px;
	height: 400px;
	right: 0px;
	top: 82px;
}
.p2-desc {
	position: absolute;
	width: 372.5px;
	height: 630px;
	top: 8px;
	left: 50%;
	margin-left: -186.25px;
	background: rgba(0,8,22,0.4);
}
.p2-desc .p2-top {
	background-image: url(../assets/images/p2_top.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 372.5px;
	height: 89.5px;
	left: 50%;
	top: 0px;
	margin-left: -186.25px;
}
.p2-desc .p2-bottom {
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
.p2-desc .p2-line-left {
	background-image: url(../assets/images/p2_light.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 1px;
	height: 276px;
	left: 8px;
	top: 50px;
	z-index: 10;
}
.p2-desc .p2-line-right {
	background-image: url(../assets/images/p2_light.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 1px;
	height: 276px;
	right: 8px;
	top: 50px;
	z-index: 10;
}
.p2-desc .p2-light {
	background: rgba(255,255,255,.5);
	box-shadow: 0px 0px 5px #FFFFFF;
	width: 1px;
	height: 480px;
	position: absolute;
	left: 356px;
	margin-top: 15px;
	z-index: 110;
}
.p2-desc .p2-time{
	position: absolute;
	top: 18px;
	left: 10px;
	width: 25px;
	height: 74px;
	line-height: 10px;
}
.p2-desc .p2-time span{
	color: #468FB8;
	/*color: #fff;*/
	/*-webkit-text-size-adjust:none;*/
	font-size: 10px;
	/*text-shadow:0 0 5px #468FB8;*/
	font-weight: 700;
}

.p2-desc .p2-1935{
	background-image: url(../assets/images/p2_1935.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 56px;
	height: 17.5px;
	top: 456px;
	left: 24px;
}
.p2-desc .p2-2016 {
	background-image: url(../assets/images/p2_2016.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 58px;
	height: 17.5px;
	top: 456px;
	right: 20px;
}
.p2-desc .p2-time-base {
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
.p2-desc .p2-time-point {
	background-image: url(../assets/images/p2_progress.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 31.5px;
	height: 14.4px;
	top: 488px;
	left: 324px;
}
.p2-desc .p2-time-line {
	background: #4F93FC;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 320px;
	height: 1px;
	top: 494.5px;
	left: 23px;
}
.p2-desc .p2-1935-text {
	background-image: url(../assets/images/p2_1935_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 130.5px;
	height: 29px;
	top: 514.5px;
	left: 24px;
}
.p2-desc .p2-2016-text {
	background-image: url(../assets/images/p2_2016_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 86px;
	height: 27px;
	top: 514.5px;
	right: 20px;
}
.p2-desc .circle {
  background-image: url(../assets/images/p1_circle.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
}
.p2-desc .p2-left-circle1 {
	left: 8px;
	top: 89.5px;
}
.p2-desc .p2-left-circle2 {
	left: 8px;
	top: 112.5px;
}
.p2-desc .p2-right-circle1 {
	right: 8px;
	top: 357px;
}
.p2-desc .p2-right-circle2 {
	right: 8px;
	top: 380px;
}
/*.p2-desc .dir-next {
	background-image: url(../assets/images/p1_next.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	left: 50%;
	top: 572px;
	width: 70.5px;
	height: 68px;
	margin-left: -35.25px;
	z-index: 100;
}*/

.p2-desc .p2-up-text {
	background-image: url(../assets/images/p2_up_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	left: 94px;
	top: 82px;
	width: 230.5px;
	height: 300.5px;
	z-index: 50;
}
.p2-desc .p2-up-people {
	background-image: url(../assets/images/p2_people.png);
	background-size: 1295px 363px;
	background-repeat: no-repeat;
	position: absolute;
	left: 140px;
	top: 57px;
	width: 185px;
	height: 363px;
	margin-left: -35.25px;
	z-index: 100;
}

/*拉开*/
.play .p2-desc .p2-top {
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
.play .p2-desc .p2-bottom {
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
/* 左脸出现 */
.play .p2-bg-left {
	opacity: 0;
	-webkit-animation: showIn .4s linear 1s forwards;
}
@keyframes showIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.play .p2-bg-left-grid {
	opacity: 0;
	-webkit-animation: showIn .4s linear 1s forwards;
}
/* 右脸出现 */
.play .p2-bg-right {
	opacity: 0;
	-webkit-animation: showIn .4s linear 1.4s forwards;
}
.play .p2-bg-right-grid {
	opacity: 0;
	-webkit-animation: showIn .4s linear 1.4s forwards;
}
/* 网格抖动 */
.play .p2-bg-left-grid{
	opacity: 0;
	-webkit-animation: shake-left .1s linear 1.8s infinite alternate;
}
@keyframes shake-left {
	0% {
		top: 117px;
		left: -1;
		opacity: 1;
	}
	100% {
		top: 119px;
		opacity: 1;
		left: 1;
	}
}
.play .p2-bg-right-grid {
	opacity: 0;
	-webkit-animation: shake-right .1s linear 1.8s infinite alternate;
}
@keyframes shake-right {
	0% {
		top: 81px;
		opacity: 1;
		right: -1;
	}
	100% {
		top: 83px;
		opacity: 1;
		right: 1;
	}
}
/* 出现其余的组件 */
.play .p2-desc .p2-time {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p2-desc .p2-line-left {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p2-desc .p2-line-right {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}

.play .p2-desc .p2-time-base {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p2-desc .p2-time-ponit {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p2-desc .p2-1935 {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p2-desc .p2-2016 {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p2-desc .p2-1935-text {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p2-desc .p2-2016-text {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .dir-next {
	opacity: 0;
	-webkit-animation: showIn .5s linear 4s forwards;
}
.play .p2-desc .p2-up-text {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1.8s forwards;
}
.play .p2-desc .circle {
	opacity: 0;
	-webkit-animation: circle-show .5s linear 1.8s forwards;
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
	   opacity: 1
	}
}
.play .p2-desc .p2-light {
	opacity: 0;
	-webkit-animation: time-show 2s linear 1.8s forwards;
}
@keyframes time-show {
	0% {
		opacity: 1;
		left: 18px;
	}
	90% {
		left: 327.5px;
		opacity: 1;
	}
	100% {
		left: 327.5px;
		opacity: 0;
	}
}
.play .p2-desc .p2-time-point {
	opacity: 0;
	-webkit-animation: point-show 2s linear 1.8s forwards;
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
.play .p2-desc .p2-time-line {
	opacity: 0;
	-webkit-animation: line-show 2s linear 1.8s forwards;
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

/*人行走*/
.play .p2-desc .p2-up-people {
	opacity: 0;
	-webkit-animation: people-go 1s steps(7) 1.8s infinite;
}
@keyframes people-go {
	0% {
		opacity: 1;
		background-position-x: 0px;
	}
	100% {
		opacity: 1;
		background-position-x: -1295px;
	}
}
/*.p2-bg {
	background: url(../assets/images/p1_bg.png);
	background-size: 100% 100%;
 	background-repeat: no-repeat;
	position: absolute;
  	width: 100vw;
  	height: 100vh;
}
.p2-text {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -130px;
	margin-top: 100px;
	width: 260px;
	height: 50px;
}
.p2-text-inner {
	position: absolute;
	top: 0;
	left: 0;
	width: 260px;
	height: 50px;
	-webkit-mask-image: url(../assets/images/p2_text.png);
	-webkit-mask-size: auto 100%;
	background: url(../assets/images/paint.jpg);
	background-size:960px 1px;
	background-repeat: repeat-y;
	-webkit-animation: masked-animation 10s linear .5s infinite alternate;
}
@keyframes masked-animation {
	0% {
		background-position: left bottom;
	}
	100% {
		background-position: right bottom;
	}
}
.paly{
	-webkit-animation:fadeInDown 2s .5s ease both;
}
@keyframes fadeInDown{
	0%{
		opacity:0;
		-webkit-transform:translate(0,0)
	}
	100%{
		opacity:1;
		-webkit-transform:translate(0,0)
	}
}
.p2-people-area {
	position: absolute;
	left: 50%;
	top: 40px;
	margin-left: -40px;
}
.p2-people-body {
	width: 78px;
	height: 220px;
	background-image: url(../assets/images/p2_people3-body.png);
	background-size:100%;
	background-repeat: no-repeat;
	position: absolute;
	z-index: 5;
}
.p2-people-foot1 {
	position: absolute;
	background-image: url(../assets/images/p2_people3-foot1.png);
	background-size: 100%;
	background-repeat: no-repeat;
	top: 190px;
	left: 28px;
	width: 110px;
	height: 210px;
	-webkit-animation: p2f1 1s linear .5s infinite alternate;
	-webkit-transform-origin: 20% 0;
	z-index: 2;
}
@keyframes p2f1 {
	0% {
    	-webkit-transform: rotate(0);
	}

	100% {
	    -webkit-transform: rotate(40deg);
	}
}
.p2-people-foot2 {
	position: absolute;
	background-image: url(../assets/images/p2_people3-foot2.png);
	background-size: 100%;
	background-repeat: no-repeat;
	top: 200px;
	left: -30px;
	width:75px;
	height: 190px;
	-webkit-animation: p2f2 1s linear 0.5s infinite alternate;
	-webkit-transform-origin: 100% 0;
	z-index: 1;
}
@keyframes p2f2 {
	0% {
		-webkit-transform: rotate(10deg);
	}
	100% {
		-webkit-transform: rotate(-40deg);
	}
}
.p2-people-hand1 {
	position: absolute;
	background-image: url(../assets/images/p2_people3-hand1.png);
	background-size: 100%;
	background-repeat: no-repeat;
	top: 90px;
	left: 43px;
	width: 80px;
	height: 120px;
	-webkit-animation: p2h1 1s linear .5s infinite alternate;
	-webkit-transform-origin: 0 0;
}
@keyframes p2h1 {
	0% {
		-webkit-transform: rotate(-10deg);
	}
	100% {
		-webkit-transform: rotate(40deg);
	}
}*/
</style>