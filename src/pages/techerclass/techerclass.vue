<template>
  <div class='techerclass'>
      <header-top></header-top>
      <div class='classtop'>
          <div class='classtopimg'>
              <img src="../../assets/img/itemimg.jpg" alt="">
          </div>
          <div class='classtoptitle'>
              <span>流觞曲水</span>
              <i class="el-icon-edit"></i>
              <span class='spana'>我是课程介绍哈哈哈哈哈哈哈哈哈</span>
          </div>
          <div class='classtopnav'>
              <ul>
                  <li v-for='(item,index) in classtoplist' :class='{activetop:isactive==index}' @click='gotopath(index)'>{{item}}</li>
              </ul>
          </div>
          <div class='quitclass'>
              退出课程
          </div>
      </div>
        <video class="f"  id="bgvid" playsinline="" autoplay muted loop="">
            <source src="../../assets/img/yinghua.mp4" type="video/mp4">
        </video>
        <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  data(){
      return{
          classtoplist:['章节','班级','讨论','教案','作业','考试','题库'],
          classpath:['teaching','sign','discuss','preview','task','exam','topic'],
          isactive:0
      }
  },
  methods:{
      gotopath(index){
          this.$router.push('/techerclass/'+this.classpath[index])
          this.isactive=index
      }
  },
  components: { HeaderTop },
  created(){
      for(var i in this.classpath){
          if(this.$route.path=='/techerclass/'+this.classpath[i]){
              this.isactive=i
          }
      }
  }

}
</script>

<style>
.activetop{
    border-bottom: 3px solid white;
}
.classtoptitle .spana{
    font-size: 15px;
    margin-left: 10px;
    width: 300px;
    overflow: hidden;
}
.quitclass{
    width: 80px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    position: absolute;
    right: 15px;
    font-size: 18px;
    color: white;
    border:1px solid white;
    bottom: 8px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
}
.quitclass:hover{
    background-color: white;
    color: #007aff;
    transition: all 0.5s;
}
.classtoptitle{
    font-size: 30px;
    color: white;
    font-weight: bold;
    margin-top: 50px;
    margin-left:210px;
}
.classtoptitle i{
    margin-left: 10px;
    cursor: pointer;
}
.classtoptitle i:hover{
    color: #00a1d6;
    transition: all 0.5s;
}
.classtopimg{
    width: 110px;
    height: 140px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    left: 70px;
    overflow: hidden;
    border-radius: 5px;
}
.classtopimg img{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.classtopnav ul{
    display: flex;
    list-style: none;
}
.classtopnav ul li{
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 20px;
    height: 45px;
    margin-left: 50px;
}
.classtopnav ul li:hover{
    color: white;
    border-bottom: 3px solid white;
    transition: all 0.3s;
}
.classtopnav{
    width: 75%;
    height: 50px;
    /* border:1px solid red; */
    position: absolute;
    bottom: 0;
    left:140px;
    line-height: 50px;
}
.classtop{
    position: relative;
    width: 1150px;
    height: 156px;
    border:1px solid rgb(255, 255, 255);
    border-radius: 10px;
    margin: 0 auto;
    background-color: rgba(234, 0, 255, 0.5)
}
</style>
<style>
  
  .f{
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -9999;
    transform: translateX(-50%) translateY(-50%);
    transition: 1s opacity;
	background-color:skyblue;
	

  }
   .v{
     position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -10000; 
	background-color:skyblue;

  

   }
  .v:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1000;
    top: 0;
    left: 0;
    background: rgba(90,20,10,.2);
   
   
   } 
  </style>
