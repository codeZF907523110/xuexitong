<template>
    <div class='album'>
        <div class='photoitem'>
            <photo></photo>
        </div>
        <div class='photoitem'>
            <photo></photo>
        </div>
        <div class='photoitem'>
            <photo></photo>
        </div>
        <div class='photoitem'>
            <photo></photo>
        </div>
        <div class='photoitem'>
            <photo></photo>
        </div>

    </div>
</template>

<script>
import photo from './photo.vue'
export default {
  components: { photo },

}
</script>

<style>
    .album{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .photoitem{
        flex: 1;

    }
</style>