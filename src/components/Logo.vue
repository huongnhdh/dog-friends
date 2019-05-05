<template>
  <div class="content">
    <router-link :to="{ name: 'bread_list'}">
      <h1 id="logo">
        Miss
        <svg-icon icon-class="dog"/>Dogs
      </h1>
    </router-link>
  </div>
</template>

<script>
// import {Dog} from
export default {
  name: `Logo`
};
</script>
<style lang="scss" scoped>
h1 #logo {
  font-family: "Abel", sans-serif !important;
  line-height: 3rem !important;
  color: $primary-text-color !important;
}
</style>
