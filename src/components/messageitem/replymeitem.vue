<template>
  <div class='replymeitem'>
      <div class='replyli'>
          <div class='replytouxiang'>
              <img src="./touxiang.jpg" alt="">
          </div>
          <div class='replyuserinfo'>
              <div class='replyname'>
                  <span>{{replyli.name}}</span>
                  <a v-show='replyli.type==0'>评论了您</a>
                  <a v-show='replyli.type==1'>回复了我的评论</a>
                  <a v-show='replyli.type==2'>收藏了您的作品</a>
                  <a v-show='replyli.type==3'>评论了您</a>
                  <a v-show='replyli.type==4'>回复了我的评论</a>
                  <a v-show='replyli.type==5'>收藏了您的作品</a>
                  <a v-show='replyli.type==7'>关注了您</a>
              </div>
              <div class='replyneirong'>
                  {{replyli.message}}
              </div>
              <div class='replytime'>
                  <span>{{replyli.time|dateFormat}}</span>
                  <div class='replyhe'>
                      <span v-show='replyli.type==0||replyli.type==1||replyli.type==3||replyli.type==4'>回复</span>
                      <span class='cancle' @click='delethis(0)'>删除消息</span>
                      <span class='weidu' @click='isread(1)' v-if='!replyli.isread'>未读</span>
                      <span class='cancle' v-else>已读</span>
                  </div>
              </div>
          </div>
          <div class='replyright' >
              <img src="./touxiang.jpg" alt=""  @click="$router.push('/textarea/wenzhang/'+replyli.id)">
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
                
        }
    },
    props:{
        replyli:{},
        myindex:Number,
    },
    methods:{
        delethis(de){
            axios.post('/read',{
                type:de,
                name:this.replyli.name,
                index:this.myindex
            }).then(res=>{
               
            })
            setTimeout(() => {
                location. reload()
            }, 240);
            
        },
        isread(de){
            axios.post('/read',{
                type:de,
                name:this.replyli.name,
                index:this.myindex
            }).then(res=>{
            })
            setTimeout(() => {
                location. reload()
            }, 240);
        }
    }
}
</script>

<style>
.replyli:hover .cancle{
   transition: all 0.5s;
    opacity: 1;
}
.replyright img{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.weidu{
    color: red!important;
    margin-left: 10px;
}
.cancle{
    margin-left: 10px;
    opacity: 0;
}
.replyright{
    position: relative;
    width: 70px;
    height:70px;
    border:1px solid red;
    float: right;
    margin-top: 8px;
}
.replyhe{
    font-size: 12px;
    color:#585858 ;
    cursor: pointer;
    position: absolute;
    margin-left:100px;
}
.replyhe span:hover{
    color:#2faee3 ;
}
.replytime{
    width: 400px;
    height: 30px;
    margin-top: 8px;

}
.replytime span{
    color:#6b757b ;
    font-size: 12px;
    float: left;
}
.replyneirong{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:400px;
    height:20px;
    margin-top: 5px;
    line-height: 20px;
    font-size: 12px;
}
.replyname a{
      color: #6b757b;
      font-size: 12px;
      margin-left: 20px;
}
.replyname span{
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    float: left;
}
.replyname{
    height: 25px;
    width: 300px;
    line-height: 25px;
}
.replyuserinfo{
    float: left;
}
.replytouxiang{
    cursor: pointer;
    height: 100%;
    width: 70px;
    float: left;
}
.replytouxiang img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.replymeitem{
    width:100%;
    height:120px ;
    position: relative;
}
.replyli{
    width: 95%;
    height: 80%;
    border-bottom:1px solid rgb(231, 231, 231);
    position: absolute;
    top:50%;left: 50%;
    transform: translate(-50%,-50%);
}
</style>