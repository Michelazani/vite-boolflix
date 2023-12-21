<script >
import { store } from '../js/store.js';


export default {
    data() {
        return {
            store,
            itFlag: 'src/assets/img/it.png',
            enFlag: 'src/assets/img/en.png',
            esFlag: 'src/assets/img/es.png'
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
        } else {
            return singleMovie.original_language
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
                Original language <img :src="stringLanguageToImg(singleMovie)"> <br>
                Vote: {{ singleMovie.vote_average }}
            </p>
        </article>
        <article class="row">
            <h3>Tv Shows:</h3>
            <p class="card" v-for="singleTv in store.tvShowsList">
                Original title: {{ singleTv.original_name }} <br>
                Original language: <img :src="stringLanguageToImg(singleTv)"> <br>
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
        display: inline-block;
        img{
            width: 1rem;
        }
    }   
</style>