<template>
  <div @click="$router.push({ name: 'breed', params: { id: dog_breed } })">
    <img :src="url" class="card-image">
    <div>
      <h2>{{ dog_breed }}</h2>
      <!-- <p>{{ cat.email }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: `Card`,
  props: {
    dog_breed: {
      type: String
    }
  },
  data() {
    return {
      url: require('../assets/images/baby-dog.png')
    };
  },
  mounted() {
    fetch(`https://dog.ceo/api/breed/${this.dog_breed}/images/random`)
      .then(res => res.json())
      .then(data => {
        this.url = data.message;
      });
  }
};
</script>

<style scoped>
.card-image {
  /* border-radius: 50%; */
  width: 100%;
  max-width: 640px;
  border-style: none;
}
</style>