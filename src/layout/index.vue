<template>
 <div>
    <Header />
    <app-main />
    <Footer />
  </div>
</template>
<script>
import {Header, AppMain, Footer} from "../components"
export default {
  name: "Layout",
  components: {
    Header, AppMain, Footer
  }
}
</script>
<style lang="scss">
// @charset "utf-8";
@import "~@/style/my_style.scss";
</style>
