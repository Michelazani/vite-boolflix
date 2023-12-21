import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    moviesList:[],
    // faccio in modo che si aggiunga alla parola ricercata dall'utente
    apiUrlNoQuery: 'https://api.themoviedb.org/3/search/movie?api_key=af2d007dc49307ea5757760954dfd889&query=',

        getMovie(searchContent = '') {
            axios.get(this.apiUrlNoQuery + searchContent)
                .then((response) => {
                    // handle success
                    console.log(response.data.results);
                    this.moviesList = response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
});