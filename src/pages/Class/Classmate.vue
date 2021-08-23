<!--  -->
<template>
<div>
   <!-- <header-top></header-top> -->
   <div class="class container">
    <Classlist
      v-for="(item, index) in classlist"
      :key="index"
      :classlist="item"
    />
  </div>
</div>
  
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://81.70.192.127:808";
import Classlist from 'components/daiqin/Classlist';
export default {
  name: "Class",
  data() {
    return {
      classlist: [
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841, title: '156489'},
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841 },
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841 },
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841 },
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841 },
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841 },
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841 },
        // { name: "1", background: "#7c7d7f", number: 99989, price: 841 },
      ],
    };
  },
  components: {
    Classlist,
  },
  created() {
    // axios.get("/getclasslist").then((res) => {
    //   this.classlist = res;
    // });
    axios.get('/getlist').then(res => {
      this.classlist = res.data
    })
  },
};
</script>

<style scoped>
.class {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
