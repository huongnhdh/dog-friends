<template>
  <div class="container">
    <div v-masonry origin-left="false" gutter="10" item-selector=".item" :horizontal-order="false">
      <div class="columns is-4">
        <div
          v-masonry-tile
          class="item column card-img"
          v-for="(img, index) in imgs_loading"
          :key="index"
        >
          <div class="card" style="width: 18rem;">
            <img :src="img" alt="missdogs">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
  props: {
    imgs: {
      type: Array,
      required: true
    },
    number_img_current_loading: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      imgs_loading: [],
      lower_bound: 0
    };
  },
  // watch: {
  //   imgs: function (val) {
  //     if (this.lower_bound === 0 && val.length > 0 ){
  //       this.getImgs();
  //     }
  //   }
  // },
  // created() {
  //   this.getImgs();
  // },
  methods: {
    getImgs() {
      const upper_bound =
        this.lower_bound + this.number_img_current_loading > this.imgs.length
          ? this.imgs.length
          : this.lower_bound + this.number_img_current_loading;
      this.imgs_loading = this.imgs.slice(this.lower_bound, upper_bound);
    }
  }
};
</script>
<style lang="scss" scoped>
.card-img {
  background-color: $white;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.03);
  }
}
.card {
  min-height: 250px;
}
</style>
