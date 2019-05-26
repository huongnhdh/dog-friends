<template>
  <div class="container">
    <div class="card-list columns" v-if="get_dogs_by_filter_key.length">
      <div v-for="dog_breed in get_dogs_by_filter_key" :key="dog_breed.code">
        <Card :dog_breed="dog_breed"/>
      </div>
    </div>
    <div v-else class="error">
      <p>Oops.. were you expecting someone?</p>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: `Card-List`,
  components: {
    Card
  },
  computed: {
    ...mapGetters("breed", ["get_dogs_by_filter_key"])
  },
  methods: {
    ...mapActions("breed", ["getList"])
  },
  updated() {
    // console.log("updated!");
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.error {
  font-size: 1.3rem;
  color: #fafafa;
}
</style>