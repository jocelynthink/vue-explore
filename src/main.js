import Vue from 'vue'
import App from './App'

var VueTouch = require('vue-touch')
Vue.use(VueTouch)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

//微信共享
var wechat =
{
  imgUrl:'https://hr.m.tencent.com/explorer/images/weixin.png',
  lineLink : window.location.origin + window.location.pathname,
  shareTitle : 'CXO约你看未来：Tencent Explorer第二弹火热招募',  //分享title
  shareDesc :'申请赴硅谷探索，下一位探索者是你么？',
  appid :'', //apiID，可留空
  init:function()
  {
    // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 发送给好友
      WeixinJSBridge.on('menu:share:appmessage', function(argv){
        wechat.shareFriend();
      });
      // 分享到朋友圈
      WeixinJSBridge.on('menu:share:timeline', function(argv){
        wechat.shareTimeline();
      });
    }, false);
  },
  shareFriend:function()
  {
    WeixinJSBridge.invoke('sendAppMessage',{
      "appid": wechat.appid,
      "img_url": wechat.imgUrl,
      "img_width": "140",
      "img_height": "140",
      "link": wechat.lineLink,
      "desc": wechat.shareDesc,
      "title": wechat.shareTitle
    }, function(res) {
      //_report('send_msg', res.err_msg);
    })
  },
  shareTimeline:function()
  {
    WeixinJSBridge.invoke('shareTimeline',{
      "appid": wechat.appid,
      "img_url": wechat.imgUrl,
      "img_width": "140",
      "img_height": "140",
      "link": wechat.lineLink,
      "desc": '',
      "title":wechat.shareTitle
    }, function(res) {
      //_report('timeline', res.err_msg);
    });
  }
}
wechat.init();
