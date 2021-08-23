<template>
  <div class='Videoplayback'>
      <header-top></header-top>
      <div class='videoplayback'>
          <div class='videoplayback-li'>
              <div class='videoplayback-left'>
                  <div class='kechengtext'>
                      <div class='kechengtitle'>
                          <span>萌萌手抓饼</span>
                      </div>
                      <div class='kecheng-data'>
                          <span>4.8万播放量</span>
                          <span>2021.01.01</span>
                      </div>
                  </div>
                  <div class='videovison'>
                      <video-player  class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions"
                      ></video-player>
                  </div>
                  <div class='toolbar'>
                      <div class='dianzan'>
                          <img v-if="!isdianzan" src="./dianzan1.png" @click='dianzans' alt="">
                          <img v-else src="./dianzan.png" @click='dianzans' alt="">
                          <span>{{dianzanshu}}</span>
                      </div>
                      <div class='dianzan'>
                          <img v-if="isshoucang" src="./shoucang.png" @click='shoucangs' alt="">
                          <img v-else src="./shoucang1.png" @click='shoucangs' alt="">
                          <span>{{shoucangshu}}</span>
                      </div>
                  </div>
                  <div class='copyright'>
                      <img src="./jinzhi.png" alt="">
                      未经作者授权，禁止转载
                    </div>
                  <div class='kexinxi'>
                        <p>{{kexinxi}}</p>
                  </div>
                  <div class='Commentarea'>
                      <div class='Commenttitle'>
                          {{Commentshu}}评论
                      </div>
                      <div class='commentarea'>
                          <div :class="{changeblue:textblue}" class="Heatranking" @click="changeb">
                              按热度排序
                          </div>

                          <div class='Chronologicalorder' :class="{changeblue:!textblue}" @click="changeb">
                              按时间排序
                          </div>
                      </div>
                  </div>
              </div>
              <div class='videoplayback-right'></div>
          </div>
      </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import HeaderTop from 'components/HeaderTop/HeaderTop.vue'
import 'video.js/dist/video-js.css'
export default {
    data(){
        return{
            playerOptions : {
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                src: '',  // 路径
                type: 'video/mp4'  // 类型
                }, {
                src: '',
                type: 'video/webm'
                }],
                poster: "../../static/images/test.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
                }
            },
            isdianzan:false,
            dianzanshu:2222,
            shoucangshu:2222,
            isshoucang:false,
            kexinxi:'啤酒饮料矿泉水喽',
            Commentshu:9999,
            textblue:true
        }
    },
    methods:{
        dianzans(){
            this.isdianzan=!this.isdianzan
            if(this.isdianzan){
                this.dianzanshu++
            }else{
                this.dianzanshu--
            }
        },
        shoucangs(){
            this.isshoucang=!this.isshoucang
            if(this.isshoucang){
                this.shoucangshu++
            }else{
                this.shoucangshu--
            }
        },
        changeb(){
            this.textblue=!this.textblue
        }
    },
    components:{HeaderTop,videoPlayer}
}
</script>

<style>
.commentarea{
    height: 37px;
    width: 100%;
    display: flex;
    line-height: 37px;
    border-bottom:1px solid  rgb(211, 211, 211);
    font-size: 18px;
    
}
.Chronologicalorder{
    cursor: pointer;
}
.Chronologicalorder:hover{
    color: #00a1d6;
}
.Heatranking:hover{
    color: #00a1d6;
}
.Heatranking {
    cursor: pointer;
    height: 100%;
    width: 100px;
}
.changeblue{
    color: #00a1d6;
    border-bottom: 2px solid #00a1d6;
}
.kexinxi{
    min-height: 25px;
    border-bottom:1px solid  rgb(211, 211, 211);
}
.copyright{
    margin-right: 20px;
    display: inline-block;
    font-size: 10px;
    height: 25px;
    line-height: 25px;
    color: #999;
}
.copyright img{
    width: 10px;
    /* border:1px solid red; */
    margin-top: -3px;
}
.dianzan{
    /* margin-left: 20px; */
    width: 100px;
}
.toolbar{
    /* width: 100%; */
    height: 41px;
    line-height: 41px;
    display: flex;
    margin-top: 10px;
    border-bottom:1px solid  rgb(211, 211, 211);
}
.toolbar span{
    height:41px;
    line-height: 41px;
    display: block;
}
.toolbar img{
    width: 30px;
    float: left;
    }
.videovison{
    margin-top: 10px;
}
.kecheng-data{
    font-size: 15px;
    color: rgb(201, 201, 201);
    }
.kechengtitle{
    font-size: 22px;
    height:50px;
    line-height:50px ;
}
.videoplayback-right{
    width: 320px;
    height: 100%;
    float: left;
}
.videoplayback-left{
    width: 638px;
    height: 100%;
    float: left;
}
.videoplayback-li{
    width:1124px ;
    margin: 0 auto;
    height: 100%;
}
.videoplayback{
    width: 100%;
    height: 1000px;
}
</style>