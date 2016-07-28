<template>
	 <div class="page2" v-bind:class="{'paly':current===2}">
    <div class="p2-bg"></div>
  	<div class="p2-text">
		  <div class="p2-text-inner"></div>
		</div>
		<div class="p2-people-area">
		  <div class="p2-people1"></div>
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
	background: url(../assets/images/p2_bg.jpg) no-repeat;
	background-size: 549px 483px;
  background-repeat: repeat-x;
  opacity: .8;
	position: absolute;
	top: -80px;
	left: -125px;
  width: 1098px;
  height: 483px;
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

.page2 {
	-webkit-transition: .5s;
	        transition: .5s;
}
.fadeIn {
	-webkit-transform: translate(0,-100%);
	        transform: translate(0,-100%);
}
</style>