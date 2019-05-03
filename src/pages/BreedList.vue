<template>
  <div >
    <!-- <Header /> -->
    <Search />
    <Card-List/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import CardList from "../components/CardList.vue";
import Search from "../components/Search.vue";

export default {
  name: `BreedList`,
  components: {
    CardList,
    Search,
  }
};
</script>
<style lang="sass" scoped>

</style>