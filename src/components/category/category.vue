<template>
  <div class='category'>
      <!-- <div class='categorytop'></div> -->
      <div class='categorycenter'>
        <span>方向:</span>
        <div class='categorycenter1'>
          <ul>
            <li v-for="(item,index) in category1" @click='gotolist1(index)' :class='{activeaa:aaaindex==index}'>{{item}}</li>
          </ul>
          <div class='categorycenter1 categorycenter2'>
          <span>分类:</span>
           <ul>
            <li v-for="(aaa,index) in category2[aaaindex]" @click='gotolist2(index)' :class='{activeaa:bbbindex==index}'>
                 {{aaa}}
            </li>
          </ul>
        </div>
        </div>
        
        <div></div>
      </div>
      <div></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      category1:['全部','前端开发','后端开发','移动开发','计算机基础','前沿技术','云计算&大数据','运维&而测试','数据库','UI设计&多媒体','游戏'],
      category2:[
        ['全部','JavaScript','HTML/CSS','Vue.js','React.JS','Angular','Node.js','jQuery','Bootstrap','Sass/Less','WebApp','小程序','前端工具','CSS','Html5','CSS3','Typescript'],
        ['全部','JavaScript','HTML/CSS','Vue.js','React.JS','Angular','Node.js','jQuery','Bootstrap','Sass/Less','WebApp','小程序','前端工具','CSS','Html5','CSS3','Typescript'],
        ['全部','Java','Python','C','C++','Go','C#','Ruby','ThinkPHP','ThinkPHP','Yii','SpringBoot','爬虫','Tornado','Flask','Django','SSM','Spring Cloud','Lua','Swoole','PHP','.net'],
        ['全部','Android','iOS','WEEX','Ionic','React native','Swift','Flutter'],
        ['全部','数学','算法与数据结构','计算机网络'],
        ['全部','计算机视觉','超级账本','数据分析&挖掘','以太坊','微服务','机器学习','深度学习','自然语言处理','区块链'],
        ['全部','大数据','云计算','Hadoop','Storm','Kubernetes','Docker','阿里云','AWS','OpenStack','R语言','Flink','Hbase','Spark','容器'],
        ['全部','测试','Linux','中间件','运维工具','自动化运维','安全测试','接口测试','自动化测试','性能测试','功能测试','运维','Apache'],
        ['全部','MySQL','MongoDB','Oracle','SQL Server','NoSql','Redis'],
        ['全部','动效动画','APPUI设计','设计工具','设计基础','模型制作','产品交互','Maya','Photoshop','ZBrush'],
        ['全部','Unity 3D','Cocos2d-x']
      ],
      a:1,
      stra:'',
      aaaindex:0,
      bbbindex:0,

    }
  },
  methods:{
    gotolist1(index){
      this.aaaindex=index
      this.$router.push('/imglist/'+this.aaaindex+'&'+this.bbbindex)
      this.bbbindex=0
      console.log(this.bbbindex);
    },
    gotolist2(index){
      this.bbbindex=index
      this.$router.push('/imglist/'+this.aaaindex+'&'+this.bbbindex)
    }
  },
  created(){
    this.str=this.$route.path.substring(9)
    this.$store.state.arrb=this.str.split('&')
    this.aaaindex=this.$store.state.arrb[0]
    this.bbbindex=this.$store.state.arrb[1]
    console.log(this.aaaindex+'哈哈哈'+this.bbbindex);
  },
  updated(){
    this.str=this.$route.path.substring(9)
    this.$store.state.arrb=this.str.split('&')
    console.log(this.aaaindex+'hehhe'+this.bbbindex);
  }
}
</script>

<style>
.activeaa{
    color: #00a1d6;
    
    border-bottom: 3px solid #00a1d6;
}
.categorycenter2{
  padding-top: 50px;
}
.categorycenter span{
  float: left;
  width: 3em;
    margin-right: 6px;
    font-weight: 700;
    line-height: 50px;
}
.categorycenter1 ul{
  position: absolute;
  width:100% ;
  margin: 0 auto;
  display: flex;
  list-style: none;
  left: -30px;
  flex-wrap:wrap;
}
.categorycenter1 ul li:hover{
  color: #00a1d6;
  transition: all 0.3s;
}
.categorycenter1 li{
  height: 30px;
  margin-left:35px;
  cursor: pointer;
  justify-content:space-around;
  line-height:30px;
  margin-top: 10px;
  padding: 2px;
}
.category{
    width: 100%;
    height:140px;
    background-color: aliceblue;
}
.categorytop{
  width: 1150px;
  height: 81px;
  margin: 0 auto;
}
.categorycenter{
  position: relative;
  width: 1150px;
  height: 150px;
  margin: 0 auto;
}
</style>