<template>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img v-lazy="avatar" alt="code">
        </figure>
      </div>
      <div class="card-content">
        <h3 class="title">{{ code }}</h3>
        <p class="subtitle">{{ code }}</p>
      </div>
      <footer class="card-footer">
        <router-link :to="{ name: 'breed', params: { id: code } }"  class="card-footer-item">Chi tiết</router-link>
        <a href="#" class="card-footer-item">
          <!-- <span>
            Share on
            <a href="#">Facebook</a>
          </span>-->
          <svg-icon icon-class="heart" class="icon heartbeat"/>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: `Card`,
  props: {
    dog_breed: {
      type: Object
    }
  },
  data() {
    const {code, avatar} = this.dog_breed
    return {code, avatar};
  }
};
</script>

<style scoped lang="scss">
.card {
  text-align: center;
  color: $primary-text-color !important;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem;
  display: inline-block;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 420px;
  transition: transform 0.25s ease-out;
}

.card-content {
  color: $primary-text-color !important;
  .title {
    // $primary-text-font: 'Imprima', sans-serif;;
    // $primary-text-color: $purple;
    font-weight: 2rem;
    font-family: $primary-text-font;
    color: $primary-text-color !important;
   }
}

.card-footer {
   font-family: $primary-text-font;
}
.card:hover {
  transform: scale(1.03);
}

.card-footer a {
  // color: #000;
  &:hover {
    font-weight: 2rem;
  }
}
.heartbeat {
  &:hover {
    width: 2em;
    height: 2em;
  }
}
</style>