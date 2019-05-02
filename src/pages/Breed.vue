<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-half avatar-div">
        <figure class="image is-128x128 is-centered">
          <img class="is-rounded" :src="url">
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Breed",
  props: {
    breed_name: String
  },
  data() {
    return {
      url: "https://bulma.io/images/placeholders/128x128.png"
      // breed_name: null
    };
  },
  mounted() {
    fetch(`https://dog.ceo/api/breed/${this.breed_name}/images/random`)
      .then(res => res.json())
      .then(data => {
        this.url = data.message;
      });
  }
};
</script>
<style lang="scss" scoped>
.avatar-div {
  // set in parent of item need to center
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
