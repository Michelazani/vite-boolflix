<script >
import axios from 'axios';
import { store } from '../js/store.js';

export default {
    data() {
        return {
            store,
            searchMovies: '',
            movies: [],
            moviesApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=af2d007dc49307ea5757760954dfd889&query=vampire',
            // faccio in modo che si aggiunga alla parola ricercata dall'utente
            apiUrlNoQuery: 'https://api.themoviedb.org/3/search/movie?api_key=af2d007dc49307ea5757760954dfd889&query=',
        }
    },
    name: 'appMain',
    components:{
    },
    methods: {
        getMovie() {
            axios.get(this.moviesApiUrl)
                .then((response) => {
                    // handle success
                    console.log(response.data.results);
                    this.store.moviesList = response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        filterMovies(){
            axios.get(this.apiUrlNoQuery)
                .then((response) => {
                    // handle success
                    this.store.moviesList = this.apiUrlNoQuery + this.searchMovies;
                    console.log(this.store.moviesList);

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    created(){
        this.getMovie();
    }
}
</script>

<template>
    <div class="input-group m-5">
      <input type="text" class="" placeholder="Type a movie" aria-label="Type a movie" aria-describedby="button-addon2" v-model="searchMovies">
      <button class="btn btn-dark" type="button" id="button-addon2" @click="filterMovies()">Search</button>
    </div>


</template> 

<style lang="scss" scoped>

</style>