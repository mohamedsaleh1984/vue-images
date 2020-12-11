<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item"> Image Storage </a>
      
      <div class="right menu">
        <a class="ui item" @click="login"> Login </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: 'AppHeader',
  methods: mapActions(['login'])
  /*
    methods: mapActions(['login'])
          Same as
    methods: {
      ...mapActions(['login'])
    }
  */
};
</script>
<style scoped>
</style>