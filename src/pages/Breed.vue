<template>
  <div class="has-text-centered">
     <figure class="image is-128x128">
        <img class="is-rounded" :src="url" />
    </figure>
  </div>
</template>
<script>
export default {
  name: 'Breed',
  props: {
    breed_name: Number,
},
  data(){
   return {
      url: "https://bulma.io/images/placeholders/128x128.png",
      breed_name: null
   }
  },
  mounted(){
     fetch(`https://dog.ceo/api/breed/${this.breed_name}/images/random`)
      .then(res => res.json())
      .then(data => {
        this.url = data.message;
      });
  }
}
</script>
