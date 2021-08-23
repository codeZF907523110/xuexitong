<!--  -->
<template>
  <div class='list'>
    <div v-for='(item, index) in list' :key="index">
      <img :src="getPath(item)" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data(){
    return{
      list:['']
    }
  },
  created(){
    axios.get('/getlist').then(res => {
      this.list = res
    })
  },
  methods:{
    getPath(item){
      return 'http://81.70.192.127:808/file/' + item 
    }
  }
}
</script>

<style scoped>
.list div{
  float: left;
  width: 300px;
  height: 300px;
  overflow: hidden;
}
.list div img{
  width: 100%;
  background-size: cover;
  background-position: center center;
}
</style>
