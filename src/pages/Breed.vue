<template>
  <div>
    <breed-title :name="breed_name" :img_url="breed.avatar"/>
    <breed-nav/>
    <gallery :imgs="breed.imgs"/>
  </div>
</template>
<script>
import BreedTitle from "../components/BreedTitle.vue";
import BreedNav from "../components/BreedNavigation.vue";
import Gallery from "../components/Gallery.vue"
import { mapActions, mapState } from 'vuex';

export default {
  name: "Breed",
  props: {
    breed_name: String
  },
  components: { BreedTitle, BreedNav, Gallery },
  computed: {
    ...mapState('breed', {
      breed: 'item'
    })
  },
  methods: {
    ...mapActions('breed', { 'getDetailBreed': 'getDetailBreed' })
  },
  created(){
    this.getDetailBreed(this.breed_name)
  }
};
</script>
<style lang="scss" scoped>
</style>
