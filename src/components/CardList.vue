<template>
  <div class="container">
    <div class="card-list columns" v-if="dog_breeds.length">
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
import { mapState } from 'vuex';
export default {
  name: `Card-List`,
  components: {
    Card
  },
   computed: {
    ...mapState({
      dog_breeds:  state => state.breed.list,
    }),
    dogs() {
      if (this.dog_breeds.length) {
        return this.dog_breeds.filter(
          dog =>
            dog
              .toLowerCase()
              .includes(this.$store.state.searchField.toLowerCase().trim()) === true
        );
      }
      return [];
    }
  },
  created() {
    // fetch(`https://dog.ceo/api/breeds/list/all`)
    //   .then(res => res.json())
    //   .then(data => {
    //     let dog_breeds = [];
    //     const _dog_breeds = data.message;
    //     Object.keys(_dog_breeds).forEach(function(key) {
    //       if (_dog_breeds[key].length === 0){
    //          dog_breeds.push(key)
    //       }else{
    //         _dog_breeds[key].forEach((k) => {
              
    //          dog_breeds.push(`${k}-${key}`)
    //         })
    //       }
    //     });
       
    //     this.dog_breeds = dog_breeds;
    //   });
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