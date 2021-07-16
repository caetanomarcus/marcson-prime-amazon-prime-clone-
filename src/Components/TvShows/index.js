import axios from 'axios'
import React from 'react'
import TvShowsApi from '../../Services/TvShowsApi'
import BaseUrl from '../BaseUrl'
import Styleds from '../Styleds'


const Container = Styleds.Container,
ImgBg = Styleds.ImgBg,
InsideBg = Styleds.InsideBg,
Title = Styleds.Title,
SecondTitle = Styleds.SecondTitle,
TitleContainer = Styleds.TitleContainer

export default class Filmes extends React.Component {

    state= {
        trendings: []
    }

    componentDidMount(){
        this.getShows();
       
    }

    getShows = () => {
        TvShowsApi.get()
            .then( res => {
                const resposta = res.data.results
                this.setState({
                    trendings: resposta
                })
            })

        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=pt-BR&page=2')
        .then(res => {
            const resposta = res.data.results;
            this.setState({
                trendings: [...this.state.trendings, ...resposta]
            })
            
        })
    }


    render (){
        return(
            <>
                <TitleContainer>
                <Title>Prime</Title>
                <SecondTitle>As melhores séries</SecondTitle>
            </TitleContainer>
                <Container>
                    {this.state.trendings.map(films => 
                        <ImgBg background={BaseUrl+films.poster_path} >
                            <InsideBg style={{'display': 'none'}} key={films.id} >olá mundo</InsideBg>
                        </ImgBg>
                    )}
                </Container>
            </>
        )
    }
}