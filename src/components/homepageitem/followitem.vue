<template>
  <div class="followitem">
    <div class="followtouxiang" @click="gotohomepage">
      <img :src="info.headphoto" alt="" />
    </div>
    <div class="followtext">
      <div class="followname">{{ info.name }}</div>
      <div class="followqianming">{{ info.signature }}</div>
    </div>
    <div class="isguanzhu"  v-show='$route.params.id==$store.state.userinfo._id'>
      <div class="guanzhutext" @click="like">
        <span v-if="!isliked">关注</span>
        <span v-else>取消关注</span>
      </div>
      
    </div>
    <div class='diandian'>
      <i class="el-icon-more"></i>

    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {},
      isliked: true,
    };
  },
  props: {
    homeuserinfo: "",
  },
  methods: {
    like() {
      let FormData = {};
      FormData.name = this.$store.state.userinfo.name;
      FormData.id = this.info._id
      if (this.isliked) {
        FormData.type = 5;
        // 2回复点赞
      } else {
        FormData.type = 4;
        // 3回复取消赞
      }
      this.a(FormData);
    },
    islike() {
      let arr = this.info.fans
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
          this.info.fans = res.data
          this.islike();
      });
    },
    gotohomepage(){
      // location.reload()
        this.$router.push('/homepage/'+this.info._id+'/dynamic')
      setTimeout(() => {
        this.$router.go(0) 
      }, 50);
      
    }
  },
  created() {
    axios
      .post("/getinfo", {
        name: this.homeuserinfo,
      })
      .then((res) => {
        this.info = res.data.user;
        this.islike()
      });
  }
}
</script>

<style>
.diandian{
  height: 100%;
  /* border:1px solid red; */
  line-height: 100px;

}
.diandian i:hover{
  color: #00a1d6;
  cursor: pointer;
  transition: all 0.5s;
}
.guanzhutext {
  width: 76px;
  height: 24px;
  /* border:1px solid red; */
  text-align: center;
  line-height: 24px;
  background-color: #e5e9ef;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  color: #6d757a;
  font-size: 12px;
  cursor: pointer;
}
.isguanzhu {
  position: relative;
  height: 100%;
  width: 150px;
  float: left;
  margin-left:250px;
  /* border:1px solid red; */
}
.followitem {
  width: 1030px;
  height: 101px;
  border-bottom: 1px solid #eee;
}
.followtouxiang {
  width: 60px;
  height: 100%;
  /* border:1px solid red; */
  line-height: 101px;
  /* margin-left: 20px; */
  float: left;
  cursor: pointer;
}
.followtouxiang img {
  width: 100%;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #edf2f9;
}
.followtext {
  float: left;
  height: 100%;
  margin-left: 20px;
}
.followname {
  height: 50%;
  padding-top: 25px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
}
.guanzhutext:hover {
  color: #00a1d6;
}
.followname:hover {
  color: #00a1d6;
}
.followqianming {
  width: 500px;
  /* border:1px solid red; */
  height: 50%;
  line-height: 30px;
  color: #6d757a;
  font-size: 12px;
  cursor: pointer;
}
</style>