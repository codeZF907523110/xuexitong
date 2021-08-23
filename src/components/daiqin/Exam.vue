<!--  -->
<template>
  <div class="exam">
    <Examlist :tests="tests.question" />
  </div>
</template>

<script>
import Examlist from "components/daiqin/Examlist.vue";
import "swiper/swiper-bundle.min.css";
import axios from "axios";
axios.defaults.baseURL = "http://81.70.192.127:808";
export default {
  name: "Exam",
  components: {
    Examlist,
  },
  data() {
    return {
      tests: []
    };
  },
  methods: {
    getid(index) {
      return "list_" + (index + 1);
    },
    go(index) {
      return "#list_" + (index + 1);
    },
  },
  created() {
    axios.post('/getexam',{}).then(res => {
      this.tests = res.data
    })
  },
};
</script>

<style scoped>
.exam {
  padding-top: 50px;
}
.item {
  border: 1px solid #000;
  box-sizing: border-box;
  width: 80%;
  margin: 5px;
}
.item li {
  margin: 5px;
  list-style: none;
}
.answer {
  width: 400px;
  height: 200px;
  position: fixed;
  right: 0;
  background: yellow;
  bottom: 0;
}
.answer ul {
  display: flex;
  flex-wrap: wrap;
}
.answer li {
  list-style: none;
  width: 48px;
  height: 48px;
  margin: 1px;
  background: #fff;
  border-radius: 4px;
}
</style>
