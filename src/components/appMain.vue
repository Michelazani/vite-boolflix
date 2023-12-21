<script >
import { store } from '../js/store.js';


export default {
    data() {
        return {
            store
        }
    },
    
}
</script>

<template>
    <div class="container">
        <article class="row">
            <p class="card" v-for="singleMovie in store.moviesList">
                Title: {{ singleMovie.title }} <br>
                Original title: {{ singleMovie.original_title }} <br>
                Original language: {{ singleMovie.original_language }} <br>
                Vote: {{ singleMovie.vote_average }}
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