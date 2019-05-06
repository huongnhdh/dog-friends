<template>
  <div class="container" id="navigation-main-bar">
    <div class="hero is-white" >
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar is-warning">
          <div class="navbar-brand">
            <!-- <a class="navbar-item" href="/">
             HomePage
            </a> -->

            <a role="button" class="navbar-burger" @click="isOpen = !isOpen" aria-label="menu" aria-expanded="false" data-target="navbar-menu" :class="{ 'is-active': isOpen }">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu" :class="{ 'is-active': isOpen }">
            <div class="navbar-start">
              <!-- <a class="navbar-item navbar-center" href="/about">About</a> -->
              <!-- <a class="navbar-item navbar-center" href="/video">Path</a> -->
              <a class="navbar-item">{{$t("navbar.gallery")}}</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "breed-nav",
  data(){
    return {
      isOpen: false
    }
  }
};
</script>
<style lang="scss" scoped>

.navbar-item {
  color: $primary-text-color !important;
  font-family: $primary-text-font;
  font-weight: 2rem;
}
#navigation-main-bar{
  margin-block-end: 2%;
}
</style>

