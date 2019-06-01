<template>
  <div class="content">
    <router-link :to="{ name: 'bread_list'}">
      <h1 id="logo" class="title is-1">
        Miss
        <svg-icon icon-class="dog"/>Dogs
      </h1>
      <h3 class="subtitle">Từ điển các loại chó </h3>
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
  // line-height: 3rem !important;
  // color: $primary-text-color !important;
}
</style>
