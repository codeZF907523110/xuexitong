<template>
  <div class='dynamic'>
    <div class='empty' v-show='false'>
       <img src="./empty.png" alt="">
    </div>
    <div v-for='item in fabuitem' class='dynamic1'>
          <dynamicitem :fabuitemli="item"></dynamicitem>
    </div>
      <!-- <collection></collection> -->

  </div>
</template>

<script>
import Dynamicitem from '../dynamicitem/dynamicitem.vue'
import axios from 'axios'
import Collection from './collection.vue'
export default {
  data(){
    return{
      fabuitem:this.$store.state.homeinfo.wenzhang.reverse()
    }
  },
  components:{Dynamicitem, Collection},
  created(){
    axios
      .post("/gethomeinfo", {
        id: this.$route.params.id,
      })
      .then((res) => {
        // this.homeinfos = res.data
        this.$store.state.homeinfo = res.data;
        console.log(this.$store.state.homeinfo.wenzhang);})
  },
  watch:{
    $route(to,from){  
         this.$router.go(0);
    }
  },
}
</script>

<style>
.dynamic1{
  margin-left: 20px;
}
.empty{
  width:223px ;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.empty img{
  position: absolute;
  top: 50%;
  transform: translateY(50%);
}
.dynamic{
  width: 920px;
  min-height: 270px;
  /* border:1px solid red; */
  background-color: white;
}
</style>