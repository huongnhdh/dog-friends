<template>
  <div>
    <div class="card-list" v-if="dog_breeds.length">
      <div v-for="dog_breed in dogs" :key="dog_breed" class="card">
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
.card {
  text-align: center;
  background-color: #9eebcf;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem;
  display: inline-block;
  border-width: 0.25rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  min-width: 200px;
  transition: transform 0.25s ease-out;
}
.card:hover {
  transform: scale(1.03);
}
.error {
  font-size: 1.3rem;
  color: #fafafa;
}
</style>