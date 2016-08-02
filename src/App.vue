<template>
<!--   <div class="music_btn">
    <audio src="" loop="loop" id="music"></audio>
  </div> -->
  <welcome v-if="isLoading"></welcome>
  <div  id="srcolldiv" class="scroll-list"
        v-touch:swipeup="swipeup"
        v-touch:swipedown="swipedown"
        :style="{'height':`${isAndroid ? '100vh' : count * 100 + '%'}`, 'marginTop':`${isAndroid ? '' : (-100*(current-1) + 'vh')}`}"
       v-if="!isLoading">
    <page1 :current.sync="current"></page1>
    <page2 :current.sync="current"></page2>
    <page3 :current.sync="current"></page3>
    <page4 :current.sync="current"></page4>
    <page5 :current.sync="current"></page5>
    <page6 :current.sync="current"></page6>
    <page7 :current.sync="current"></page7>
  </div>

</template>

<script>
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'
import Welcome from './components/Welcome'
export default {
  components: { 
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Welcome
  },
  data () {
    return {
      isPage1: false,
      isPage2: false,
      current: 1,
      count: 7,
      isLoading: true,
      preventSwipe: true,
      height: document.body.clientHeight,
      isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
    }
  },
  methods: {
    swipedown () {
      console.log('ddd');
      console.log(this.current);
      if(this.current===1){
        console.log("最前面一张了");
      }else if(!this.preventSwipe){
        this.current--;
        this.preventSwipe = true;
        this.time(this.current);
        this.changePage();
      }
    },
    swipeup () {
      console.log('swipeup');
      console.log('上滑'+this.current);
      if(this.current===this.count){
        console.log("最后一张了");
      }else if(!this.preventSwipe){
        this.current ++;
        this.preventSwipe = true;
        this.time(this.current);
        this.changePage();
      }
    },
    changePage(){
      var div = document.getElementById('srcolldiv');
      if(this.isAndroid){
        var top = - ((this.current - 1) * this.height) + 'px';
        div.style.WebkitTransform = 'translateY(' + top + ')';
      // }else{
        // div.style.marginTop = -100*(this.current-1) + 'vh';
      }
    },
    time (num)　{
      var second = 0;
      switch (num){
        case 1:
          second = 2;
          break;
        case 2:
          second = 4;
          break;
        case 3:
          second = 4;
          break;
        case 4: 
          second = 4.7;
          break;
        case 5: 
          second = 2;
          break;
        case 6: 
          second = 3.5;
          break;
        case 7: 
          second = 1;
          break;
      }

      setTimeout(() => {
        this.preventSwipe = false;
      }, second * 1000)
    }
  },
  events: {
    'isLoaded': function(){
      console.log('isLoaded');
      this.isLoading = false;
      this.time(this.current);
    },
    'preventSwipe': function(){
      console.log('preventSwipe')
        this.preventSwipe = false;
    }
  },
  ready(){
    // if(!this.isAndroid){
    //   var div = document.getElementById('srcolldiv');
    //   div.style.height = this.count * 100 + '%';
    // }
  }
}
</script>

<style>
html ,body {
  height: 100%;
  width: 100% ;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
body {
   background: linear-gradient(top , #03090F 0%, #000025 30%, #03090F 100%);
  -webkit-tap-highlight-color: transparent;
  /*overflow: hidden;*/
}
.dir-next {
  background-image: url(./assets/images/p1_next.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: 70.5px;
  height: 68px;
  margin-left: -35.25px;
  z-index: 100;
}

/*.dir-area {
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  z-index: 99;
}
.dir-area .dir-icon {
  top: 0;
  left: 50%;
  margin-left: -19px;
  width: 39px;
  height: 18px;
  background: url(./assets/images/p1_next.png) no-repeat;
  background-size: 100%;
  position: absolute;
  -webkit-animation: dir .5s linear 0s infinite alternate;
}
@keyframes dir {
  0% {
    opacity: .5;
  }
}
.dir-area .dir-one {
  top: 0;
  left: 50%;
  margin-left: -19px;
  width: 39px;
  height: 18px;
  -webkit-animation: dir .5s linear .5s infinite alternate;
}
.dir-area .dir-two {
  top: 10px;
}*/
.music_btn {
  background: url(./assets/images/music_icon.png) 0px 1px no-repeat;
  background-size: 32px 62px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
  width: 32px;
  height: 32px;
}
.scroll-list {
  -webkit-transition: all .5s ease-out;
  position: absolute;
  width: 100vw;
  height: 100vh;
}

.page1 {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.page2 {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.page3 {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.page4 {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(top , #03090F 0%, #000025 30%, #03090F 100%);
  position: relative;
}
.page5 {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.page6 {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.page7 {
  width: 100vw;
  height: 100vh;
  position: relative;
}

</style>
