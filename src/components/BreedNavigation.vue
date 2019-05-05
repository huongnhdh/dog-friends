<template>
  <div class="container">
    <div class="hero">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-menu">
            <div class="navbar-start">
              <!-- <a class="navbar-item navbar-center" href="/about">About</a> -->
              <!-- <a class="navbar-item navbar-center" href="/video">Path</a> -->
              <a class="navbar-item" href="#gallery">{{$t("navbar.gallery")}}</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "breed-nav"
};
</script>
<style lang="scss" scoped>
  .navbar-item {
    display: flex;
    align-items: center;
  }
</style>

