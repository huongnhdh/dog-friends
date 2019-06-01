<template>
  <div class="container has-text-centered">
    <img src="@/assets/images/404.png" alt="404">
    <h1 class="title is-1">Page not found!</h1>
    <a @click="$router.push('/')">Quay trở lại Trang chủ</a>
  </div>
</template>

<script>
export default {
  name: `PageNotFound`
};
</script>
<style lang="sass" scoped>
</style>