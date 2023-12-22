import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    moviesList:[],
    tvShowsList: [],
    apiUrlNoQuery: 'https://api.themoviedb.org/3/search/movie?api_key=af2d007dc49307ea5757760954dfd889&query=',
    apiTvNoQuery: 'https://api.themoviedb.org/3/search/tv?api_key=af2d007dc49307ea5757760954dfd889&query=',
    
    
    posterMovies : '' ,

    // funzione per richiamare la lista film in base alla ricerca dell'utente
    getMovie(searchContent =''){
        axios.get(this.apiUrlNoQuery + searchContent)
            .then((response) => {
                // handle success
                console.log(response.data.results);
                this.moviesList = response.data.results;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    },
    // funzione per richiamare la lista Tv show in base alla ricerca dell'utente

    getTvShow(searchContent=''){
        axios.get(this.apiTvNoQuery + searchContent)
            .then((response) => {
                // handle success
                console.log(response.data.results);
                this.tvShowsList = response.data.results;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    },
    // funzione che unisce movie e Tv show in modo da inserirle in un unico click e keyup.enter
    getMoviesAndTvSeries(searchedString){
        this.getMovie(searchedString);
        this.getTvShow(searchedString);
    },
});