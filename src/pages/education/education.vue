<template>
  <div class='education'>
      <header-top></header-top>
      <div class='educationtop'>
          <ul>
              <li :class="{textactive:$route.path=='/education/edustudent'} "  @click='gotostu'>我是学生</li>
              <li :class="{textactive:$route.path=='/education/eduteacher'}" @click='gototea'>我是教师</li>
          </ul>
      </div>
      <router-view></router-view>
      
            <div >
                <transition name='fade' > -->
                    <estclass v-show='$store.state.estclassshow' key='box1'></estclass> 
                </transition>
               
                 
            </div>
      
  </div>
</template>

<script>
import Estclass from '../../components/educations/estclass.vue'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    data(){
        return{
            estclassshow:false,
        }
    },
    components:{HeaderTop, Estclass},
    methods:{
        gotostu(){
            this.$router.push('/education/edustudent')
        },
        gototea(){
            this.$router.push('/education/eduteacher')
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.education{
    width: 1150px;
    min-height: 592px;
    margin: 0 auto;
    
}
.educationtop{
    width: 95%;
    height: 41px;
    margin: 0 auto;
    position: relative;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 30px;
}
.educationtop ul{
    display: flex;
    list-style: none;
    line-height: 41px;
    position: absolute;
    left: -50px;
}
.educationtop ul li{
    width: 100px;
    height: 39px;
    line-height:39px;
    margin-left: 30px;
    cursor: pointer;
    font-size: 18px;
    color: rgb(155, 155, 155);
    text-align: center;
}
.textactive{
    color: #00a1d6!important;
    font-size: 21px!important;
    font-weight: 700;
    
    border-bottom: 3px solid #00a1d6;
    transition: all 0.3s;   
}

</style>