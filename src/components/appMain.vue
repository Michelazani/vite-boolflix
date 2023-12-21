<script >
import { store } from '../js/store.js';


export default {
    data() {
        return {
            store,
            itFlag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png?20160518044416',
        }
    },
    methods:{

     stringLanguageToImg(singleMovie){
         if (singleMovie.original_language === 'it'){
             return itFlag
         } else{
             singleMovie.original_language
         }
     }
    }
    
}
</script>

<template>
    <div class="container">
        <article class="row">
            <h3>Movies:</h3>
            <p class="card" v-for="singleMovie in store.moviesList">
                Title: {{ singleMovie.title }} <br>
                Original title: {{ singleMovie.original_title }} <br>
                Original language: <img :src="stringLanguageToImg(singleMovie)"> <br>
                Vote: {{ singleMovie.vote_average }}
            </p>
        </article>
        <article class="row">
            <h3>Tv Shows:</h3>
            <p class="card" v-for="singleTv in store.tvShowsList">
                Original title: {{ singleTv.original_name }} <br>
                Original language: {{ singleTv.original_language }} <br>
                Vote: {{ singleTv.vote_average }}
            </p>
        </article>
    </div>
</template> 

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/mixins' as *;
    @use '../style/partials/variables' as *;
    p.card{
        width: calc((100% / 4) - 1rem);
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        padding: 1rem;
        background-color:rgba(209, 152, 236, 0.538);
    }   
</style>