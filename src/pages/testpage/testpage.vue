<!--  -->
<template>
  <div>
    <Nav />
    <Exam />  
  </div>
</template>

<script>
import Exam from "components/daiqin/Exam.vue";
import Nav from "components/daiqin/Nav.vue";
export default {
  name: "",
  components: {
    Exam,
    Nav,
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
}
</style>
