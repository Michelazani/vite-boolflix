<script >
import { store } from '../js/store.js';


export default {
    data() {
        return {
            store,
            itFlag: '/img/it.png',
            enFlag: '/img/en.png',
            esFlag: '/img/es.png',
            frFlag: '/img/fr.png',
            dimensionPoster:'https://image.tmdb.org/t/p/w342',
            numbersOfStars: 5,
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
        return singleMovie.original_language;
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
                <div v-if="store.moviesList.length === 0">
                    <h2 class="container w-50  pt-5">Search the title of a movie or of a tv show</h2>
                </div>
                <h4 v-if="store.moviesList.length > 0">Movies:</h4>
                <p class="card" v-for="singleMovie in store.moviesList">
                    <img class="poster-path" :src="this.dimensionPoster + singleMovie.poster_path" alt="poster of the movie">
                    <b>Title: </b>{{ singleMovie.title }} <br>
                    <b>Original title:</b> {{ singleMovie.original_title }} <br>
                    <b>Original language:</b>
                        <!--con v-if non riesco 
                        <span v-if="stringLanguageToImg(singleTv) !== ''">
                            <img class="language" :src="stringLanguageToImg(singleMovie)" :alt="singleMovie.original_language"> <br>
                        </span>
                        <span v-else> {{ singleMovie.original_language }} </span> <br> -->
                    <!-- inserimento alt (descrizione testuale dell'immagine) per mettere testo dove la lingua non corrisponde a img -->
                    <img class="language" :src="stringLanguageToImg(singleMovie)" :alt="singleMovie.original_language"> <br>
                    <!-- metto 5 stelle vuote e in base al voto , si devono colorare -->
                    <b>Vote: </b> <span class="star" v-for="star in numbersOfStars" :class="(star <= numberStarVote(singleMovie)) ? 'full-star' : '0'"> &#9733; </span>
                </p>
            </article>
            <article class="row">
                <h4 v-if="store.moviesList.length > 0">Tv Shows:</h4>
                <p class="card" v-for="singleTv in store.tvShowsList">
                    <img class="poster-path" :src="this.dimensionPoster + singleTv.poster_path" alt="poster of the movie">
                    <b>Title:</b> {{ singleTv.name }} <br>
                    <b>Original title:</b> {{ singleTv.original_name }} <br>
                    <b>Original language: </b> <img class="language" :src="stringLanguageToImg(singleTv)" :alt="singleTv.original_language"> <br>
                    <b>Vote:</b> <span class="star" v-for="star in numbersOfStars" :class="(star <= numberStarVote(singleTv)) ? 'full-star' : '0'"> &#9733; </span>
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
            width: calc((100% / 4) - 2rem);
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
                margin-left: 0.5rem;
                vertical-align: baseline;
            }
            span.full-star{
                color: yellow;
            }
    }   
    }
    
</style>