<template>
  <section id="search" class="children_is_center">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half hero-body">
          <div class="field has-addons is-half is-centered">
            <div class="control">
              <!-- <input class="input" type="text" placeholder="Find a repository"> -->
              <input
                class="input"
                type="text"
                placeholder="search dog breed..."
                v-model="params"
                @input="updateParams(params)"
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
  </section>
</template>

<script>
export default {
  name: `Search`,
  data() {
    return {
      params: ``
    };
  },
  methods: {
    updateParams(params) {
      this.$store.commit(`UPDATE_SEARCH_FIELD`, params);
    }
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
  color: $white;
  background-color: $orange;
  border: none;
}
</style>
