<script >
import { store } from '../js/store.js';


export default {
    data() {
        return {
            store,
            itFlag: 'src/assets/img/it.png',
            enFlag: 'src/assets/img/en.png',
            esFlag: 'src/assets/img/es.png',
            frFlag: 'src/assets/img/fr.png',
            dimensionPoster:'https://image.tmdb.org/t/p/w500',
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
    }
    }
    
}
</script>

<template>

    <main>
        <div class="container">
            <article class="row">
                <h4>Movies:</h4>
                <p class="card" v-for="(singleMovie, index) in store.moviesList">
                    Poster: <img class="poster-path" :src="this.dimensionPoster + singleMovie.poster_path" alt="poster of the movie">
                    Title: {{ singleMovie.title }} <br>
                    Original title: {{ singleMovie.original_title }} <br>
                    Original language <img class="language" :src="stringLanguageToImg(singleMovie)"> <br>
                    Vote: {{ singleMovie.vote_average }}
                </p>
            </article>
            <article class="row">
                <h4>Tv Shows:</h4>
                <p class="card" v-for="singleTv in store.tvShowsList">
                    Title: {{ singleTv.name }} <br>
                    Original title: {{ singleTv.original_name }} <br>
                    <!-- TERNARY OPERATOR SU IMG CHE SE NON METTO IMG , RISULTA IL TESTO MA NON VA!!!!! -->
                    Original language: <img :src="originalLanguage ? stringLanguageToImg(singleMovie) : ''"> <br>
                    Vote: {{ singleTv.vote_average }}
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