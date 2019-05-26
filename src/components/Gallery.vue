<template>
  <div class="container">
    <masonry
      :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
      :gutter="{default: '30px', 700: '15px'}"
      >
      <div v-for="(img, index) in imgs" :key="index">
        <img :src="img" alt="missdogs.com">
        </div>
    </masonry>
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
      imgs_loading: []
    };
  },
  watch: {
    // imgs: function (val) {
    //   if (val.length > 0) this.getImgs();
    // }
  },
  created() {
    const self = this;
    setTimeout(function() {
      self.getImgs();
    }, 3000);
  },
  methods: {
    getImgs() {
      //  set size is 10
      const upper_bound = this.imgs.length > 10 ? 10 : this.imgs.length;
      this.imgs_loading = this.imgs.slice(0, upper_bound);
    }
  }
};
</script>
<style lang="scss" scoped>
// .card-img {
//   background-color: $white;
//   box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
//   &:hover {
//     transform: scale(1.03);
//   }
// }
// .card {
//   // min-height: 250px;
// }

//  masonry layout
.card-columns {
  column-count: 1;
  column-gap: 1.5rem;
  padding: 1.5rem;
}

.card-columns .card {
  display: inline-block;
  width: 100%;
  margin-bottom: 1.5rem;
}

.columns-6 {
  column-count: 6;
}
.columns-5 {
  column-count: 5;
}
.columns-4 {
  column-count: 4;
}
.columns-3 {
  column-count: 3;
}
.columns-2 {
  column-count: 2;
}
.columns-1 {
  column-count: 1;
}

@media (min-width: 576px) {
  .columns-6-sm {
    column-count: 6;
  }
  .columns-5-sm {
    column-count: 5;
  }
  .columns-4-sm {
    column-count: 4;
  }
  .columns-3-sm {
    column-count: 3;
  }
  .columns-2-sm {
    column-count: 2;
  }
  .columns-1-sm {
    column-count: 1;
  }
}

@media (min-width: 768px) {
  .columns-6-md {
    column-count: 6;
  }
  .columns-5-md {
    column-count: 5;
  }
  .columns-4-md {
    column-count: 4;
  }
  .columns-3-md {
    column-count: 3;
  }
  .columns-2-md {
    column-count: 2;
  }
  .columns-1-md {
    column-count: 1;
  }
}

@media (min-width: 992px) {
  .columns-6-lg {
    column-count: 6;
  }
  .columns-5-lg {
    column-count: 5;
  }
  .columns-4-lg {
    column-count: 4;
  }
  .columns-3-lg {
    column-count: 3;
  }
  .columns-2-lg {
    column-count: 2;
  }
  .columns-1-lg {
    column-count: 1;
  }
}

@media (min-width: 1200px) {
  .columns-6-xl {
    column-count: 6;
  }
  .columns-5-xl {
    column-count: 5;
  }
  .columns-4-xl {
    column-count: 4;
  }
  .columns-3-xl {
    column-count: 3;
  }
  .columns-2-xl {
    column-count: 2;
  }
  .columns-1-xl {
    column-count: 1;
  }
}
</style>
