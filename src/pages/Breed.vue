<template>
  <div>
    <BreedTitle :name="breed_name" :img_url="url"/>
    <breed-nav/>
  </div>
</template>
<script>
import BreedTitle from "../components/BreedTitle.vue";
import BreedNav from "../components/BreedNavigation.vue";

export default {
  name: "Breed",
  props: {
    breed_name: String
  },
  components: { BreedTitle, BreedNav },
  data() {
    let dog_breed = this.breed_name
      .split("-")
      .reverse()
      .join("/");
    return {
      url: require("../assets/images/dog_grey.svg"),
      api_get_breed: `https://dog.ceo/api/breed/${dog_breed}/images/random`
    };
  },
  mounted() {
    fetch(this.api_get_breed)
      .then(res => res.json())
      .then(data => {
        this.url = data.message;
      });
  }
};
</script>
<style lang="scss" scoped>
</style>
