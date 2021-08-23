<template>
  <div class="collection">
    <div class="menu">
      <div class="menutitle" @click="cmenuitemshow"><span>目录</span></div>
      <div class="menuitem" v-show="menuitemshow">
        <div
          class="menuitem1"
          v-for="(item, index) in menuitem"
          @click="cblue1(index)"
          :class="{ cblue: cblue == index }"
        >
          <span>{{ item }}</span
          >
        </div>
      </div>
    </div>
    <div class="collecneirong">
      <div v-show="cblue == 0">
          <div>
              <videoitem></videoitem>
          </div>
      </div>
      <div  v-show='cblue == 1'>
        <div v-for='item in wzcollection'>
          <div v-for='i in item.likes'>
            <div v-if='i==$store.state.userinfo.name'>
              <dynamicitem :fabuitemli='item' ></dynamicitem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import videoitem from "./videoitem.vue";
import Wenzhang from "./wenzhang.vue";
import axios from 'axios'
import Dynamicitem from '../dynamicitem/dynamicitem.vue';
export default {
  components: { videoitem, Wenzhang, Dynamicitem },
  data() {
   return {
      menuitem: ["视频", "文章"],
      menuitemnum: ["1", "2"],
      cblue: 0,
      menuitemshow: true,
      wzcollection:[],
      myshoucang:[],
      isshowcang:false,
      colllength:0
    };
  },
  methods: {
    cblue1(index) {
      this.cblue = index;
    },
    cmenuitemshow() {
      this.menuitemshow = !this.menuitemshow;
    },
  },
  created(){
    axios.get('/getwenzhang').then(res=>{
        this.wzcollection=res.data.reverse()
        console.log(this.wzcollection.likes);
    })
  },
};
</script>

<style>
.collection{
    margin-top: 20px;
    min-height: 180px;
}
.cblue {
  color: white !important;
  background-color: #00a1d6;
}
.menutitle {
  border-bottom: 1px solid rgb(241, 241, 241);
}
.menutitle,
.menuitem1 {
  width: 100%;
  height: 54px;
  line-height: 54px;
  font-size: 16px;
  /* color: #99a2aa; */
  cursor: pointer;
}
.menuitem1 a {
  float: right;
  margin-right: 30px;
}
.menutitle span,
.menuitem1 span {
  margin-left: 20px;
}
.menuitem1 span {
  font-size: 18px;
}
.menu {
  width: 210px;
  height: 210px;
  float: left;
}
.collecneirong {
  width: 1071px;
  margin-left: 210px;
}
</style>