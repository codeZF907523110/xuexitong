<template>
<transition name="show">
    <div class='side'>
    <div class='sidebar'>
      <div class='touxiangbar'>
          <div class='bartouxiang'>
              <img v-if='$store.state.userinfo.name' :src="$store.state.userinfo.headphoto" alt="">

              <img v-else src="./morentou.jpg" alt="">
          </div>
          <div class='barusername'>
              <span v-if='!$store.state.userinfo.name'>立即登录{{}}</span>
              <span v-else>{{$store.state.userinfo.name}}</span>
          </div>
         
      </div>
       <div class='barzujian1'>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>

       </div>
        <div class='barzujian1 barzujian2'>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
        </div>
        <div class='barzujian1 barzujian3'>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
            <sidebar-li :tubiaosrc="require('./message.png')" :tubiaotext="'我的消息'"></sidebar-li>
        </div>
          <div class='barzujian1 barzujian4' @click='quitelogin'>
              <!-- <div>aaaa</div> -->
            <sidebar-li :tubiaosrc="require('./message.png')" tubiaotext="退出登录"></sidebar-li>
            
        </div>
       
  </div>

  <div class='sidebarwai' @click="sideshow">

  </div>
</div>
</transition>

  
</template>

<script>
import sidebarLi from './sidebar-li.vue'
export default {
  components: { sidebarLi },
    data(){
        return{
            touxiangurl:""
        }
    },
    methods:{
        sideshow(){
            this.$store.state.sideshow=false
        },
        quitelogin(){
            console.log(this.$store.state.uerinfo);
            document.cookie = "name=" + '' + ";expires=Thu," +'-1';
            // console.log(document.cookie);
            this.$store.state.loginshow = true
            this.$store.state.isshow=false
            this.$store.state.ischangecolor=true
            this.$store.state.userinfo={}
            console.log(this.$store.state.userinfo);
            console.log(this.$store.state.userinfo.name);
        }
    }
}
</script>

<style>
.show-enter-active,.show-leave-active{
     transition:all 2s;
    }
.show-enter,.show-leave-to{
    margin-left: -100vh;
}
.show-enter-to,.show-leave{
     margin-left:0px;
}
.quitelogin{
    height: 50px;
    width: 100%;
    color: black;
    font-size: 18px;
    line-height: 50px;
}
.side{
    overflow-Y:auto ;
    height: 100%;
     position: fixed;
     z-index: 9999999;
    top: 0;
    width:100%;
    transition: all .2s ease;
    

}
.sidebarwai{
    float: left;
    width:20% ;
    height: 100%;
    
}
.sidebar{
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-color: rgb(238, 238, 238);
    float: left;
    /* display: none; */
    width: 80%;
}
.touxiangbar{
    width: 95%;
    height: 40px;
    border-bottom: 1px solid rgb(216, 216, 216);
    float: left;
    margin: 0 auto;
    margin-bottom: 25px;
    /* position: relative; */
    
}
.touxiangbar img{
    display: block;
    width: 30px;
    height:30px;
    position: absolute;
    border-radius: 50%;
    top:50%;
    transform: translateY(-50%);
    /* margin: 0 auto; */
    margin-left: 10px;
}
.bartouxiang{
    position: relative;
    float: left;
    width: 60px;
    height: 100%;
    /* display: inline-block; */
}
.barusername{
    float: left;
    width: 40%;
    height: 100%;
    line-height: 65px;
    font-size: 18px;
    /* margin-left: 5px; */
    color: black;
    cursor: pointer;
}
.barusername span{
    display: block;
    height: 100%;
    line-height: 40px;
    
}
.barzujian4{
    height: 50px;
    margin-bottom: 20px!important;
}
.barzujian1{
    /* position: absolute; */
    width: 88%;
    height: 10%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    margin: 0 auto;
    margin-top:30px;
    overflow: hidden;
}
.barzujian2{
    height: 20%;
}
.barzujian3{
    height: 20%;
    /* margin-bottom: 40px; */
}
</style>