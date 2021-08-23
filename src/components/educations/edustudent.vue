<template>
  <div class='edustudent'>
      <addeduclass :classtext="'添加课程'"></addeduclass>
      <educlass></educlass>
  </div>
</template>

<script>
import addeduclass from './addeduclass.vue'
import Educlass from './educlass.vue'
export default {
  components: { addeduclass, Educlass },

}
</script>

<style>
.edustudent{
     width: 95%;
    margin: 0 auto;
}
</style>