<template>
  <div class="textarea">
    <header-top></header-top>
    <div class='textarealist'>
      <div class='arealistli'>
          <ul>
            <li v-for='(item,index) in textarealist' :class="{arealistcolor:$route.path=='/textarea/'+index}" @click='arealistbtn(index)' >{{item}}</li>
          </ul>
      </div>
    </div>
    <div class="textarea-center">
      <div class="textarea-left">
        
        <div class="textareaitem" v-for='item in fabuitem'>
          <!-- {{item.type}}aaaaaaaaa -->
          <div v-if='arealistindex==0'>
              <dynamicitem :fabuitemli="item"></dynamicitem>
          </div>
            <div v-if='arealistindex==1'>
              <div v-for='i in $store.state.userinfo.attention'>
                <div v-if='item.auther==i'>
                  <dynamicitem :fabuitemli="item"></dynamicitem>
                </div>
              </div>
            </div>
            <div v-if='item.type==textarealist[arealistindex]'>
                <dynamicitem :fabuitemli="item"></dynamicitem>
            </div>
        </div>
      </div>
      <div class="textarea-right">
        <global-write></global-write>
        <div class='card'>
         
          <div v-for="(item,index) in cardtext">
            <carditem :cardtext="item" :cardmess="cardmess[index]" ></carditem>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carditem from "../../components/Carditem/carditem.vue";
import dynamicitem from "../../components/dynamicitem/dynamicitem.vue";
import GlobalWrite from "../../components/GlobalWrite/GlobalWrite.vue";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import axios from 'axios'
export default {
  data(){
    return{
        cardtext:['我的收藏','我的关注','我的发布','我的评论','帮助中心','版权服务中心'],
        cardmess:['0','0','1'],
        fabuitem:[],
        textarealist:['全部','关注','前端开发','后端开发','移动开发','计算机基础','前沿技术','云计算&大数据','运维&而测试','数据库','UI设计&多媒体','游戏'],
        arealistindex:0
    }
  },
  components: { dynamicitem, GlobalWrite, HeaderTop, Carditem },
  created(){
    axios.get('/getwenzhang').then(res=>{
        this.fabuitem=res.data.reverse()
    })
  },
  beforeUpdate(){
    this.arealistindex=this.$route.path.substring(10)
  },
  methods:{
    arealistbtn(index){
      this.$router.push('/textarea/'+index)
      this.arealistindex=index
    }
  }
};
</script>

<style>
.arealistcolor{
  color:#00a1d6;
  border-bottom: 3px solid #00a1d6;
}
.arealistli ul{
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
}
.arealistli ul li{
    height: 30px;
    margin-left: 35px;
    cursor: pointer;
    justify-content: space-around;
    line-height: 30px;
    margin-top: 10px;
    padding: 2px;
    list-style: none;
}
.arealistli ul li:hover{
  color: #00a1d6;
  border-bottom: 3px solid #00a1d6;
}
.textarealist{
  width: 100%;
  height: 40px;
  
}
.arealistli ul{
  margin-left: -20px;
}
.arealistli{
  position: relative;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  background-color: aliceblue;
}
.dynamicitem{
  background-color: white;
}
.card{
  width: 296px;
  height: 296px;
  margin-top: 10px;
}
.textarea-center {
  width: 1120px;
  position: absolute;
  background-color: white;
  left: 50%;
  transform: translateX(-48%);
}
.textarea-left {
  width: 750px;
  float: left;
  margin-left: 20px;
}
.textarea {
  width: 100%;
}
.textareaitem {
  width: 750px;
  margin: 0 auto;
}
.textareaitem {
  /* border-bottom: 1px solid rgb(228, 228, 228); */
  margin-top: 20px;
}
.textarea-right {
  float: left;
  margin-left: 2%;
  margin-top:20px;
  height: 1151px;
}
</style>