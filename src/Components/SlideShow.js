import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Trending from '../Services/Trending'
import BaseUrl from './BaseUrl';


const EachSlide = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-size: 100%;
    background-position: top center;
    background-repeat: no-repeat; 
    height: 19.5vw;

`

const SlideText = styled.h1 `
    font-size: 3rem;
    margin-left: 4rem;
`

class SlideShow extends React.Component {

    state= {
        movies: []
    }

    componentDidMount(){
        this.getImg();
    }

    getImg = () => {
        Trending.get()
            .then( res => {
               const movies = res.data.results;
                this.setState({
                    movies: movies
                })
                
            })
    }


    render(){
    return (
        <>
            <Slide easing='ease' > 
                {this.state.movies.map((film) => 
                    <div key={film.id}>
                        <EachSlide style={{'backgroundImage': `url(${BaseUrl}${film.backdrop_path})`}} >
                            <SlideText>{film.title || film.name}</SlideText>
                        </EachSlide>
                    </div>
                )}
            </Slide>
        </>
    )
    }
}

export default SlideShow;