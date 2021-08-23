<template>
  <div class='settext'>
          <img src="./leftjian.png" alt=""  @click='rouerback'>
            {{settext}}
    </div>
</template>

<script>
export default {
    props:{
        settext:String
    },
    methods:{
        rouerback(){
      this.$router.back()
    }
    }
}
</script>

<style>

</style>