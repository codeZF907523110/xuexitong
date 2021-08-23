<template>
  <div class='readwenzhang'>
      <header-top></header-top>
      <div class='wz-left'>
          <div class='wz-user'>
              <div class='wz-touxiang'>
                  <img :src="wenzhangxinxi.headphoto" alt="">
              </div>
              <div class='wz-userinfo'>
                  <div class='wz-username'>{{wenzhangxinxi.auther}}</div>
                  <div class='wz-userdate'>
                      <span>2021年03月14日</span>
                      <span>阅读 220</span>
                  </div>
              </div>
              <div class='wz-guanzhu' v-if='!isguanzhu' @click="like()">
                  关注
              </div>
              <div class='wz-guanzhu' v-else @click="like()">
                  取消关注
              </div>
          </div>
          <div class='wz-neirong'>
              <div class='wz-title'>
                  {{wenzhangxinxi.title}}
              </div>
              <div class='wz-fengmian'>
                  <img :src="wenzhangxinxi.cover" alt="">
              </div>
              <div class='wz-neirong' v-html='wenzhangxinxi.content'>
                
              </div>
          </div>
          <comment></comment>
      </div>
      <div class='wz-right'>
          <div class='aboutzuozhe'>
              <div class='abouttext'>关于作者</div>
              <div class='aboutneirong'>
                  <div class='abouttouxiang'>
                    <img :src="wenzhangxinxi.headphoto" alt="">
                  </div>
                  <div class='aboutuser'>
                    <div class='aboutusername'>
                            {{wenzhangxinxi.auther}}
                    </div>
                    <div class='aboutuserzhiye'>
                        Android软件开发工程师
                    </div>
                  </div>
              </div>
              <div class='stat'>
                  <div class='stat-item' >粉丝数:<span v-if='auther1.fans'>{{auther1.fans.length}}</span></div>
                  <div class='stat-item'>关注数:<span v-if='auther1.attention'>{{auther1.attention.length}}</span></div>
                  <!-- <div class='stat-item'>获得点赞:20000</div> -->
              </div>
              
          </div>
          <div class='tuijie'>
                  <div class='tuijietitle'>
                      相关文章
                  </div>
              </div>
      </div>
  </div>
</template>

<script>
import Comment from '../../components/wzpl/Comment.vue'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import axios from 'axios'
export default {
    components:{HeaderTop, Comment},
    data(){
        return{
            wenzhangxinxi:{},
            auther1:{},
            isguanzhu:false
        }
    },
    created(){
      axios.post('/getwenzhang',{
        id:this.$route.params.id
      }).then(res=>{
          console.log(res.data,'aaa');
        this.wenzhangxinxi=res.data
        this.$store.state.wenzhang = res.data
         axios.post('/auto',{
        name:this.wenzhangxinxi.auther
      }).then(res=>{
          console.log(res.data,'sss');
        this.auther1=res.data
      })
      })
      console.log();
     
      }
      
      
    
}
</script>
    
<style>
.wz-fengmian img{
    display: block;
    margin: 0 auto;
}
.tuijie{
    margin-top: 15px;
    height: 462px;
    width: 100%;
    box-shadow: 0px 0px 7px rgb(212, 212, 212);
}
.aboutzuozhe{
    border-bottom: 1px solid rgb(236, 236, 236);
    box-shadow: 0px 0px 7px rgb(212, 212, 212);
}
.stat-item{
    height: 26px;
    line-height: 26px;  
    /* text-align: center; */
    color: #000;
    font-weight: 600;
    cursor: pointer;
}
.stat{
    /* margin-top:10px!important; */
    margin-left: 30px!important;
}
.aboutuser{
    float: left;
    margin-left: 20px;
   
}
.aboutneirong{
    margin-top: 15px!important;
}
.aboutuserzhiye{
    width: 140px;
    margin-top:3px;
    font-size: 16px;
    color: #72777b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.aboutneirong{
    height: 50px;

}
.aboutneirong img{
    width: 50px!important;
}
.aboutusername{
    padding-top: 5px;
    
}
.abouttext,.aboutneirong,.stat,.tuijietitle{
    width: 90%;
    margin: 0 auto;
}
.abouttext,.tuijietitle{
    height: 42px;
    line-height: 42px;
    color:#333;
    border-bottom: 1px solid rgb(236, 236, 236);
}
.wz-neirong{
    width: 90%;
    margin: 0 auto;
    line-height:2;
}
.wz-title{
    width: 90%;
    height: 45px;
    margin: 0 auto;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 45px;
    text-align: center;
}
.wz-guanzhu{
    width: 55px;
    height: 26px;
    font-size: 13px;
    border: 1px solid #6cbd45;
    color: #6cbd45;
    background-color: #fff;
    text-align: center;
    line-height: 26px;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
}
.wz-userinfo{
    width: 500px;
    float: left;
    height: 100%;
    margin-left: 15px;
}
.wz-userdate{
    font-size: 13px;
    color: #909090;
}
.wz-username,.aboutusername{
    font-size: 15px;
    font-weight: 700;
    height: 20px;
    color: #333;
    cursor: pointer;
}
.wz-touxiang,.abouttouxiang{
    width: 40px;
    height: 100%;
    float: left;
}
.wz-touxiang img,.abouttouxiang img{
    width: 100%;
    border-radius: 50%;
}
.wz-user{
    position: relative;
    width: 90%;
    height: 43px;
    margin: 0 auto;
    margin-top: 15px;
    border-bottom: 1px solid rgb(236, 236, 236);
}
.wz-left{
    width: 72%;
     box-shadow: 0px 0px 7px rgb(212, 212, 212);
    float: left;
    min-height: 500px;
    overflow: hidden;
}
.wz-right{
    width:280px;
    box-shadow: 0px 0px 7px rgb(212, 212, 212);
    min-height: 500px;
    float: right;
    position: relative;
}
.readwenzhang{
    width: 1120px;
    box-shadow: 0px 0px 7px rgb(212, 212, 212);
    /* min-height: 500px; */
    margin: 0 auto;
   
}
</style>