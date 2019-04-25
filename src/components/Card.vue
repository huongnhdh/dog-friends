<template>
  <div>
    <img :src="url" class="card-image"  width="400" height="300" >
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
        console.log(data.message)
        this.url = data.message;
      });
  }
};
</script>

<style scoped>
.card-image {
  width: 100%;
  border-style: none;
}
</style>