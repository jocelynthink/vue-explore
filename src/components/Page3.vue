<template>
	<div class="page3" v-bind:class="{'play':current===3}">
		<div class="p3-bg-left"></div>
		<div class="p3-bg-right"></div>
		<div class="p3-bg-left-grid"></div>
		<div class="p3-bg-right-grid"></div>
		<div class="p3-desc">
			<div class="p3-top"></div>
			<div class="p3-bottom"></div>
			<ul class="p3-time" id="p3-time">
				<li v-for="item of items">
					<img v-bind:src="item" alt="" :style="{opacity: 1 - $index/10}">
				</li>
			</ul>
			<!-- <div class="p3-light"></div> -->
			<div class="p3-line-left"></div>
			<div class="p3-line-right"></div>
			<div class="p3-time-base"></div>
			<div class="p3-time-point"></div>
			<div class="p3-time-line"></div>
			<div class="p3-1968"></div>
			<div class="p3-2016"></div>
			<div class="p3-1968-text"></div>c
			<div class="p3-2016-text"></div>
			<div class="p3-left-circle1 circle"></div>
			<div class="p3-left-circle2 circle"></div>
			<div class="p3-right-circle1 circle"></div>
			<div class="p3-right-circle2 circle"></div>
			<div class="p3-up-text"></div>
			<div class="p3-up-people"></div>
		</div>
		<div class="p3-mask"></div>
		<div class="dir-next"></div>
<!--     <div class="p3-bg"></div>
  	<div class="p3-text">
		  <div class="p3-text-inner"></div>
		</div>
		<div class="p3-people-area">
		  <div class="p3-people-body"></div>
		  <div class="p3-people-foot1"></div>
		  <div class="p3-people-foot2"></div>
		  <div class="p3-people-hand1"></div>
		</div> -->

  </div>
</template>

<script>
import date1 from '../assets/images/p3_s1936.png'
import date2 from '../assets/images/p3_s1948.png'
import date3 from '../assets/images/p3_s1956.png'
import date4 from '../assets/images/p3_s1968.png'
import date5 from '../assets/images/p3_s1982.png'
import date6 from '../assets/images/p3_s2016.png'
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
		 		date1,
	 			date2,
				date3,
				date4,
				date5,
				date6
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
.p3-bg-left {
	background-image: url(../assets/images/p3_bg_left.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 203px;
	height: 258px;
	left: 0px;
	top: 125px;
}
.p3-bg-right{
	background-image: url(../assets/images/p3_bg_right.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 165px;
	height: 333px;
	right: 0px;
	top: 75px;
}
.p3-bg-left-grid {
	background-image: url(../assets/images/p3_bg_left_grid.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 187px;
	height: 289px;
	left: 0px;
	top: 137px;
}
.p3-bg-right-grid {
	background-image: url(../assets/images/p3_bg_right_grid.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 185px;
	height: 300px;
	right: 0px;
	top: 123px;
}
.p3-desc {
	position: absolute;
	width: 372.5px;
	height: 625px;
	top: 8px;
	left: 50%;
	margin-left: -186.25px;
	/*background: rgba(0,8,22,0.4);*/
	z-index: 10;
}
.p3-desc .p3-top {
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
.p3-desc .p3-bottom {
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
.p3-desc .p3-line-left {
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
.p3-desc .p3-line-right {
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
.p3-desc .p3-light {
	background: rgba(255,255,255,.5);
	box-shadow: 0px 0px 5px #FFFFFF;
	width: 1px;
	height: 480px;
	position: absolute;
	left: 356px;
	margin-top: 15px;
	z-index: 110;
}
.p3-desc .p3-time{
	position: absolute;
	top: 23px;
	left: 16px;
	width: 13px;
	height: 49px;
}
.p3-desc .p3-time li {
	margin-bottom: 4px;
	height: 5.5px;
}
.p3-desc .p3-time img{
	width: 13px;
	height: 5.5px;
	background-size: 100% 100%;
}

.p3-desc .p3-1968{
	background-image: url(../assets/images/p3_1968.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 56px;
	height: 17.5px;
	top: 456px;
	left: 24px;
}
.p3-desc .p3-2016 {
	background-image: url(../assets/images/p3_2016.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 58px;
	height: 17.5px;
	top: 456px;
	right: 20px;
}
.p3-desc .p3-time-base {
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
.p3-desc .p3-time-point {
	background-image: url(../assets/images/p2_progress.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 31.5px;
	height: 14.4px;
	top: 488px;
	left: 324px;
}
.p3-desc .p3-time-line {
	background: #4F93FC;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 320px;
	height: 1px;
	top: 494.5px;
	left: 23px;
}
.p3-desc .p3-1968-text {
	background-image: url(../assets/images/p3_1968_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 111px;
	height: 29px;
	top: 514.5px;
	left: 24px;
}
.p3-desc .p3-2016-text {
	background-image: url(../assets/images/p3_2016_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 69px;
	height: 26.5px;
	top: 514.5px;
	right: 20px;
}
.p3-desc .circle {
  background-image: url(../assets/images/p1_circle.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
}
.p3-desc .p3-left-circle1 {
	left: 8px;
	top: 89.5px;
}
.p3-desc .p3-left-circle2 {
	left: 8px;
	top: 112.5px;
}
.p3-desc .p3-right-circle1 {
	right: 8px;
	top: 357px;
}
.p3-desc .p3-right-circle2 {
	right: 8px;
	top: 380px;
}
/*.p3-desc .dir-next {
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

.p3-desc .p3-up-text {
	background-image: url(../assets/images/p3_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	left: 65px;
	top: 132px;
	width: 214.5px;
	height: 231px;
	z-index: 50;
}
.p3-desc .p3-up-people {
	background-image: url(../assets/images/p2_people.png);
	background-size: 1295px 363px;
	background-repeat: no-repeat;
	position: absolute;
	left: 133px;
	top: 70px;
	width: 185px;
	height: 363px;
	margin-left: -35.25px;
	z-index: 100;
}
.p3-mask {
	background-image: url(../assets/images/mask.png);
	background-size: 800px 603px;
	background-repeat: repeat-x;
	position: absolute;
	width: 100%;
	height: 100%;
	background-position: -425px;
}

.play .p3-mask {
	-webkit-animation: show-mask 2s linear 1.8s forwards;
}
@keyframes show-mask {
	0% {
		background-position-x: -425px;
	}
	100% {
		background-position-x: 0px;
	}
}

/*拉开*/
.play .p3-desc .p3-top {
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
.play .p3-desc .p3-bottom {
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
.play .p3-bg-left {
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
.play .p3-bg-right {
	opacity: 0;
	-webkit-animation: showIn .4s linear 1.4s forwards;
}
/* 网格抖动 */
.play .p3-bg-left-grid{
	opacity: 0;
	-webkit-animation: shake-left .1s linear 1.8s infinite alternate;
}
@keyframes shake-left {
	0% {
		top: 136px;
		left: -1;
		opacity: 1;
	}
	100% {
		top: 137px;
		opacity: 1;
		left: 1;
	}
}
.play .p3-bg-right-grid {
	opacity: 0;
	-webkit-animation: shake-right .1s linear 1.8s infinite alternate;
}
@keyframes shake-right {
	0% {
		top: 122px;
		opacity: 1;
		right: -1;
	}
	100% {
		top: 124px;
		opacity: 1;
		right: 1;
	}
}
/* 出现其余的组件 */
.play .p3-desc .p3-time {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p3-desc .p3-line-left {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p3-desc .p3-line-right {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}

.play .p3-desc .p3-time-base {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p3-desc .p3-time-ponit {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p3-desc .p3-1968 {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p3-desc .p3-2016 {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p3-desc .p3-1968-text {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .p3-desc .p3-2016-text {
	opacity: 0;
	-webkit-animation: showIn .2s linear 1.8s forwards;
}
.play .dir-next {
  opacity: 0;
  -webkit-animation: showIn .2s linear 4s forwards, shake-next 1s ease-in 4.2s infinite;
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
.play .p3-desc .p3-up-text {
	opacity: 0;
	-webkit-animation: showIn .5s linear 1.8s forwards;
}
.play .p3-desc .circle {
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
	   opacity: 1;
	}
}
/*.play .p3-desc .p3-light {
	opacity: 0;
	-webkit-animation: time-show 2s linear 1.8s forwards;
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
.play .p3-desc .p3-time-point {
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
.play .p3-desc .p3-time-line {
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
.play .p3-desc .p3-up-people {
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


@media only screen
and (max-device-height: 667px) {
	.p3-desc {
		height: 560px;
	}
}
@media only screen
and (max-device-height: 460px) {
  .p3-time-base{
    display: none;
  }
  .p3-time-point{
    display: none;
  }
  .p3-time-line{
    display: none;
  }
  .p3-1968{
    display: none;
  }
  .p3-2016{
    display: none;
  }
  .p3-1968-text{
    display: none;
  }
  .p3-2016-text{
    display: none;
  }
}
@media only screen
and (max-device-height: 736px)
 and (min-device-width: 414px){
	.p3-mask {
		background-size: 883.2px auto;
		background-position: -469.2px;
	}
	.play .p3-mask {
	-webkit-animation: show-mask1 2s linear 1.8s forwards;
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
and (max-device-width : 350px){
.dir-next {
 	bottom: -5px;
 }
.p3-desc {
	top: 4px;
	width: 320px;
	height: 460px;
	margin-left: -160px;
}
.p3-desc .p3-top{
	width: 315px;
	margin-left: -157px;
}
.p3-desc .p3-bottom{
	width: 315px;
	margin-left: -154px;
}
.p3-desc .p3-up-text {
	top: 50px;
}
.p3-desc .p3-up-people{
	top: 25px;
}
.p3-desc .p3-1968 {
	top: 372px;
}
.p3-desc .p3-2016 {
	top: 373px;
}
.p3-desc .p3-1968-text {
	top: 423.5px;
}
.p3-desc .p3-2016-text {
	top: 423.5px;
}
.p3-desc .p3-time-base{
	width: 276px;
	margin-left: -138px;
	top: 398.5px;
}
.p3-desc .p3-time-point{
	top: 405px;
	left: 270px;
}
.p3-desc .p3-time-line {
	width: 267px;
	top: 412px;
}
.p3-desc .p3-up-text {
	left: 44px;
	top: 60px;
}
.p3-desc .p3-up-people {
	left: 128px;
}
.p3-desc .p3-right-circle1 {
	top: 322px;
}
.p3-desc .p3-right-circle2 {
	top: 345px;
}
.play .p3-desc .p3-time-point {
	opacity: 0;
	-webkit-animation: point-show1 1.7s linear 1.8s forwards;
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
.play .p3-desc .p3-time-line {
	opacity: 0;
	-webkit-animation: line-show1 1.7s linear 1.8s forwards;
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
.play .dir-next {
	opacity: 0;
	-webkit-animation: show-in .2s linear 4s forwards, shake-next1 2s linear 4.3s infinite;
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
