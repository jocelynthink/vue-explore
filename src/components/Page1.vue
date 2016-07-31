<template>
  <div class="page1" v-bind:class="{'play':current===1}">
    <div class="p1-bg"></div>
    <div class="p1-top">
      <div class="p1-logo"></div>
      <div class="p1-logo-left"></div>
      <div class="p1-logo-right"></div>
    </div>
    <div class="p1-desc">
      <div class="p1-desc-light"></div>
      <div class="p1-desc-bg"></div>
      <div class="p1-desc-title1"></div>
      <div class="p1-desc-title2"></div>
      <div class="p1-desc-top"></div>
      <div class="p1-desc-bottom"></div>
      <div class="p1-desc-dress-top"></div>
      <div class="p1-desc-dress-bottom"></div>
      <div class="p1-desc-dress-point"></div>
      <div class="p1-desc-left-circle1 circle"></div>
      <div class="p1-desc-left-circle2 circle"></div>
      <div class="p1-desc-right-circle1 circle"></div>
      <div class="p1-desc-right-circle2 circle"></div>
    </div>
    <div  class="dir-next"></div>
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
      msg: 'Hello World!'
    }
  },
  ready () {
    console.log(this.current);
    var self = this;
    // setTimeout(function(){
    //   self.$dispatch('preventSwipe');
    // },2000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p1-bg {
  background: url(../assets/images/p1_bg.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.p1-top {
  position: absolute;
  top: 65px;
  left: 50%;
  width: 220px;
  height: 156px;
  margin-left: -110px;
}
.p1-logo {
  background-image: url(../assets/images/p1_logo.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 136px;
  height: 136px;
  left: 50%;
  top: 50%;
  margin-left: -68px;
  margin-top: -68px;
}
.p1-logo-left {
  background-image: url(../assets/images/p1_logo_left.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 14px;
  height: 156px;
  left: 0;
}
.p1-logo-right {
  background-image: url(../assets/images/p1_logo_right.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 14px;
  height: 156px;
  right: 0;
}
.p1-desc {
  position: absolute;
  width: 360px;
  height: 172px;
  top: 297px;
  left: 50%;
  margin-left: -180px;
}

.p1-desc .p1-desc-light {
  background-image: url(../assets/images/p1_light.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width:191px;
  height: 27px;
  left: 0px;
  top: -7px;
  z-index: 11;
}
.p1-desc .p1-desc-bg {
  background-image: url(../assets/images/p1_line.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 360px;
  height: 149px;
  top: 22.4px;
}
.p1-desc .p1-desc-top {
  background-image: url(../assets/images/p1_desc_top.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 0;
  width: 348px;
  height: 12.5px;
  margin-left: -174px;
}
.p1-desc .p1-desc-bottom {
  background-image: url(../assets/images/p1_desc_bottom.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 348px;
  height: 1.5px;
  margin-left: -174px;
}
.p1-desc .p1-desc-dress-top {
  background-image: url(../assets/images/p1_desc_dress_top.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 348px;
  height: 9px;
  left: 50%;
  top: 15px;
  margin-left: -174px;
}
.p1-desc .p1-desc-dress-bottom {
  background-image: url(../assets/images/p1_desc_dress_bottom.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 348px;
  height: 9px;
  left: 50%;
  bottom: 4px;
  margin-left: -174px;
}
.p1-desc .p1-desc-title1 {
  background-image: url(../assets/images/p1_title1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 175.5px;
  height: 23.5px;
  left: 50%;
  top: 53.3px;
  margin-left: -87.75px;
}
.p1-desc .p1-desc-title2 {
  background-image: url(../assets/images/p1_title2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 303px;
  height: 29px;
  left: 50%;
  top: 96.8px;
  margin-left: -151.5px;
}
.p1-desc .circle {
  background-image: url(../assets/images/p1_circle.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
}
.p1-desc .p1-desc-left-circle1 {
  left: 8px;
  top: 18.5px;
}
.p1-desc .p1-desc-left-circle2 {
  left: 8px;
  top: 41.5px;
}
.p1-desc .p1-desc-right-circle1 {
  right: 8px;
  top: 18.5px;
}
.p1-desc .p1-desc-right-circle2 {
  right: 8px;
  top: 41.5px;
}
.play .p1-logo {
  opacity: 0;
  -webkit-animation: showIn .5s linear .5s forwards;
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
.play .p1-logo-left {
  opacity: 0;
  -webkit-animation: logo-left .5s linear .5s forwards;
}
@keyframes logo-left {
  0% {
    left: 90px;
    opacity: 1;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}
.play .p1-logo-right {
  opacity: 0;
  -webkit-animation: logo-right .5s linear .5s forwards;
}
@keyframes logo-right {
  0% {
    right: 90px;
    opacity: 1;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}

.play .p1-desc .p1-desc-top{
  opacity: 0;
  -webkit-animation: desc-top .5s linear 1s forwards;
}
@keyframes desc-top {
  0% {
    top: 50px;
    opacity: 1;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
.play .p1-desc .p1-desc-dress-top {
  opacity: 0;
  -webkit-animation: desc-dress-top .5s linear 1s forwards;
}
@keyframes desc-dress-top {
  0% {
    top: 65px;
    opacity: 1;
  }
  100% {
    top: 15px;
    opacity: 1;
  }
}
.play .p1-desc .p1-desc-bottom{
  opacity: 0;
  -webkit-animation: desc-bottom .5s linear 1s forwards;
}
@keyframes desc-bottom {
  0% {
    bottom: 64px;
    opacity: 1;
  }
  100% {
    bottom: 0px;
    opacity: 1;
  }
}
.play .p1-desc .p1-desc-dress-bottom {
  opacity: 0;
  -webkit-animation: desc-dress-bottom .5s linear 1s forwards;
}
@keyframes desc-dress-bottom {
  0% {
    bottom: 68px;
    opacity: 1;
  }
  100% {
    bottom: 4px;
    opacity: 1;
  }
}
.play .p1-desc .p1-desc-bg {
  opacity: 0;
  -webkit-animation: showIn-desc .5s linear 1s forwards,
    shake .01s linear 1s infinite alternate;
}
.play .p1-desc .p1-desc-title1 {
  opacity: 0;
  -webkit-animation: showIn-desc .5s linear 1s forwards;
}
.play .p1-desc .p1-desc-title2 {
  opacity: 0;
  -webkit-animation: showIn-desc .5s linear 1s forwards;
}

@keyframes showIn-desc {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes shake {
  0% {
    top: 21.4px;
    left: -1px;
  }
  100% {
    top: 23.4px;
    left: 1px;
  }
}
.play .p1-desc .circle {
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
    opacity: 1
  }
}

.play .p1-desc .p1-desc-light {
  opacity: 0;
  -webkit-animation: light-show .5s linear 1.5s forwards;
}
@keyframes light-show {
  0% {
    opacity: 1;
    left: 0px;
  }
  100% {
    opacity: 1;
    left: 160px;
  }
}
.page1 .dir-next {
  opacity: 0;
  -webkit-animation: showNext .5s linear 2s forwards;
}
@keyframes showNext {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/*.p1-desc {
  background-size: 100%;
  position: absolute;
  width: 221px;
  height: 64px;
  left: 50%;
  top: 220px;
  margin-left: -111px;
}
.p1-desc-inner {
  -webkit-mask: url(../assets/images/p1_desc.png);
  background: url(../assets/images/paint.jpg);
  background-size:100%;
  background-size: 960px 1px;
  background-repeat: repeat-y;
  -webkit-mask-size: auto 100%;
  position: absolute;
  width: 221px;
  height: 64px;
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
.page1 {
  -webkit-transition: .5s;
          transition: .5s;
}
.page1.fadeOut {
  -webkit-transform: translate(0,-100%);
          transform: translate(0,-100%);
}*/


@media only screen
and (max-device-width : 320px){
  .p1-top {
    width: 180px;
    margin-left: -90px;
  }
  .p1-desc {
    top: 258px;
    width: 320px;
    margin-left: -160px;
  }
  .p1-desc .p1-desc-top{
    width: 305px;
    margin-left: -154px;
  }
  .p1-desc .p1-desc-dress-top{
    width: 305px;
    margin-left: -154px;
  }
  .p1-desc .p1-desc-bottom {
    width: 305px;
    margin-left: -154px;
  }
  .p1-desc .p1-desc-dress-bottom {
    width: 305px;
    margin-left: -154px;
  }

  .p1-desc .p1-desc-left-circle1 {
    left: 8px;
    top: 18.5px;
  }
  .p1-desc .p1-desc-left-circle2 {
    left: 8px;
    top: 41.5px;
  }
  .p1-desc .p1-desc-right-circle1 {
    right: 8px;
    top: 18.5px;
  }
  .p1-desc .p1-desc-right-circle2 {
    right: 8px;
    top: 41.5px;
  }
  .play .p1-desc .p1-desc-light {
    opacity: 0;
    -webkit-animation: light-show .5s linear 1.5s forwards;
  }
  @keyframes light-show {
    0% {
      opacity: 1;
      left: 0px;
    }
    100% {
      opacity: 1;
      left: 130px;
    }
  }
}
@media only screen
and (max-device-height: 480px) { 
  .p1-top {
    top: 40px;
  }
  .p1-desc {
    top: 210px;
  }
}
</style>
