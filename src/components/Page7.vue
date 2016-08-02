<template>
	<div class="page7" v-bind:class="{'play':current===7}">
		<div class="p7-desc">
			<div class="p7-desc-top"></div>
			<div class="p7-desc-bottom"></div>
			<div class="p7-desc-grid"></div>
			<div class="p7-desc-title"></div>
			<div class="p7-desc-button"></div>
			<div class="p7-desc-text"></div>
			<div class="p7-desc-logo"></div>
			<div class="p7-line-left"></div>
			<div class="p7-line-right"></div>
			<div class="p7-left-circle1 circle"></div>
			<div class="p7-left-circle2 circle"></div>
			<div class="p7-right-circle1 circle"></div>
			<div class="p7-right-circle2 circle"></div>
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
.page7 {
	background-image: url(../assets/images/p7_bg.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
}
.p7-desc {
	position: absolute;
	width: 372.5px;
	height: 445px;
	top: 14px;
	left: 50%;
	margin-left: -186.25px;
}
.p7-desc .p7-desc-top {
	background-image: url(../assets/images/p7_top.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 372.5px;
	height: 89.5px;
	top: 0px;
}
 .p7-desc .p7-desc-bottom {
	background-image: url(../assets/images/p7_bottom.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 355.5px;
	height: 9.5px;
	bottom: 0px;
	left: 50%;
	margin-left: -177.75px;
 }
 .p7-desc .p7-desc-grid {
 	background-image: url(../assets/images/p7_grid.png);
 	background-size: 100% 100%;
 	background-repeat: no-repeat;
 	position: absolute;
 	width: 375px;
 	height: 395.5px;
 }
 .p7-desc .p7-desc-title {
	background-image: url(../assets/images/p7_title.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 313px;
	height: 255.5px;
	top: 0px;
	left: 20px;
 }
 .p7-desc .p7-desc-button {
	background-image: url(../assets/images/p7_button.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 262.5px;
	height: 39.5px;
	top: 216px;
	left: 55px;
 }
 .p7-desc .p7-desc-text {
	background-image: url(../assets/images/p7_text.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 160.5px;
	height: 51.5px;
	top: 315px;
	left: 50%;
	margin-left: -80.25px;
 }
 .p7-desc .p7-desc-logo {
	background-image: url(../assets/images/p7_logo.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 86.5px;
	height: 27.5px;
	top: 391px;
	left: 50%;
	margin-left: -43.25px;
 }
 .p7-desc .p7-line-left {
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
 .p7-desc .p7-line-right {
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
 .circle {
   background-image: url(../assets/images/p1_circle.png);
   background-size: 100% 100%;
   background-repeat: no-repeat;
   position: absolute;
   width: 20px;
   height: 20px;
 }
 .p7-left-circle1 {
 	left: 20px;
 	top: 30px;
 }
 .p7-left-circle2 {
 	left: 43px;
 	top: 30px;
 }
 .p7-right-circle1 {
 	right: 20px;
 	top: 30px;
 }
 .p7-right-circle2 {
 	right: 43px;
 	top: 30px;
 }
 .play .circle {
 	opacity: 0;
 	-webkit-animation: show-circle .5s linear 1s forwards;
 }
 @keyframes show-circle {
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

 .play .p7-desc .p7-desc-top {
	opacity: 0;
	-webkit-animation: show-top .5s linear .5s forwards;
 }
 @keyframes show-top {
 	0% {
		opacity: 1;
		top: 180px;
 	}
 	100% {
		opacity: 1;
		top: 0px;
 	}
 }
.play .p7-desc .p7-desc-bottom {
	opacity: 0;
	-webkit-animation: show-bottom .5s linear .5s forwards;
}
 @keyframes show-bottom {
 	0% {
		opacity: 1;
		bottom: 180px;
 	}
 	100% {
		opacity: 1;
		bottom: 0px;
 	}
 }
.play .p7-desc .p7-desc-grid {
	opacity: 0;
	-webkit-animation: show-in .5s linear 1s forwards;
}
.play .p7-desc .p7-desc-title {
	opacity: 0;
	-webkit-animation: show-in .5s linear 1s forwards;
}
.play .p7-desc .p7-desc-button {
	opacity: 0;
	-webkit-animation: show-in .5s linear 1s forwards;
}
.play .p7-desc .p7-desc-text {
	opacity: 0;
	-webkit-animation: show-in .5s linear 1s forwards;
}
.play .p7-desc .p7-desc-logo {
	opacity: 0;
	-webkit-animation: show-in .5s linear 1s forwards;
}
.play .p7-desc .p7-line-left {
	opacity: 0;
	-webkit-animation: show-in .5s linear 1s forwards;
}
.play .p7-desc .p7-line-right {
	opacity: 0;
	-webkit-animation: show-in .5s linear 1s forwards;
}
.play .dir-next {
	opacity: 0;
	-webkit-animation: show-in .2s linear 1.5s forwards;
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
/* 网格抖动 */
.play .p7-bg-grid {
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
</style>