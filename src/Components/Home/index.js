import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Trending from '../../Services/Trending'
import BaseUrl from '../BaseUrl'


const Container = styled.div `
    display: flex;
    max-width: 100vw;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100vw;
    margin: 3vw 0 0 0;
`


const ImgBg = styled.div `
    background-image: url(${props => props.background}) ;
    background-size: cover; 
    width: 200px;
    height: 300px;
    margin: 1vw;
    cursor: pointer;
    
    &:hover ~ div{
        display: block;
    }

`

const insideBg = styled.div `
    background-color: black;
    width: 100%;
    height: 100%;
    

`

export default class Home extends React.Component {

    state= {
        trendings: []
    }

    componentDidMount(){
        this.getShows();
       
    }

    getShows = () => {
        Trending.get()
            .then( res => {
                const resposta = res.data.results
                this.setState({
                    trendings: resposta
                })
            })

        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=pt-BR&page=2')
        .then(res => {
            const resposta = res.data.results;
            this.setState({
                trendings: [...this.state.trendings, ...resposta]
            })
        })
    }


    render (){
        return(
            <Container>
                {this.state.trendings.map(films => 
                    <ImgBg background={BaseUrl+films.poster_path} >
                        <insideBg style={{'display': 'none'}} >olá mundo</insideBg>
                    </ImgBg>
                )}
            </Container>
        )
    }
}