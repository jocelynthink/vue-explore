<template>
  <div class="page1">
    <div class="p1-bg-bottom"></div>
    <div class="p1-bg">
    </div>
    <div class="p1-title"></div>
    <div class="p1-desc">
      <div class="p1-desc-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current:''
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.p1-bg {
  background: url(../assets/images/p1_bg.png) no-repeat;
  background-size: 100%;
  position: absolute;
  left: 50%;
  margin-left: -274px;
  width: 549px;
  height: 483px;
  top: 50px;
}
.p1-bg-bottom{
  background: url(../assets/images/p1_bottom.png) no-repeat;
  background-size: 100%;
  position: absolute;
  width: 426px;
  height: 144px;
  bottom: 0;
  z-index: 1;
}
.p1-title {
  background: url(../assets/images/p1_title.png) no-repeat;
  background-size: 100%;
  position: absolute;
  width: 172px;
  height: 59px;
  top: 140px;
  left: 50%;
  margin-left: -86px;
}
.p1-desc {
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
  /*background-size:100%;*/
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
}
</style>
