<template>
  <div  v-bind:class="{ 'music_play': isMusicPlay, 'music_stop': !isMusicPlay}"
        v-on:touchstart="playMusic">
    <audio src="static/bgmusic.mp3" loop="loop" id="music"  v-el:myaudio></audio>
  </div>
  <welcome v-if="isLoading"></welcome>
  <div  id="srcolldiv" class="scroll-list"
        v-touch:swipeup="swipeup"
        v-touch:swipedown="swipedown"
        :style="{'height':`${isAndroid ? '100%' : count * 100 + '%'}`, 'marginTop':`${isAndroid ? '' : (-100*(current-1) + '%')}`}"
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
      isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1,
      isMusicPlay: true
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
        // alert(document.body.clientHeight);
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
          second = 5;
          break;
        case 7:
          second = 1;
          break;
      }

      setTimeout(() => {
        this.preventSwipe = false;
      }, second * 1000)
    },
    playMusic() {
      var music = document.getElementById('music');
      music.play();
      console.log(music);
      console.log(this.isMusicPlay)
      if( this.isMusicPlay){
        music.pause();
        this.$els.myaudio.pause();
        console.log('pause');
      }else {
        music.play();
      }
      this.isMusicPlay = !this.isMusicPlay;
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
    var music = document.getElementById('music');
    music.play();
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
.music_play {
  background: url(./assets/images/music_play.png) 0px 0px no-repeat;
  background-size: 100%;
  position: absolute;
  top: 28px;
  right: 14px;
  z-index: 99;
  width: 35px;
  height: 35px;
  -webkit-animation:  music-circle 2s linear 0s infinite ;
}
.music_stop {
  background: url(./assets/images/music_stop.png) 0px 0px no-repeat;
  background-size: 100%;
  position: absolute;
  top: 28px;
  right: 14px;
  z-index: 99;
  width: 35px;
  height: 35px;
}

@keyframes music-circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
.scroll-list {
  -webkit-transition: all .5s ease-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

.page1 {
  width: 100%;
  height: 100%;
  position: relative;
}
.page2 {
  width: 100%;
  height: 100%;
  position: relative;
}
.page3 {
  width: 100%;
  height: 100%;
  position: relative;
}
.page4 {
  width: 100%;
  height: 100%;
  background: linear-gradient(top , #03090F 0%, #000025 30%, #03090F 100%);
  position: relative;
}
.page5 {
  width: 100%;
  height: 100%;
  position: relative;
}
.page6 {
  width: 100%;
  height: 100%;
  position: relative;
}
.page7 {
  width: 100%;
  height: 100%;
  position: relative;
}
@media only screen
and (max-device-height: 736px)
and (min-device-width: 414px){
  .music_play {
    top: 32px;
    right: 33px;
  }
  .music_stop{
    top: 32px;
    right: 33px;
  }
}

</style>
