<template>
  <div>
      <header-top></header-top>
    <div class="messagewai"></div>
    <div class="message">
      <div class="messageleft">
        <div class="messagetitle">消息中心</div>
        <ul class="messageulli">
          <li v-for="(item, index) in messagelist" @click="ulliclick(index)" :class='{messagecolor:$route.path==messagepath[index]}'>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="messageright">
        <div class="right-title">
          <span>{{messagetitle}}</span>
        </div>
        <div class="right-bot">
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
export default {
  components: { HeaderTop },
  data() {
    return {
      messagelist: ['全部消息',"回复我的", "收到的赞", "系统通知", "我的消息"],
      messagepath:['./allmessage','./replyme','./myfabulous','./systemmessage','./mymessage'],
      messagetitle:''
    };
  },
  methods:{
      ulliclick(index){
          this.$router.push(this.messagepath[index])
      },
      gettext(){
          let messpath=this.$route.path
      if(messpath=='/message/allmessage'){
          this.messagetitle='全部消息'
      }else if(messpath=='/message/replyme'){
          this.messagetitle='回复我的'
      }else if(messpath=='/message/myfabulous'){
          this.messagetitle='收到的赞'
      }else if(messpath=='/message/systemmessage'){
          this.messagetitle='系统通知'
      }else if(messpath=='/message/mymessage'){
          this.messagetitle='我的消息'
      }
      }
  },
  mounted(){
      this.gettext()
      
  },
  updated(){
     this.gettext()
  }
};
</script>

<style>
.messagecolor{
    color:#2faee3!important ;
}
.message{
    margin-top: 20px;
}
.messagewai{
    width: 120%;
    height: 100vh;
    background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;
    position: fixed;
    z-index: -999;
}
.body {
  background-image: url("./backgr.jpg");
}
.right-bot {
  width: 983px;
  min-height: 304px;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: 0px 0px 7px rgb(196, 196, 196);
  background-color: white;
  border-radius: 8px;
}
.right-title {
  width: 983px;
  height: 42px;
  margin: 0 auto;
  color: #666;
  line-height: 50px;
  font-size: 15px;
  padding-left: 20px;
  box-shadow: 0px 0px 5px rgb(155, 155, 155);
  background-color: white;
  border-radius: 8px;
}
.messageright {
  width: 1000px;
  float: left;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
}
.messageulli {
  margin-top: 20px;
}
.messageulli li {
  /* display: block; */
  height: 40px;
  line-height: 40px;
  color: #6b757b;
  font-weight: 600;
  cursor: pointer;
}
.messageulli li:hover {
  color: #2faee3;
}

.message {
  width: 1143px;
  height: 100vh;
  margin: 0 auto;
}
.messageleft {
  width: 140px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  float: left;
}
.messagetitle {
  font-size: 14px;
  font-weight: 700;
  width: 100px;
  margin: 0 auto;
  text-align: center;
  margin-top: 15px;
}
</style>