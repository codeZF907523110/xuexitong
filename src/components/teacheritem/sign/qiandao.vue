<template>
  <div class='setqiandao'>
      <signtopitem :actionname="'签到'" :actiondata="'04-20 20:05'"></signtopitem>
      <div class='qiandaoboi'>
        <div class='qiandaobotop'>
          <span :class='{qianxiahua:isclickqian}' @click='qianclick(0)'>已签(1)</span>
          <span :class='{qianxiahua:!isclickqian}' @click='qianclick(1)'>未签(1)</span>
        </div>
        <div class='yiweiqian'>
            <span class='qiantexts'>点击列表可修改学生签到状态</span>
        </div>
        <div class='qiandaostu'>
          <div class='qiandaostus' v-for="(item,index) in 9" @click='stuqian(index)'>
              <img src="../touxiang.jpg" alt="">
              <span class='qiandaoname'>戴勤</span>
              <div class='qiansturight'>
                <span class='qiansturight1'>已签</span>
                <span class='qiansturight2'>04-20 19:35</span>
              </div>
          </div>
        </div>
        
      </div>
      <transition name="fade">
          <div class='qiandaodi' v-show='qiandaostushow' @click='qiandaodiclick'>
              <div class='stuqianacti' @click.stop>
                <div class='stuqiantop'>
                  <span>修改状态</span>
                  <i class='el-icon-close' @click='qiandaodiclick'></i>
                </div>
                <div class='stuqianacitem' v-for="(item,index) in qiandaoitem" >
                  {{item}}
                </div>
              </div>
          </div>
          
      </transition>
  </div>
</template>

<script>
import signtopitem from './signtopitem.vue'
export default {
  data(){
    return{
      isclickqian:true,
      qiandaostushow:false,
      qiandaoitem:['签到','事假','病假','迟到','缺勤','早退']
    }
  },
  components: { signtopitem },
  methods:{
    qianclick(index){
      if(!index){
        this.isclickqian=true
      }else{
        this.isclickqian=false
      }
    },
    stuqian(index){
      this.qiandaostushow=true
      document.body.style.overflow='hidden'
    },
    qiandaodiclick(){
      this.qiandaostushow=false
      document.body.style.overflow=''
    }
  }
}
</script>

<style>
.stuqianacitem{
  width: 100%;
  text-align: center;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: #181E33;
  cursor: pointer;
}
.stuqianacitem:hover{
   background-color: rgb(241, 250, 255);
   color: #3B90FF;
   transition: all 0.4s;
}
.stuqiantop i{
  font-size: 18px;
  float: right;
  margin-right:40px;
  margin-top: 22px;
  cursor: pointer;
  font-weight: bold;
  color: #A8A8B3;
}
.stuqiantop{
  width: 100%;
  height: 60px;
  box-shadow: inset 0 -1px 0 0 rgba(242,242,242,0.80);
  line-height: 60px;
  font-size: 18px;
  margin-left: 20px;
}
.stuqianacti{
  width: 320px;
  height: 350px;
  background-color: white;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.qiandaodi{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
}
.qiansturight1{
  margin-right: 20px;
  font-size: 12px;
  color: #A8A8B3;
}
.qiansturight2{
  margin-right: 20px;
  font-size: 12px;
  color: #A8A8B3;
}
.qiansturight{
  float: right;
}
.qiandaoname{
  margin-left: 15px;
}
.qiandaostus img{
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-left: 30px;
}
.qiandaostus{
  height:79px;
  width: 100%;
  line-height: 79px;
  /* border:1px solid red; */
  cursor: pointer;
  border-bottom: 1px solid #F2F2F2;
  margin-top: 3px;
}
.qiandaostus:hover{
  background-color: rgb(241, 250, 255);
  transition: all 0.4s;
}
.qiantexts{
  font-size: 14px;
    color: #A8A8B3;
}
.yiweiqian{
  width: 100%;
  height: 64px;
  /* border:1px solid red; */
  line-height: 64px;
  text-align: center;
}
.qiandaobotop{
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #F2F2F2;
  line-height: 64px;
}
.qiandaobotop span{
  margin-left: 20px;
  font-size: 16px;
  color: #A8A8B3;
  cursor: pointer;
  display: block;
  float: left;;
  height: 50px;
  
}
.qianxiahua{
  border-bottom: 5px solid #3B90FF;
  color: #333!important;
  font-weight: bold;
}
.qiandaoboi{
  width: 1150px;
  min-height: 420px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  margin-top: 20px;
}
</style>