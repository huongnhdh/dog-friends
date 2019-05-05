<template>
  <div class="container">
    <div class="footer-line" />
    <div id="footer">
      <ul class="footer-nav">
        <li class="push">
          Made with ❤ by
          <a href="#">huongnhdh</a>
        </li>
        <li>
          <a href="mailto: huongnhdh@gmail.com">Contact: huongnhdh@gmail.com</a>
        </li>
        <!-- <li>
        <a href="https://twitter.com/_Ronini">Twitter</a>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: `Footer`
};
</script>

<style scoped lang="scss">
.footer-line {
  // padding-block-end: 5%;
  margin-block-start: 5%;
  margin-block-end: 5%;
  border-block-start-style: solid;
  border-block-start-width: 1px;
  border-block-end-color: $primary-text-color;
  border-block-end-color: $primary-text-color;
  border-block-end-style: double;
  border-block-end-width: 1px;
  height: 5px;
}
.footer-nav {
  display: flex;
  list-style: none;
  justify-content: flex-end;
  // color: #fafafa;
  transition: all 0.5s;
  padding-left: 0.5rem;
  margin-block-end: 5%;
  padding-block-end: 5%;
}

.push {
  margin-right: auto;
}

@media screen and (max-width: 900px) {
  .footer-nav {
    font-size: 0.75rem;
  }
}
</style>