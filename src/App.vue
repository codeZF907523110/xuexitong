<template>
  <div id="app">
    <!-- <h1>{{user}}</h1> -->
    <router-view />
    <div class="maintabbar">
      <maintabbar></maintabbar>
    </div>
  </div>
</template>

<script>
import Maintabbar from "components/Maintabbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
// import Daohangtiao from '../daohangtiao.vue';
// import {getHomeMultidata} from './api/network/gather'
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      user: {},
    };
  },
  components: {
    Maintabbar,
    // Daohangtiao
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    $route(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      if (toDepth === 2) {
        this.$store.commit("setPageName", to.name);
      }
      //同一级页面无需设置过渡效果
      if (toDepth === fromDepth) {
        return;
      }
      this.enterAnimate =
        toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
      this.leaveAnimate =
        toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
    }
  },
  created() {
    this.$store.state.userinfo.name = getCookie("name")
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    }
    axios({
      method: "post",
      data: {
        name: getCookie("name"),
      },
      url: "/auto",
      withCredentials: true,
    }).then((res) => {
      console.log(res.data,'heheh');
      this.$store.state.userinfo = res.data;
    });
  },
  
};
</script>

<style>

body {
  padding: 0;
  margin: 0;
  width: 100vh;
  height: 100vh;
  /* background-color: rgb(236, 236, 236); */
}
* {
    box-sizing: border-box!important;
}
a:hover{
  text-decoration: none;
}
.maintabbar {
  display: none;
}

@media screen and (max-width: 768px) {
  .maintabbar {
    display: block;
  }
}
</style>


