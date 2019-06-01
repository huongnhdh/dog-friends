<template>
  <div class="container">
    <div class="columns" v-masonry transition-duration="0s" item-selector=".masonry-item" >
      <div class="column is-4 masonry-item"  v-masonry-tile  v-for="index in imgs_loading"  :key="index">
        <img :src="imgs[index]" >
      </div>
    </div>
    <button v-show="imgs_loading < imgs.length" @click="load_more()" class="button is-primary">Xem thêm ...</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Gallery",
  props: {
    imgs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      imgs_loading: 0
    };
  },
  watch: {
    imgs: function (val) {
      this.getImgs();
    }
  },
  // created() {
    // const self = this;
    // setTimeout(function() {
    //   self.getImgs();
    // }, 3000);
  // },
  methods: {
    getImgs() {
       //  set size init is 6
      this.imgs_loading = this.imgs.length > 6 ? 6 : this.imgs.length;
    },
    load_more(){
       //  set size load_more is 6
      this.imgs_loading = this.imgs.length > this.imgs_loading + 6 ? this.imgs_loading + 6 : this.imgs.length;
    },
    
  }
};
</script>
<style lang="scss" scoped>
  .masonry-item {
    cursor: pointer;
  }
</style>
