<template>
   <div id="app">
      <!-- <p>Root router path: {{ $route.fullPath }}</p> -->
        <ul>
            <li>
                <router-link :to="{name: 'bread_list'}">Bread browser</router-link>
            </li>
            <li>
                <router-link :to="{name: 'bread', params: {breed_name: 'pug'}}">Detail breed</router-link>
            </li>

        </ul>
      <router-view />
  </div>
</template>
<script>
export default {
  name: `App`
}
</script>