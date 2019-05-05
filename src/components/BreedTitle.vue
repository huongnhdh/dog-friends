<template>
  <div class="has-text-centered">
    <div class="container avatar-area">
      <div class="columns is-mobile is-centered" id="avatar-div">
        <div class="column is-half avatar-div">
          <figure class="is-centered">
            <div class="is-circle-outer">
              <img class="is-circle-inner" :src="img_url">
            </div>
          </figure>
        </div>
      </div>
    </div>
    <h1>
      {{name}}
      <svg-icon icon-class="speaker" @click="speech"/>
    </h1>
  </div>
</template>
<script>
export default {
  name: "BreedTitle",
  props: {
    name: {
      type: String,
      required: true
    },
    img_url: {
      type: String,
      required: true,
      default: require("../assets/images/dog_grey.svg")
    }
  },
  methods: {
    speech: function(event) {
      responsiveVoice.speak(this.name, "UK English Male");
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

#avatar-div {
  background-color: $primary-second-color;
  padding-top: 5%;
  margin-top: 1%;
}

.avatar-area {
  padding-bottom: 110px;
}

.is-circle-outer {
  background-color: $background-color;
  position: relative;
  height: 220px;
  width: 220px;
  border-radius: 50%;
  margin-bottom: -50%;
  position: relative;
  padding: 0px 0px 0px 0px 0px;
  // padding:
}
.is-circle-inner {
  border-radius: 50%;
  margin-top: 5%;
  margin-left: 2%;
  width: 90%;
  height: 90%;
  margin-bottom: -50%;
  border-width: 10px;
  border-color: $white;
  border-style: solid;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  top: -5px;
  left: -5px;
  //  transform: translate(10, 10);
}
</style>
