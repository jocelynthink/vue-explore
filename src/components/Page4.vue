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
			<div class="p4-desc-text"></div>
			<div class="p4-left-circle1 circle"></div>
			<div class="p4-left-circle2 circle"></div>
			<div class="p4-right-circle1 circle"></div>
			<div class="p4-right-circle2 circle"></div>
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
	background: rgba(0,8,22,0.4);
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
</style>