<template>
  <div class="dynamicitem">
    <div class="userinfo">
      <div class="touxiangbox" @click="getuserid">
        <img :src="fabuitemli.headphoto" alt="" />
      </div>
      <div class="userbox">
        <div class="usernamebox">
          <span>{{fabuitemli.auther}}</span>
          <img src="" alt="" />
        </div>
        <div class="releasetime">
          <span>{{fabuitemli.createdtime}}小时前</span>
          <span class="userfrom">来自:</span>
        </div>
      </div>
    </div>
    <div class='releaseleft'>
      <div class="releasetitle">
      <span>
          <span v-html='fabuitemli.content'></span>
      </span>
      </div>
      <a  class='lookglobo' v-show='true' @click="lookgolobo ">...查看全部</a>
      <div  class="releaseimg" v-show='fabuitemli.cover'>
        <img class='fenmian' :src="fabuitemli.cover" alt="" />
        <div class='showvideo' v-show='false'>
            <img src="./video.png" alt="">
        </div>
        <div v-show='true' class="releaseimgtext">
          <div class="imgtext-top">
            <div class="imgtext-top-left" v-if='fabuitemli.fabuimgleft'>{{fabuitemli.fabuimglaft}}</div>
            <div class="imgtext-top-right" v-show='false'>文章</div>
          </div>
          <div class="imgtext-bottom" v-show='!fabuitemli.fabuimgtitle'>
            {{fabuitemli.title}}
          </div>
        </div>
        <div class="releaseimgtext" v-show='true'>
          <div class="imgtext-bottom imgtexttwo" v-show='fabuitemli.playvolume'>
            <span>{{fabuitemli.playvolume}}次播放</span>
            <span class="imgtexttwo-right">{{fabuitemli.duration}}</span>
          </div>
        </div>
      </div>
      <div class='useractive'>
          <div class='forward'>
              <img src="./forward.png" alt="">
              <span>{{fabuitemli.comment.length}}</span>
          </div>
          <div class='comment' @click="$router.push('/textarea/wenzhang/'+fabuitemli._id)">
              <img src="./comment.png" alt="">
              <span>{{fabuitemli.comment.length}}</span>
          </div>
          <div class='fabulous' @click='like'>
              <img src="./Collection.png" alt="" v-if='!isliked'>
              <img src="./Collection1.png" alt="" v-else>
              <span>{{fabuitemli.likes.length}}</span>
          </div>
         
      </div>
    </div>
     
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      wenzhang:{},
      autherid:'',
      isliked:false
    }
  },
  props:{
    fabuitemli:Object
  },
  methods:{
    lookgolobo(){
      this.$router.push('/textarea/wenzhang/'+this.fabuitemli._id)
      this.$store.state.wzneirong=this.fabuitemli
    },
    like() {
      setTimeout(() => {
            let FormData = {};
          FormData.name = this.$store.state.userinfo.name;
          FormData.id = this.fabuitemli._id
          
          if (this.isliked) {
            FormData.type = 11;
            // 2回复点赞
          } else {
            FormData.type = 10;
            // 3回复取消赞
          }
          this.a(FormData);
      }, 200);
     
    },
    islike() {
      let arr = this.fabuitemli.likes;
      if (arr.length != 0) {
        for (let i of arr) {
          if (i == this.$store.state.userinfo.name) {
            this.isliked = true;
          } else {
            this.isliked = false;
          }
        }
      } else {
        this.isliked = false;
      }
    },
    a(FromData) {
      axios.post("/like", FromData).then((res) => {
        this.fabuitemli.likes = res.data;
        this.islike();
      });
    },
    getuserid(){//根据文章的name获取作者的id
      axios.post('/auto',{
        name:this.fabuitemli.auther
      }).then(res=>{
        console.log(res.data,'aaa');
        this.autherid=res.data._id
        console.log(this.autherid,'bbb');
        this.$router.push('/homepage'+'/'+this.autherid)
      })
    }
  },
  created(){
    this.islike()
  }
};
</script>

<style>
.lookglobo{
  cursor: pointer;
}
.releaseleft{
  margin-left: 60px;
}
.useractive {
  height: 40px;
  margin-bottom: 2px;
}
.useractive img {
  width:25px;
  cursor: pointer;
  float: left;
  margin-top: 8px;
}
.useractive div {
  float: left;
  height: 100%;
  line-height: 40px;
  width: 80px;
}
.useractive div span {
  display: block;
  float: left;
  margin-left: 5px;
}
.showvideo {
  z-index: 999999999999999;
  cursor: pointer;
  width: 67.5px;
  height: 67.5px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  float: left;
  left: 50%;
  transform: translateX(-50%);
  top: 35%;
}
.dynamicitem{
    border-bottom: 1px solid rgb(241, 241, 241);
    margin-top: 10px;
}
.showvideo img {
  width: 80%;
  height: 80%;
  display: block;
  /* margin: 0 auto; */
  /* background-color: white; */
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  top: 10%;
}
.imgtexttwo-right {
  float: right;
}
.imgtexttwo {
  margin-top: 70px;
}
.releaseimgtext {
  z-index: 99999;
}

.touxiangbox {
  width: 40px;
  height: 40px;
  float: left;
  cursor: pointer;
}
.touxiangbox img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.usernamebox {
  font-size: 18px;
}
.usernamebox span {
  cursor: pointer;
}
.releasetime {
  font-size: 15px;
  color: #939393;
}
.userfrom {
  margin-left: 10px;
}
.userbox {
  padding-left: 40px;
  margin-left: 15px;
}
.releasetitle {
  max-height:200px;
  font-size: 21px;
  line-height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.releasetitle img{
  display: none;
}
.releaseimg {
  width: 400px;
  height: 225px;
  overflow: hidden;
  margin-top: 20px;
  position: relative;
}
.fenmian {
  width: 100%;
  position: relative;
  float: left;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.releaseimgtext {
  width: 85%;
  height: 85%;
  position: absolute;
  margin-top: 0;
  float: left;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 18px;
}
.imgtext-top-right {
  float: right;
  font-size: 13px;
  cursor: pointer;
}
.imgtext-top-left {
  float: left;
}
.imgtext-top {
  margin-bottom: 20px;
  height: 40px;
  line-height: 40px;
}
.imgtext-bottom {
  /* height: 100%; */
  padding-top: 35%;
  font-size:20px;
}
</style>