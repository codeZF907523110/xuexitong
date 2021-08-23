<template>
  <div class='replyme'>
      <!-- {{$store.state.userinfo}} -->
          <div v-for='(item,index) in messrevers'>
              <div v-if='item.type==0||item.type==1||item.type==3||item.type==4'>
                <replymeitem :replyli='item' :myindex="index" ></replymeitem>
              </div>
            
          </div>
  </div>
</template>

<script>
import axios from 'axios'
import replymeitem from './replymeitem.vue'
export default {
  data(){
    return{
      messrevers:[]
    }
  },
  components: { replymeitem },
  methods:{
    getiteminfo1(val){
      console.log(val,'val');
    }
  },
  created(){
    axios.post('/auto',{
      name: this.$store.state.userinfo.name
    }).then(res=>{
        console.log(res.data,'ccc');
        this.messrevers=res.data.unreadmessage.reverse()
    })
  }
}
</script>

<style>

</style>