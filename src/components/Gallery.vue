<template>
  <div class="container">
    <div
      v-masonry
      gutter=10
      transition-duration="2s"
      item-selector=".item"
      :horizontal-order="false"
    >
      <div class="columns is-4">
        <div v-masonry-tile class="item column card-img" v-for="(img, index) in imgs_loading" :key="index">
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
      required: true,
    },
    number_img_current_loading: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      imgs_loading: [],
      lower_bound: 0,
    };
  },
  watch: {
    imgs: function (val) {
      if (this.lower_bound === 0 && val.length > 0 ){
        this.getImgs();
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getImgs();
  },
  updated(){
    if(this.lower_bound === 0){
       this.getImgs();
    }
  },
  methods: {
    getImgs() {
      console.log(this.imgs.length)
      const upper_bound =
        this.lower_bound + this.number_img_current_loading > this.imgs.length
          ? this.imgs.length
          : this.lower_bound + this.number_img_current_loading;
      for (let i = this.lower_bound; i < upper_bound; i++) {
        this.imgs_loading.push(this.imgs[i]);
      }
      this.lower_bound = upper_bound;
    },
    handleScroll() {
      let scrollHeight = window.scrollY;
      let maxHeight =
        window.document.body.scrollHeight -
        window.document.documentElement.clientHeight;
      if (scrollHeight >= maxHeight - 200) {
        this.getImgs();
      }
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
