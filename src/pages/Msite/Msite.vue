<template>
  <div class='Msite'>
      <zhezhao v-show='$store.state.loginshow'></zhezhao>
      <header-top :islogin="true" :touxiangimg="touxiangimg"></header-top>
      <!-- <h1>{{this.$root.$children[0].user}}</h1> -->
      <!-- <h1>{{$store.state.islogin}}</h1> -->
      <!-- <sidebar v-show="$store.state.sideshow"></sidebar> -->
      <!-- <dynamicitem></dynamicitem> -->
     
  </div>
</template>
<script>
import HeaderTop from 'components/HeaderTop/HeaderTop.vue'
import Sidebar from 'components/Sidebar/sidebar.vue'
import Zhezhao from 'components/zhezhao/zhezhao.vue'
import Dynamicitem from '../../components/dynamicitem/dynamicitem.vue'
// import Editor from '../../components/editor/editor.vue'
export default {
    data(){
        return{
            touxiangimg:this.user
        }
    },
    methods: {
        
    },
  components: { HeaderTop, Sidebar,  Zhezhao,Dynamicitem },
  mounted(){
            console.log(this.$root.$children[0].user)
  }
}
</script>

<style>

</style>