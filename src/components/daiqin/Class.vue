<!--  -->
<template>
  <div class="class">
    <div class='itemli'>
      <div v-for="item in classlist.slice(0, max)" class='itemli'>
      <div v-show="item.vtype==category4[$store.state.arrb[0]][$store.state.arrb[1]]" >
          <classlist :classlist="item"></classlist>
      </div>
      <div v-show="$store.state.arrb[0]==0&&$store.state.arrb[1]==0" >
          <classlist :classlist="item"></classlist>
      </div>
      <div v-show="item.type==category3[$store.state.arrb[0]]&&category4[$store.state.arrb[0]][$store.state.arrb[1]]=='全部'" >
        <classlist :classlist="item"></classlist>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://81.70.192.127:808";
import Classlist from "components/daiqin/Classlist.vue";
export default {
  name: "Class",
  data() {
    return {
      classlist: [],
    };
  },
  props: {
    max: Number,
    category3:Array,
    category4:Array
  },
  components: {
    Classlist
  },
  created() {
    // axios.get("/getclasslist").then((res) => {
    //   this.classlist = res;
    // });
    axios.get("/getv").then((res) => {
      this.classlist = res.data;
    });
  },
};
</script>

<style scoped>
.class {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1170px;
  padding: 10px 0;
  margin: 0 auto;
}
.itemli{
  float: left;
}
@media screen and (max-width: 768px) {
  .class {
    padding-bottom: 49px;
  }
}
</style>
