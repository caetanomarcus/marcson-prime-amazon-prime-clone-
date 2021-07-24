import axios from 'axios'
import React from 'react'
import TvShowsApi from '../../Services/TvShowsApi'
import Cards from '../../Components/Cards'
import BaseUrl from '../../Components/BaseUrl'
import Generate from '../../Components/generateCards'

export default class Filmes extends React.Component {

    state= {
        trendings: []
    }

    componentDidMount(){
        this.getShows();
       
    }

    getShows = async () => {
        const page1 = await TvShowsApi.get()
        const page2 = await  axios.get('https://api.themoviedb.org/3/tv/popular?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=pt-BR&page=2')
        const shows = [...page1.data.results, ...page2.data.results]

        const moviesWithPosters = shows.map(item => {
            return {
                ...item,
                poster_path: BaseUrl + item.poster_path,
                backdrop_path: BaseUrl + item.backdrop_path
            }
        })

        this.setState({
            trendings: moviesWithPosters
        })
    }


    render (){
        return(
            <Cards title='As melhores séries' shows={this.state.trendings} > 
                {this.state.trendings.map(item => {
                   return <Generate films={item} />
               })}
            </Cards>
        )
    }
}