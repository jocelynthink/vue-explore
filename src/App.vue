<template>
<!--   <div class="music_btn">
    <audio src="" loop="loop" id="music"></audio>
  </div> -->
  <welcome v-if="isLoading"></welcome>
  <div  class="scroll-list" 
        v-touch:swipeup="swipeup"  
        v-touch:swipedown="swipedown"
        :style="{'height':`${this.count * 100}%`,'marginTop':`${-100*(this.current-1)}vh`}" v-if="!isLoading">
    <page1 :current.sync="current"></page1>
    <page2 :current.sync="current"></page2> 

    <div class="page3">
      
    </div>
    <div class="page4">
      
    </div>
    <div class="page5">
      
    </div>
    <div class="page6">
      
    </div>
    <div class="page7">
      
    </div>
  </div>

</template>

<script>
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Welcome from './components/Welcome'
export default {
  components: {
    Page1,
    Page2,
    Welcome
  },
  data () {
    return {
      isPage1: false,
      isPage2: false,
      current: 1,
      count: 7,
      isLoading: true,
      preventSwipe: true
    }
  },
  methods: {
    swipedown () {
      console.log('ddd');
      if(this.current===1){
        console.log("最前面一张了");
      }else if(!this.preventSwipe){
        this.current--;
        this.preventSwipe = true;
      }
    },
    swipeup () {
      console.log('swipeup');
      console.log(this.preventSwipe);
      if(this.current===this.count){
        console.log("最后一张了");
      }else if(!this.preventSwipe){
        this.current ++;
        this.preventSwipe = true;
      }
    }
  },
  events: {
    'isLoaded': function(){
      console.log('isLoaded');
      this.isLoading = false;
    },
    'preventSwipe': function(){
        this.preventSwipe = false;
    }
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
  background: #010204;
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
  /*overflow: hidden;*/
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
  background: yellow;
  position: relative;
}
.page4 {
  width: 100vw;
  height: 100vh;
  background: green;
  position: relative;
}
.page5 {
  width: 100vw;
  height: 100vh;
  background: red;
  position: relative;
}
.page6 {
  width: 100vw;
  height: 100vh;
  background: pink;
  position: relative;
}
.page7 {
  width: 100vw;
  height: 100vh;
  background: blue;
  position: relative;
}

</style>
