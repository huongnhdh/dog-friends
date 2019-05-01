<template>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="url" alt="dog_breed">
        </figure>
      </div>
      <div class="card-content">
        <p class="title">{{ dog_breed }}</p>
        <p class="subtitle">{{ dog_breed }}</p>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="$router.push({ name: 'breed', params: { id: dog_breed } })">Detail</a>
        <a href="#" class="card-footer-item">
          <span>
            Share on
            <a href="#">Facebook</a>
          </span>
        </a>
      </footer>
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
      url: require("../assets/images/baby-dog.png")
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

<style scoped lang="scss">
.card {
  text-align: center;
  background-color: #9eebcf;
  border-radius: 0.5rem;
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

.card-footer a {
  color: #000;
  &:hover{
    font-weight: 2rem;
  }
}
</style>