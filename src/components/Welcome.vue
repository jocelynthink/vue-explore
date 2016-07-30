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
	</div>
</template>

<script>
import loading from "../assets/images/loading.png"
import p1_bg from "../assets/images/p1_bg.png"

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
            console.log(rightcircle);
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
            'http://d.ifengimg.com/mw978_mh598/p3.ifengimg.com/a/2016_31/20e4745e2fe9334_size113_w962_h641.jpg',
            p1_bg,
            'http://d.ifengimg.com/mw978_mh598/p2.ifengimg.com/a/2016_31/e7381041f8b11e9_size103_w962_h642.jpg',
            p1_bg,
            p1_bg,
            p1_bg,
            p1_bg,
            'http://d.ifengimg.com/mw978_mh598/p2.ifengimg.com/a/2016_31/694309d2c5802ad_size126_w962_h608.jpg'
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
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 26px;
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