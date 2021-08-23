<template>
  <div class="homepage" >
    <header-top></header-top>
    <div class='ttt' v-show='tshow'>
      <t ref='tt'></t>
    </div>
    
    <div class="home-top" v-if='homeinfos.user.name'>
      <div class="home-img">
        <img class="topimg" src="../../assets/img/homepage1.webp" alt="" />
        <div class="myhome">
          <div class="myhometouxiang" v-if='homeinfos.user.headphoto' @click='ttshow'>
            <img :src="homeinfos.user.headphoto"  />
            <div class='touxiangtop'>
              修改头像
            </div>
          </div>
          <div class="myhomeuser" >
            <div class="myname" v-if='homeinfos.user.name'>
              {{homeinfos.user.name}}
              <a href="">
                <i>9</i>
              </a>
            </div>
            <div class="myqianming">
              <span>个性签名:</span>
              {{ homeinfos.user.signature }}
            </div>
          </div>
          <div class='guanzhu' v-show='homeinfos.user.name!=$store.state.userinfo.name'>
            <div v-if='!isguanzhu' @click="like()">
               <el-button type="success">关注</el-button>
            </div>
           <div v-else @click="like()">
               <el-button type="success">取消关注</el-button>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-head">
      <div class="headitems">
        <div
          class="headflot"
          v-for="(item, index) in headitemimg"
          @click="gotohh(index)"
          :class="{ changblue: $route.path == '/homepage'+'/'+homeinfos.user._id+thisrouterpath[index] }" >
          <!-- {{$route.path}} -->
          <!-- {{'homepage'+'/'+homeinfos.user._id+thisrouterpath[index]}} -->
          <headitem :headitemimg="item" :itemtext="itemtext[index]"></headitem>
        </div>
      </div>
      <div class="headstatis">
        <div class="headstati" @click="$router.push('/homepage'+'/'+homeinfos.user._id+'/more')">
          <span class="span1" 
            >我的关注
            </span
          >
          <span class="span2" v-if="homeinfos.user.attention">{{
            homeinfos.user.attention.length
          }}</span>
        </div>
        <div class="headstati" @click="$router.push('/homepage/'+homeinfos.user._id+'/more')">
          <span class="span1" 
            >我的粉丝</span
          >
          <span class="span2" v-if="homeinfos.user.fans">{{
            homeinfos.user.fans.length
          }}</span>
        </div>
        <div class="headstati headstatinone">
          <span class="span1">点赞数</span>
          <span class="span2">10</span>
        </div>
        <div class="headstati headstatintwo" @click="$router.push('/postvideo')" v-show='homeinfos.user.name==$store.state.userinfo.name'>
          <el-button type="success">发稿</el-button>
        </div>
      </div>
    </div>
    <!-- <collection></collection> -->
      <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import headitem from "../../components/headitem/headitem.vue";
import Collection from "../../components/homepageitem/collection.vue";
import Dynamic from "../../components/homepageitem/dynamic.vue";
import axios from "axios";
import T from '../../components/daiqin/t.vue';
export default {
  data() {
    return {
      tshow:false,
      headitemimg: [
        require("./dongtai.png"),
        require("./shoucang.png"),
        require("./set.png"),
        require("./set.png"),
        require("./set.png"),
      ],

      itemtext: ["动态",  "收藏", "相册", "设置", "更多"],
      changebluee: 0,
      thisrouterpath: [
        "/dynamic",
        "/collection",
        "/album",
        "/setting",
        "/more",
      ],
      isguanzhu:false,
      homeinfos: {},
      rouer1:this.$router.path
    };
  },
  components: { headitem, Dynamic, HeaderTop, Collection, T },
  methods: {
    gotohh(index) {
      this.changebluee = index;
      this.$router.push(
        "/homepage" +
          "/" +
          this.$store.state.homeinfo.user._id +
          this.thisrouterpath[index]
      );
    },
    ttshow(){
      this.tshow=true
      this.$refs.tt.changeFile()
    },
    like() {
      let FormData = {};
      FormData.name = this.$store.state.userinfo.name;
      FormData.id = this.homeinfos.user._id
      if (this.isguanzhu) {
        FormData.type = 5;
        // 5guanzhu
      } else {
        FormData.type = 4;
        // 4quxiao
      }
      this.a(FormData);
    },
    islike() {
      let arr = this.homeinfos.user.fans;
      if (arr.length != 0) {
        for (let i of arr) {
          if (i == this.$store.state.userinfo.name) {
            this.isguanzhu = true;
          } else {
            this.isguanzhu = false;
          }
        }
      } else {
        this.isguanzhu = false;
      }
    },
    a(FromData) {
      axios.post("/like", FromData).then((res) => {
        this.homeinfos.user.fans = res.data;
        setTimeout(() => {
          this.islike();
        }, 300);
        
      });
    },
  },
  beforeCreate() {
    axios
      .post("/gethomeinfo", {
        id: this.$route.params.id,
      })
      .then((res) => {
        this.homeinfos = res.data
        console.log(this.homeinfos,'hhhhhhh');
        this.$store.state.homeinfo = res.data;
        if (res.data.user.name != this.$store.state.userinfo.name) {
          this.itemtext = ["动态",  "收藏", "相册", "更多"];
          this.thisrouterpath = [
            "/dynamic",
            "/collection",
            "/album",
            "/more",
          ];
          this.headitemimg = [
            require("./dongtai.png"),
            require("./shoucang.png"),
            require("./set.png"),
            require("./set.png"),
          ];
        }
        this.islike();
      });
      
  },
};
</script>  

<style>
.myhometouxiang:hover .touxiangtop{
  top:40px;
  transition: all 0.5s;
}
.touxiangtop{
  width: 70px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  /* z-index: 999999999999; */
  /* margin-left: 7px; */
  text-align: center;
  color: white;
  top: 65px;
  left: -3px;
  font-size: 12px;
}
.headstatintwo{
  /* border:1px solid red; */
  float: left;
  line-height: 60px;
}
.myqianming:hover {
  color: white;
  transition: all 0.3s;
}
.homepage {
  width: 1285px;
  margin: 0 auto;
  height: auto;
  background-color: white;
}
.changblue {
  color: #00a1d6;
  border-bottom: 3px solid #00a1d6;
}

.headstatis {
  width: 340px;
  height: 100%;
  float: right;
}
.headstati {
  float: left;
  width: 80px;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.headstatinone {
  cursor: default;
  float: left;
  margin-right: 20px;
}
.headstati .span1 {
  /* color:#00a1d6; */
  display: block;
  margin-top: 13px;
  font-size: 13px;
}
.headstati .span2 {
  font-size: 14px;
}
.headstati:hover {
  color: #00a1d6 !important;
  transition: all 0.3s;
}
.headflot {
  float: left;
  margin-left: 30px;
}
.headflot:hover {
  color: #00a1d6;
  border-bottom: 3px solid #00a1d6;
  transition: all 0.1s;
}
.headitems {
  width: 610px;
  height: 100%;
  float: left;
}
.home-head {
  height: 66px;
  width: 1283px;
  margin: 0 auto;
  margin-top: -4px;
}
.myname,
.myqianming {
  height: 50%;
}
.myname {
  line-height: 60px;
  color: white;
  font-weight: 800;
  font-size: 20px;
}
.myqianming {
  font-size: 10px;
  color: #d6dee4;
  line-height: 28px;
  min-width: 20px;
}
.myhomeuser {
  width: 300px;
  height: 100%;
  margin-left: 95px;
  float: left;
}
.guanzhu{
  float: right;
  line-height: 84px;
  height: 84px;
  width:100px;
  text-align: center;
  margin-right: 20px;
}
.home-top {
  width: 100%;
}
.myhome {
  height: 84px;
  position: absolute;
  top: 180px;
}
.myhometouxiang {
  cursor: pointer;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  overflow: hidden;
  
}
.myhometouxiang img{
 width: 64px;
 height: 64px;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
}
.home-img,
.myhome {
  width: 1283px;
  margin: 0 auto;
}
.myhometouxiang {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
</style>