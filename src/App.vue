<template>
  <div  class="dir-area" 
        v-touch:swipeup="swipeup"  
        v-touch:swipedown="swipedown">
    <div class="dir-icon dir-one"></div>
    <div class="dir-icon dir-two"></div>
  </div>
  <div class="music_btn">
    <audio src="" loop="loop" id="music"></audio>
  </div>
  <div  class="scroll-list" 
        v-touch:swipeup="swipeup"  
        v-touch:swipedown="swipedown"
        :style="{'height':`${this.count * 100}%`,'marginTop':`${-100*(this.current-1)}vh`}">
    <page1 :current.sync="current"></page1>
    <page2 :current.sync="current"></page2> 

    <div class="page3">
      
    </div>
    <div class="page4">
      
    </div>
  </div>

</template>

<script>
import Page1 from './components/Page1'
import Page2 from './components/Page2'

export default {
  components: {
    Page1,
    Page2
  },
  data () {
    return {
      isPage1: false,
      isPage2: false,
      current: 1,
      count: 4
    }
  },
  methods: {
    swipedown () {
      if(this.current===1){
        console.log("最前面一张了");
      }else{
        this.current--;
      }
    },
    swipeup () {
      if(this.current===this.count){
        console.log("最后一张了");
      }else{
        this.current ++;
      }
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
.dir-area {
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  z-index: 99;
}
.dir-area .dir-one {
  background: url(./assets/images/dir.png) no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -19px;
  width: 39px;
  height: 18px;
}
.dir-area .dir-two {
  background: url(./assets/images/dir.png) no-repeat;
  background-size: 100%;
  position: absolute;
  top: 10px;
  left: 50%;
  margin-left: -19px;
  width: 39px;
  height: 19px;
}
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
  /*background: #000;*/
  position: relative;
}
.page2 {
  width: 100vw;
  height: 100vh;
  /*background: blue;*/
  position: relative;
}
.page3 {
  width: 100vw;
  height: 100vh;
  background: yellow;
}
.page4 {
  width: 100vw;
  height: 100vh;
  background: green;
}
</style>
