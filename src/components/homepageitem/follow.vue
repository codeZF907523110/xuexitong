<template>
  <div class='follow'>
      <div class="menu">
      <div class="menutitle" @click="cmenuitemshow"><span>目录</span></div>
      <div class="menuitem" v-show="menuitemshow">
        <div
          class="menuitem1"
          v-for="(item, index) in menuitem"
          @click="cblue1(index)"
          :class="{ cblue: cblue == index }">
          <span >{{ item }}</span><a>{{menuitemnum[index]}}</a>
        </div>
      </div>
    </div >
    <div class='followitems' v-show='cblue==0'>
      <div v-for='item in $store.state.homeinfo.user.attention'>
        <followitem :homeuserinfo="item"></followitem>
      </div>
      
      <div v-show='false'>{{$store.state.homeinfo.user}}</div>
    </div>
    <div class='followitems' v-show='cblue==1'>
      <div v-for='item in $store.state.homeinfo.user.fans'>
        <followitem :homeuserinfo="item"></followitem>
      </div>
    </div>
    </div>
</template>

<script>
import followitem from './followitem.vue'
export default {
  data(){
    return{
        menuitem: ["我的关注", "我的粉丝"],
        menuitemnum: [0,0],
        cblue: 0,
        menuitemshow: false,
        aaa:false
    }
  },
  components: { followitem, },
   methods: {
    cblue1(index) {
      this.cblue = index;
    },
    cmenuitemshow() {
      this.menuitemshow = !this.menuitemshow;
    },
  },
  created(){
    if(this.$store.state.homeinfo.user.fans){
        this.menuitemnum[0]=this.$store.state.homeinfo.user.attention.length
        this.menuitemnum[1]=this.$store.state.homeinfo.user.fans.length
        this.menuitemshow=true
      }
  },

  updated(){
    if(this.$store.state.userinfo.fans){
        this.menuitemnum[0]=this.$store.state.homeinfo.user.attention.length
        this.menuitemnum[1]=this.$store.state.homeinfo.user.fans.length
        this.menuitemshow=true
      }
  }
}
</script>

<style>
.follow{
  margin-top: 20px;
}
.followitems{
  width: 1030px;
  /* border:1px solid red; */
  float: right;
}
.cblue {
  color: white !important;
  background-color: #00a1d6;
}
</style>