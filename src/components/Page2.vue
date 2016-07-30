<template>
	 <div class="page2" v-bind:class="{'paly':current===2}">
    <div class="p2-bg"></div>
  	<div class="p2-text">
		  <div class="p2-text-inner"></div>
		</div>
		<div class="p2-people-area">
		  <div class="p2-people-body"></div>
		  <div class="p2-people-foot1"></div>
		  <div class="p2-people-foot2"></div>
		  <div class="p2-people-hand1"></div>
		</div>
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
	 isanimation: false
	}
},
methods: {
	test () {
		this.isanimation = true;
		console.log('d');
	}
}
}
</script>

<style scoped>
.p2-bg {
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
}
</style>