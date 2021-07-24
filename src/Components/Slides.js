import React from 'react'
import Trending from '../Services/Trending'
import BaseUrl from './BaseUrl'
import Styleds from './Styleds'


const SlideShow = Styleds.SlideShow,
SingleSlides = Styleds.SingleSlides,
Slide = Styleds.Slides,
SlideText = Styleds.SlideText



export default class Slides extends React.Component {

    state ={
        movies: [],
        currentSlide: 0,
        count: 0
        
    }

    componentDidMount(){
        this.getData();
        setInterval(this.toggleNext, 7000)
        
        
    }

    getData = async () =>{
        const res = await Trending.get();
        
        const movies = res.data.results.map(item => {
            return {
                ...item,
                backdrop_path: `${BaseUrl}${item.backdrop_path}`
            }
            
        })

        this.setState({
            movies: movies
        })
        
    }

  
    

    toggleNext = () => {
        const current = this.state.currentSlide;
        let next = current + 1;

        if(next > this.state.movies.length -1) {
           next = 0;
        }
        this.setState({
            currentSlide: next
        })

    }

    togglePrev = ()=>{
        const current = this.state.currentSlide;
        let prev = current - 1;
        if(prev < 0){
            prev = this.state.movies.length -1;
        }
        this.setState({
            currentSlide: prev
        })
        if(this.props.isActive){
            this.state.movies.filter(item => item.props.isActive.style.right  = '100%')
        }
    }

    /*toggleSlide= (id)=>{
        let index = this.state.movies.map(el => el.id);
        let currentIndex = index.indexOf(id);
        this.setState({
            currentSlide : currentIndex
        })
        console.log(this.state)
    }  */

    render(){
       
        return(
            <SlideShow>
                <Slide>
                   {this.state.movies.map((item, index) =>{
                       let isActive = this.state.currentSlide === index;
                       return (
                           <SingleSlides 
                           active={isActive} key={item.id} background={item.backdrop_path} title={item.title || item.name} 
                           style={
                               (!isActive)? {'right':'100%'}: {'right': '0', 'transition' : 'ease right 1s'}
                               
                           } >
                               <SlideText>{item.title || item.name}</SlideText>
                              
                           </SingleSlides>
                       )
                   })}
                   <div className='btn-container'>
                   <button onClick={this.togglePrev} >Prev</button>
                    <button onClick={this.toggleNext} >Next</button>
                   </div>
                </Slide>
            </SlideShow>
        )
    }
}