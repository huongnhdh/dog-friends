<template>
  <div class="container">
    <div class="card-list columns is-4" v-if="dog_breeds.length">
      <div v-for="dog_breed in dogs" :key="dog_breed">
        <Card :dog_breed="dog_breed" />
      </div>
    </div>
    <div v-else class="error">
      <p>Oops.. were you expecting someone?</p>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: `Card-List`,
  components: {
    Card
  },
  data() {
    return {
      dog_breeds: []
    };
  },
  computed: {
    dogs() {
      if (this.dog_breeds.length) {
        return this.dog_breeds.filter(
          dog =>
            dog
              .toLowerCase()
              .includes(this.$store.state.searchField.toLowerCase()) === true
        );
      }
      return ``;
    }
  },
  created() {
    fetch(`https://dog.ceo/api/breeds/list`)
      .then(res => res.json())
      .then(data => {
        this.dog_breeds = data.message;
      });
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