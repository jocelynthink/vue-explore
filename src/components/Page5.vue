<template>
	<div class="page4" v-bind:class="{'play':current === 5}">
		<div class="p5-bg-grid"></div>
		<div class="p5-desc">
			<div class="p5-desc-top"></div>
			<div class="p5-desc-bottom"></div>
			<div class="p5-desc-center">
				<div class="p5-desc-center-penguin"></div>
				<div class="p5-desc-center-penguin-light"></div>
				<div class="p5-desc-center-penguin-bottom"></div>
				<div class="p5-desc-center-penguin-left"></div>
				<div class="p5-desc-center-penguin-right"></div>
			</div>
			<div class="p5-desc-title"></div>
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

<style>
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
	height: 625px;
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
.p5-desc .p5-desc-center {
	position: absolute;
	top: 115px;
	left: 50%;
	width: 257px;
	height: 314.5px;
	margin-left: -128.5px;
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
}
.p5-desc .p5-desc-center-penguin-light {
	background-image: url(../assets/images/p5_qq_light.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: absolute;
	width: 175.5px;
	height: 78.5px;
	left: 50%;
	top: 0px;
	margin-left: -85.25px;
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
	left: 0;
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
</style>