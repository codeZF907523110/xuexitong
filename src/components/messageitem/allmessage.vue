<template>
  <div class='allmessage'>
      <!-- {{$store.state.userinfo}} -->
      <div>
          <div v-for='(item,index) in messrevers'>
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
  created(){
    axios.post('/auto',{
      name: this.$store.state.userinfo.name
    }).then(res=>{
        this.messrevers=res.data.unreadmessage.reverse()
    })
  }
}
</script>

<style>

</style>