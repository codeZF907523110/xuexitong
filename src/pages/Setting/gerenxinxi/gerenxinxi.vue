<template>
  <div class="gerenxinxi">
    <div class='pcshow'>
      <common-title :tilename="'个人信息'" :successshow="false"></common-title>
    </div>
    <div class='phoneshow'>
      <common-title :tilename="'设置'" :successshow="false"></common-title>
    </div>
      <div class='edits'>
          <edit></edit>
      </div>
      
      <!-- <editneimong></editneimong> -->
  </div>
</template>

<script>
import CommonTitle from 'components/common-title/common-title.vue';
import edit from 'pages/Setting/gerenxinxi/edit.vue';
export default {
  components: { edit, CommonTitle, },
};
</script>

<style>
.edits{
  margin-top: 30px;
}
.xinxitext{
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgb(216, 216, 216);
}
.phoneshow{
  display: none;
}

</style>