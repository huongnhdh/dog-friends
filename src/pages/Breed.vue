<template>
  <div>
    <BreedTitle :name="breed_name" :img_url="urls[0]"/>
    <breed-nav/>
    <gallery :imgs="urls"/>
  </div>
</template>
<script>
import BreedTitle from "../components/BreedTitle.vue";
import BreedNav from "../components/BreedNavigation.vue";
import Gallery from "../components/Gallery.vue"

export default {
  name: "Breed",
  props: {
    breed_name: String
  },
  components: { BreedTitle, BreedNav, Gallery },
  data() {
    let dog_breed = this.breed_name
      .split("-")
      .reverse()
      .join("/");
    return {
      urls:[],
      api_get_breed: `https://dog.ceo/api/breed/${dog_breed}/images`
    };
  },
  beforeMount() {
    fetch(this.api_get_breed)
      .then(res => res.json())
      .then(data => {
        this.urls = data.message;
      }).catch(err => {
        this.urls = [];
      });
  }
};
</script>
<style lang="scss" scoped>
</style>
