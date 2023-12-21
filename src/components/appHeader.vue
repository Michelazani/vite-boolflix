<script >
import { store } from '../js/store.js';

export default{
    name: 'appHeader',
    data() {
        return {
            store,
            searchedString: '',
        }
    }
}
</script>

<template>
    <section class="input-group m-5">
      <input type="text" class="" placeholder="Type a movie" aria-label="Type a movie" aria-describedby="button-addon2" v-model="searchedString" @keyup.enter="store.getMovie(searchedString)">
      <button class="btn btn-dark" type="button" id="button-addon2" @click="store.getMoviesAndTvSeries(searchedString)">Search</button>
    </section>
</template> 

<style lang="scss" scoped>
   
</style>