<template>
	<div class="loading">
        <div class="bg">
    		<div class="circle_process">
    			<div class="wrapper right">
    				<div class="circle rightcircle" id="rightcircle"></div>
    			</div>
    			<div class="wrapper left">
    				<dic class="circle leftcircle" id="leftcircle"></dic>
    			</div>
    		</div>
    		<div class="percent">
    			<span v-text="percent"></span>
    		</div>
        </div>
        <div class="loading-title1"></div>
        <div class="loading-title2"></div>
	</div>
</template>

<script>

import loading from '../assets/images/loading.png';
import loading_title1 from '../assets/images/loading_title1.png';
import loading_title2 from '../assets/images/loading_title2.png';
import mask from '../assets/images/mask.png';
import music_icon from '../assets/images/music_icon.png';
import music_play from '../assets/images/music_play.png';
import music_stop from '../assets/images/music_stop.png';
import p1_bg from '../assets/images/p1_bg.png';
import p1_circle from '../assets/images/p1_circle.png';
import p1_desc from '../assets/images/p1_desc.png';
import p1_desc_bottom from '../assets/images/p1_desc_bottom.png';
import p1_desc_dress_bottom from '../assets/images/p1_desc_dress_bottom.png';
import p1_desc_dress_top from '../assets/images/p1_desc_dress_top.png';
import p1_desc_top from '../assets/images/p1_desc_top.png';
import p1_light from '../assets/images/p1_light.png';
import p1_line from '../assets/images/p1_line.png';
import p1_logo from '../assets/images/p1_logo.png';
import p1_logo_left from '../assets/images/p1_logo_left.png';
import p1_logo_right from '../assets/images/p1_logo_right.png';
import p1_next from '../assets/images/p1_next.png';
import p1_title1 from '../assets/images/p1_title1.png';
import p1_title2 from '../assets/images/p1_title2.png';
import p2_1935 from '../assets/images/p2_1935.png';
import p2_1935_text from '../assets/images/p2_1935_text.png';
import p2_2016 from '../assets/images/p2_2016.png';
import p2_2016_text from '../assets/images/p2_2016_text.png';
import p2_bg_left from '../assets/images/p2_bg_left.png';
import p2_bg_left_grid from '../assets/images/p2_bg_left_grid.png';
import p2_bg_right from '../assets/images/p2_bg_right.png';
import p2_bg_right_grid from '../assets/images/p2_bg_right_grid.png';
import p2_bottom from '../assets/images/p2_bottom.png';
import p2_light from '../assets/images/p2_light.png';
import p2_people from '../assets/images/p2_people.png';
import p2_progress from '../assets/images/p2_progress.png';
import p2_s1935 from '../assets/images/p2_s1935.png';
import p2_s1938 from '../assets/images/p2_s1938.png';
import p2_s1960 from '../assets/images/p2_s1960.png';
import p2_s1965 from '../assets/images/p2_s1965.png';
import p2_s1987 from '../assets/images/p2_s1987.png';
import p2_s2016 from '../assets/images/p2_s2016.png';
import p2_text from '../assets/images/p2_text.png';
import p2_time_base from '../assets/images/p2_time_base.png';
import p2_top from '../assets/images/p2_top.png';
import p2_top_bg from '../assets/images/p2_top_bg.png';
import p2_top_dress from '../assets/images/p2_top_dress.png';
import p2_top_dress2 from '../assets/images/p2_top_dress2.png';
import p2_up_text from '../assets/images/p2_up_text.png';
import p3_1968 from '../assets/images/p3_1968.png';
import p3_1968_text from '../assets/images/p3_1968_text.png';
import p3_2016 from '../assets/images/p3_2016.png';
import p3_2016_text from '../assets/images/p3_2016_text.png';
import p3_bg_left from '../assets/images/p3_bg_left.png';
import p3_bg_left_grid from '../assets/images/p3_bg_left_grid.png';
import p3_bg_right from '../assets/images/p3_bg_right.png';
import p3_bg_right_grid from '../assets/images/p3_bg_right_grid.png';
import p3_s1936 from '../assets/images/p3_s1936.png';
import p3_s1948 from '../assets/images/p3_s1948.png';
import p3_s1956 from '../assets/images/p3_s1956.png';
import p3_s1968 from '../assets/images/p3_s1968.png';
import p3_s1982 from '../assets/images/p3_s1982.png';
import p3_s2016 from '../assets/images/p3_s2016.png';
import p3_text from '../assets/images/p3_text.png';
import p4_1951 from '../assets/images/p4_1951.png';
import p4_1951_text from '../assets/images/p4_1951_text.png';
import p4_2016 from '../assets/images/p4_2016.png';
import p4_2016_text from '../assets/images/p4_2016_text.png';
import p4_bg_grid from '../assets/images/p4_bg_grid.png';
import p4_bg_left from '../assets/images/p4_bg_left.png';
import p4_bg_right from '../assets/images/p4_bg_right.png';
import p4_people from '../assets/images/p4_people.png';
import p4_people_left from '../assets/images/p4_people_left.png';
import p4_people_right from '../assets/images/p4_people_right.png';
import p4_text1 from '../assets/images/p4_text1.png';
import p4_text2 from '../assets/images/p4_text2.png';
import p4_title from '../assets/images/p4_title.png';
import p4_top from '../assets/images/p4_top.png';
import p5_bottom from '../assets/images/p5_bottom.png';
import p5_qq from '../assets/images/p5_qq.png';
import p5_qq_bottom from '../assets/images/p5_qq_bottom.png';
import p5_qq_light from '../assets/images/p5_qq_light.png';
import p5_title from '../assets/images/p5_title.png';
import p5_top from '../assets/images/p5_top.png';
import p6_bottom from '../assets/images/p6_bottom.png';
import p6_circle1 from '../assets/images/p6_circle1.png';
import p6_circle1_1 from '../assets/images/p6_circle1_1.png';
import p6_circle2 from '../assets/images/p6_circle2.png';
import p6_circle2_1 from '../assets/images/p6_circle2_1.png';
import p6_circle3 from '../assets/images/p6_circle3.png';
import p6_circle3_1 from '../assets/images/p6_circle3_1.png';
import p6_circle4 from '../assets/images/p6_circle4.png';
import p6_circle4_1 from '../assets/images/p6_circle4_1.png';
import p6_circle5 from '../assets/images/p6_circle5.png';
import p6_circle52 from '../assets/images/p6_circle52.png';
import p6_circle5_1 from '../assets/images/p6_circle5_1.png';
import p6_circle6 from '../assets/images/p6_circle6.png';
import p6_circle6_1 from '../assets/images/p6_circle6_1.png';
import p6_dress_circle1 from '../assets/images/p6_dress_circle1.png';
import p6_dress_circle2 from '../assets/images/p6_dress_circle2.png';
import p6_dw from '../assets/images/p6_dw.png';
import p6_line1 from '../assets/images/p6_line1.png';
import p6_line2 from '../assets/images/p6_line2.png';
import p6_line3 from '../assets/images/p6_line3.png';
import p6_line4 from '../assets/images/p6_line4.png';
import p6_line5 from '../assets/images/p6_line5.png';
import p6_text from '../assets/images/p6_text.png';
import p6_title from '../assets/images/p6_title.png';
import p6_title_left from '../assets/images/p6_title_left.png';
import p6_title_right from '../assets/images/p6_title_right.png';
import p7_bg from '../assets/images/p7_bg.png';
import p7_bottom from '../assets/images/p7_bottom.png';
import p7_button from '../assets/images/p7_button.png';
import p7_grid from '../assets/images/p7_grid.png';
import p7_light from '../assets/images/p7_light.png';
import p7_logo from '../assets/images/p7_logo.png';
import p7_text from '../assets/images/p7_text.png';
import p7_title from '../assets/images/p7_title.png';
import p7_top from '../assets/images/p7_top.png';
import p7_top_circle from '../assets/images/p7_top_circle.png';
import p7_top_line from '../assets/images/p7_top_line.png';
import p7_top_text from '../assets/images/p7_top_text.png';
import paint from '../assets/images/paint.jpg';

export default {
    data () {
        return {
            percent: '0%',
            rightcircle : document.getElementById('rightcircle'),
            leftcircle : document.getElementById('leftcircle')
        }
    },
    methods: {
        _circleProgress( w ){
            // console.log(rightcircle);
            var per = w * 3.6;
            if( per <= 180){
                rightcircle.style.cssText = "transform: rotate("+(-135+ w*3.6)+"deg)";
                leftcircle.style.cssText = "transform: rotate(-135deg)";
            }else {
                rightcircle.style.cssText = "transform: rotate(45deg)";
                leftcircle.style.cssText = "transform: rotate("+(-135+(per-180))+"deg)";
            }
        },
        _drawLoadProgress( w ){
            var temp = Math.floor(w * 100 ) >= 100 ? 100 : Math.floor(w* 100);
            this._circleProgress(temp);
            this.percent = temp + '%';
            console.log(this.percent);
        },
        _loadImages (pics,callback,len) {
            len = len || pics.length;
            if(pics.length){
                window._pandaImageLoaded = true;
                var IMG = new Image(),
                    picItem = pics.shift();
                if(window._pandaImageLoadArray){
                    window._pandaImageLoadArray = window._pandaImageLoadArray;
                }else {
                    window._pandaImageLoadArray = [];
                }
                window._pandaImageLoadArray.push(picItem);
                IMG.src = picItem;
                //从数组中取出的那一刻就开始变化滚动条
                // console.log(window._pandaImageLoadArray.length/len);
                // this._drawLoadProgress(window._pandaImageLoadArray.length/len);
                // 缓存处理
                if(IMG.complete){
                    window._pandaImageLoadArray.shift();
                    return this._loadImages(pics,callback,len);
                }else {
                    //加载处理
                    IMG.onload = function() {
                        window._pandaImageLoadArray.shift();
                        IMG.onload = null;
                    }
                    return this._loadImages(pics,callback,len);
                }
                return ;
            }
            if(callback) {
                this._loadProgress(callback,window._pandaImageLoadArray.length,len);
            }

        },
        _loadProgress(callback, begin, all){
            var self = this;
            var loadinterval = setInterval(function(){
                if(window._pandaImageLoadArray.length!=0 && window._pandaImageLoadArray.length != begin){
                    self._drawLoadProgress( (begin-window._pandaImageLoadArray.length)/all);
                }else if(window._pandaImageLoadArray.length==0 && _pandaImageLoaded){
                    self._drawLoadProgress(1);
                    console.log('进入回调函数中');
                    setTimeout(function(){
                        callback.call(self);
                    },500);
                    clearInterval(loadinterval);
                }
            },300);
        }
    },
    ready () {
        window._pandaImageLoaded = false;
        var pics = [
          loading,
          loading_title1,
          loading_title2,
          mask,
          music_icon,
          music_play,
          music_stop,
          p1_bg,
          p1_circle,
          p1_desc,
          p1_desc_bottom,
          p1_desc_dress_bottom,
          p1_desc_dress_top,
          p1_desc_top,
          p1_light,
          p1_line,
          p1_logo,
          p1_logo_left,
          p1_logo_right,
          p1_next,
          p1_title1,
          p1_title2,
          p2_1935,
          p2_1935_text,
          p2_2016,
          p2_2016_text,
          p2_bg_left,
          p2_bg_left_grid,
          p2_bg_right,
          p2_bg_right_grid,
          p2_bottom,
          p2_light,
          p2_people,
          p2_progress,
          p2_s1935,
          p2_s1938,
          p2_s1960,
          p2_s1965,
          p2_s1987,
          p2_s2016,
          p2_text,
          p2_time_base,
          p2_top,
          p2_top_bg,
          p2_top_dress,
          p2_top_dress2,
          p2_up_text,
          p3_1968,
          p3_1968_text,
          p3_2016,
          p3_2016_text,
          p3_bg_left,
          p3_bg_left_grid,
          p3_bg_right,
          p3_bg_right_grid,
          p3_s1936,
          p3_s1948,
          p3_s1956,
          p3_s1968,
          p3_s1982,
          p3_s2016,
          p3_text,
          p4_1951,
          p4_1951_text,
          p4_2016,
          p4_2016_text,
          p4_bg_grid,
          p4_bg_left,
          p4_bg_right,
          p4_people,
          p4_people_left,
          p4_people_right,
          p4_text1,
          p4_text2,
          p4_title,
          p4_top,
          p5_bottom,
          p5_qq,
          p5_qq_bottom,
          p5_qq_light,
          p5_title,
          p5_top,
          p6_bottom,
          p6_circle1,
          p6_circle1_1,
          p6_circle2,
          p6_circle2_1,
          p6_circle3,
          p6_circle3_1,
          p6_circle4,
          p6_circle4_1,
          p6_circle5,
          p6_circle52,
          p6_circle5_1,
          p6_circle6,
          p6_circle6_1,
          p6_dress_circle1,
          p6_dress_circle2,
          p6_dw,
          p6_line1,
          p6_line2,
          p6_line3,
          p6_line4,
          p6_line5,
          p6_text,
          p6_title,
          p6_title_left,
          p6_title_right,
          p7_bg,
          p7_bottom,
          p7_button,
          p7_grid,
          p7_light,
          p7_logo,
          p7_text,
          p7_title,
          p7_top,
          p7_top_circle,
          p7_top_line,
          p7_top_text,
          paint,
        ];
        this._loadImages(pics,function(){
            console.log('消失');
            this.$dispatch('isLoaded');
        })
    }
}
</script>

<style scoped>
.loading {
	width: 100vw;
	height: 100vh;
	background: linear-gradient(top , #03090F 0%, #000025 30%, #03090F 100%);
}
.bg {
    background-image: url(../assets/images/loading.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: 50%;
    top: 99px;
    width: 230px;
    height: 230px;
    margin-left: -115px;
}
.circle_process{
	position: absolute;
    width: 83px;
    height : 83px;
    left: 50%;
    top: 50%;
    margin-left: -39px;
    margin-top: -42px;
}
.circle_process .wrapper{
    width: 41.5px;
    height: 83px;
    position: absolute;
    top:0;
    overflow: hidden;
}
.circle_process .right{
    right: 1px;
}
.circle_process .left{
    left: 1px;
}
.circle_process .circle{
    width: 70px;
    height: 70px;
    border:6.25px solid transparent;
    border-radius: 50%;
    position: absolute;
    top:0;
    transform : rotate(-135deg);
    box-shadow: 0 0 10px #060754;
}
.circle_process .rightcircle{
    border-top:6.25px solid rgb(0,98,255);
    border-right:6.25px solid rgb(0,98,255);
    right:0;
    /*-webkit-animation: circle_right 5s linear infinite;*/
}
.circle_process .leftcircle{
    border-bottom:6.25px solid rgb(0,98,255);
    border-left:6.25px solid rgb(0,98,255);
    left:0;
    /*-webkit-animation: circle_left 5s linear infinite;*/
}
@-webkit-keyframes circle_right{
    0%{
        -webkit-transform: rotate(-135deg);
    }
    50%,100%{
        -webkit-transform: rotate(45deg);
    }
}
@-webkit-keyframes circle_left{
    0%,50%{
        -webkit-transform: rotate(-135deg);
    }
    100%{
        -webkit-transform: rotate(45deg);
    }
}
.percent {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -26px;
    margin-top: -25px;
    text-align: center;
    width: 60px;
    height: 50px;
}
.percent span {
    color: #52B1ED;
    font-weight: 900;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
}
.loading-title1 {
    background-image: url(../assets/images/loading_title1.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    width: 70.5px;
    height: 17px;
    left: 50%;
    margin-left: -35.25px;
    top: 330px;
}
.loading-title2 {
    background-image: url(../assets/images/loading_title2.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    width: 263.5px;
    height: 24.5px;
    left: 50%;
    top: 365.15px;
    margin-left: -131.75px
}
/*.bg {
   opacity: 0;
   -webkit-animation: rotate-circle 3s linear 1s infinite;
}
@keyframes rotate-circle {
    0% {
        opacity: 1;
        transform: rotate(0deg);
    }
    100% {
        opacity: 1;
        transform:  rotate(360deg);
    }
}*/


@media only screen
and (max-device-width : 350px){
    .loading {
        position: relative;
        top: -80px;
    }
}
</style>



<!-- 第一张：背景不变，还原图条
第二张：打开显示logo 上下条从中间打开 横着的条纹要抖动 探索和实现时间有深色的按钮
每个小的圆圈要先闪动 左下角2016不需要
第三张：快速打开  左脸出 右脸出 人走动  人走（同步的时候亮光）
网格移动 年代渐变
第四张：和第三张一张
第五张：滚动打开 然后条纹闪 动画完了才开始显示向上的按钮
第六张：企鹅3D旋转 炫光闪动闪一次
第七张：三个粗的线要旋转，同时出现圆圈，线要
第八张：要改 -->
