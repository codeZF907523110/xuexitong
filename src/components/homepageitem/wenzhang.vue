<template>
  <div class='wenzhang'>
      <div class='wenzhangitem' v-for="item in fabuitem">
          <dynamicitem :fabuitemli="item"></dynamicitem>
      </div>
      
  </div>
</template>

<script>
import dynamicitem from '../dynamicitem/dynamicitem.vue'
import axios from 'axios'
export default {
  data(){
      return{
          fabuitem:[]
      }
  },
  components: { dynamicitem },
  created(){
    axios.post('/star',{
        name:this.$store.state.userinfo.name
    }).then(res=>{
        this.fabuitem=res.data.wenzhang.reverse()
    })
  }

}
</script>

<style>
.wenzhang{
    width: 920px;
    /* float: left; */
}
.wenzhangitem{
    width: 920px;
}   
</style>