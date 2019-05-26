<template>
  <div class="container">
    <div class>
      <div class="column">
        <div class="field has-addons ">          
          <div class="control is-expanded">
            <!-- <input class="input" type="text" placeholder="Find a repository"> -->
            <input
              class="input search-box"
              type="text"
              placeholder="search dog breed..."
              v-model="params"
              @input="update_filter_key(params)"
            >
          </div>
          <div class="control">
            <a class="button search-icon">
              <svg-icon icon-class="search"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex'
export default {
  name: `Search`,
  data(){
    return {
      params: ``
    }
  },
  computed: {
  },
  methods: {
    // updateParams(params) {
    //   this.$store.commit(`UPDATE_SEARCH_FIELD`, params);
    // },
    // ...mapMutations({
    //   update_filter_key: 'breed/UPDATE_FILTER_KEY'
    // })
    ...mapActions({
       update_filter_key: 'breed/update_filter_key'
    })
  }
};
</script>

<style lang="scss" scoped>
/* ::placeholder {
  color: #fafafa;
  opacity: 1;
}
input {
  height: 1rem;
  width: 50vw;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: "Indie Flower", cursive;
  background: none;
  border: none;
  border-left: 1px solid #fafafa;
  border-bottom: 1px solid #fafafa;
  border-radius: 0;
  color: #fafafa;
} */
input:focus {
  outline: none;
}

.search-icon {
  color: $primary-second-color;
  background-color: $white;
  border: none;
}
.search-box {
  border-left: 0.3rem solid $primary-second-color;
}

.field {
   box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
