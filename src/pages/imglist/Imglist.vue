<!--  -->
<template>
  <div class='imglist'>
    <header-top></header-top>
    <category ref="modalForm" ></category>
    <class :category3='category1' :category4='category2'></class>
    <bottom></bottom>
  </div>
</template>

<script>
import List from 'components/daiqin/List.vue'
import Class from 'components/daiqin/Class.vue'
import HeaderTop from 'components/HeaderTop/HeaderTop.vue'
import Bottom from 'components/daiqin/Bottom.vue'
import Category from '../../components/category/category.vue'
export default {
  data(){
      return{
        aaaindex:0,
        bbbindex:0,
        str:'',
        arrb:[],
        category1:[],
        category2:[]
      }
  },
  name: 'Imglist',
  components: {
    List,
    Class,
    HeaderTop,
    Bottom,
    Category
  },created(){
     this.str=this.$route.path.substring(9)
     this.$store.state.arrb=this.str.split('&')
     this.aaaindex=this.$store.state.arrb[0]
     this.bbbindex=this.$store.state.arrb[1]
     console.log(this.aaaindex+'哈哈哈'+this.bbbindex);
    console.log(this.$store.state.arrb,'嘿嘿嘿');
    setTimeout(() => {
      this.category1=this.$refs.modalForm.category1
      console.log(this.category1);
      this.category2=this.$refs.modalForm.category2
      console.log(this.category2);
    }, 2000);
  }
}
</script>

<style scoped>
</style>
