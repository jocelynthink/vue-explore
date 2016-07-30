<template>
	<div class="page2" v-bind:class="{'play':current===3}">
		<div class="p2-bg-left"></div>
		<div class="p2-bg-right"></div>
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
			<div class="dir-next"></div>
			<div class="p2-up-text"></div>
			<div class="p2-up-people"></div>
		</div>
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
	background-image: url(../assets/images/p3_bg_left.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 181px;
	height: 208.5px;
	left: 0px;
	top: 172px;
}
.p2-bg-right{
	background-image: url(../assets/images/p3_bg_right.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 169.5px;
	height: 252.5px;
	right: 0px;
	top: 165px;
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
	height: 456px;
	position: absolute;
	left: 18px;
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
	background-image: url(../assets/images/p3_1968.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 39px;
	height: 12px;
	top: 438.5px;
	left: 14px;
}
.p2-desc .p2-2016 {
	background-image: url(../assets/images/p3_2016.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width:40px;
	height: 12.5px;
	top: 438.5px;
	right: 14px;
}
.p2-desc .p2-time-base {
	background-image: url(../assets/images/p2_time_base.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 327.5px;
	height: 24px;
	top: 459.5px;
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
	top: 465px;
	left: 94px;
}
.p2-desc .p2-time-line {
	background: #4F93FC;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 90px;
	height: 1px;
	top: 471.5px;
	left: 23px;
}
.p2-desc .p2-1935-text {
	background-image: url(../assets/images/p3_1968_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 109px;
	height: 25.5px;
	top: 493.5px;
	left: 14px;
}
.p2-desc .p2-2016-text {
	background-image: url(../assets/images/p3_2016_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 68.5px;
	height: 25px;
	top: 493.5px;
	right: 14px;
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
.p2-desc .dir-next {
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
}

.p2-desc .p2-up-text {
	background-image: url(../assets/images/p3_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	left: 68px;
	top: 82px;
	width: 207px;
	height: 300px;
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
	-webkit-animation: showTop .5s linear .5s forwards;
}
@keyframes showTop {
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
/* 右脸出现 */
.play .p2-bg-right {
	opacity: 0;
	-webkit-animation: showIn .4s linear 1.4s forwards;
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
.play .p2-desc .dir-next {
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
</style>