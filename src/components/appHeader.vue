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
    <header>
        <section class="input-group">
            <h2>boolflix</h2>
            <input type="text" class="" placeholder="Type a movie" aria-label="Type a movie" aria-describedby="button-addon2" v-model="searchedString" @keyup.enter="store.getMoviesAndTvSeries(searchedString)">
        </section>
    </header>
    
</template> 

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/mixins' as *;
    @use '../style/partials/variables' as *;

    header{
        section{
            display: flex;
            justify-content: space-between;
            padding: 0.8rem 5rem;
            background-color: black;
        }
        input{
            height: 2rem;
        }
        h2{
            color: red;
            text-transform: uppercase;
        }
        
    }
</style>