<script >
import { store } from '../js/store.js';


export default {
    data() {
        return {
            store,
            itFlag: 'public/img/it.png',
            enFlag: 'public/img/en.png',
            esFlag: 'public/img/es.png',
            frFlag: 'public/img/fr.png',
            dimensionPoster:'https://image.tmdb.org/t/p/w342',
        }
    },
    methods:{
    stringLanguageToImg(singleMovie){
        if (singleMovie.original_language === 'it'){
            return this.itFlag
        } else if (singleMovie.original_language === 'en'){
            return this.enFlag
        } else if (singleMovie.original_language === 'es'){
            return this.esFlag
        } else if (singleMovie.original_language === 'fr'){
            return this.frFlag
        }else {
            return singleMovie.original_language
        }
    },
    numberStarVote(singleMovie){
       return Math.round(singleMovie.vote_average /2)
    }
    }
    
}
</script>

<template>

    <main>
        <div class="container">
            <article class="row">
                <h4>Movies:</h4>
                <p class="card" v-for="singleMovie in store.moviesList">
                    <img class="poster-path" :src="this.dimensionPoster + singleMovie.poster_path" alt="poster of the movie">
                    <b>Title: </b>{{ singleMovie.title }} <br>
                    <b>Original title:</b> {{ singleMovie.original_title }} <br>
                    <b>Original language:</b>
                    <!-- <span v-if="">
                        <img class="language" :src="stringLanguageToImg(singleMovie)"> <br>
                    </span>
                    <span v-else> {{ singleMovie.original_language }} </span>                     --> <br>
                    <b>Vote: </b> {{ numberStarVote(singleMovie) }}
                </p>
            </article>
            <article class="row">
                <h4>Tv Shows:</h4>
                <p class="card" v-for="singleTv in store.tvShowsList">
                    <img class="poster-path" :src="this.dimensionPoster + singleTv.poster_path" alt="poster of the movie">
                    <b>Title:</b> {{ singleTv.name }} <br>
                    <b>Original title:</b> {{ singleTv.original_name }} <br>
                    <b>Original language: </b>
                    <span v-if="stringLanguageToImg(singleTv)">
                        <img class="language" :src="stringLanguageToImg(singleTv)"> <br>
                    </span>
                    <span v-else> {{ singleTv.original_language }} </span>
                    <b>Vote:</b> {{ singleTv.vote_average }}
                </p>
            </article>
        </div>
    </main>
</template> 

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/mixins' as *;
    @use '../style/partials/variables' as *;

    main{
        height: 100vh;
        overflow: scroll;
        background-color: $bg-dark-gray;
        color: white;
        h4{
            padding: 1.5rem;
        }

        p.card{
            border: 1px solid white;
            color: white;
            width: calc((100% / 3) - 2rem);
            margin-left: 1rem;
            margin-right: 1rem;
            padding: 1rem;
            background-color:black;
            display: inline-block;
            img.poster-path{
                width: 100%;
            }
            img.language{
                width: 1rem;
            }
    }   
    }
    
</style>