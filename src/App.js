import React from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link 
} from 'react-router-dom'
import lupa from './assets/lupa.png'
import SlideShow from './Components/SlideShow'
import Home from './Components/Home/index'
import BaseUrl from './Components/BaseUrl'
import Trending from './Services/Trending'
import axios from 'axios'
import Styleds from './Components/Styleds'


const GlobalStyle = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
  
  }

  body{
    background: #1A242F;
    color: #fff;
  }

  a{
    color: inherit;
  }

`

const Header = Styleds.Header;
const TopHeader = Styleds.TopHeader;
const HeaderContainersMenu = Styleds.HeaderContainersMenu;
const HeaderContainersSearcher = Styleds.HeaderContainersSearcher;
const BackHeader = Styleds.BackHeader;
const MarcPrime = Styleds.MarcPrime;
const Menu = Styleds.Menu;
const ItemsMenu = Styleds.ItemsMenu;
const LabelForSeacher = styled.label `
  border: #fff solid 1px;
  display: flex;
  align-items: center; 
  
`

const Seacher = styled.input `
  width: 200px;
  height: 35px;
  outline: none;
  border-style: none;
  background: #1A242F;
  font-size: 1.1rem;
  color: #fff;
  
  &::placeholder{
    color: #fff;
    
  }

`
const SearcherImg = styled.img `
  width: 25px;
  margin: 3px;
`

const Container = styled.div `
    display: flex;
    max-width: 100vw;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100vw;
    margin: 3vw 0 0 0;
`
const Img = styled.img `
  width: 200px;
`

export default class App extends React.Component {

  state={
    films:'',
    busca: '',
    searchedFilms: []
  }

  componentDidMount(){
    this.getData();
  }

  getData = ()=> {
    Trending.get()
      .then(res =>{
        const filmes = res.data.results;
        this.setState({
          films: filmes,
          searchedFilms: filmes,
          
        })
      })

      axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=pt-BR&page=2')
        .then(res => {
            const resposta = res.data.results;
            this.setState({
                films: [...this.state.films, ...resposta],
                searchedFilms: [this.state.films, ...resposta]
            })
        })


  }

  searchFilms = () => {
    if(this.state.busca.length > 0){
      this.setState({
        searchedFilms: this.state.films.filter(i => {
          return this.removeAccents(i.title || i.name).toLowerCase().match(this.removeAccents(this.state.busca).trim().toLowerCase())
        })
      })
    } else {
      this.setState({
        searchedFilms: this.state.films
      })
    }
  }

  removeAccents = (text) =>{
    text = text.replace(/[ÀÁÂÃÄÅ]/,"a");
    text = text.replace(/[àáâãäå]/,"a");
    text = text.replace(/[ÈÉÊË]/,"e");
    text = text.replace(/[Ç]/,"c");
    text = text.replace(/[ç]/,"c");
    text = text.replace(/[úù]/, 'u');
    text = text.replace(/[ÙÚ]/, 'u');

    return text
  }

  handleChange = (e) => {
    this.setState({
      busca: e.target.value
    })
  
  }

  render(){

    return(
      <Router>
        <GlobalStyle />
        <Header>
          <TopHeader>
            <HeaderContainersMenu>
              <MarcPrime>
                <Link to='/' >marcson prime</Link>
              </MarcPrime>
              <Menu>
                <ItemsMenu>
                  <Link to='/home' >Home</Link>
                </ItemsMenu>
                <ItemsMenu >
                  <Link to='/filmes'  >Filmes</Link>
                </ItemsMenu>
                <ItemsMenu >
                  <Link to='/series' >Séries</Link>
                </ItemsMenu>
              </Menu>
            </HeaderContainersMenu>
            <HeaderContainersSearcher>
              <LabelForSeacher>
                <SearcherImg src={lupa} />
                <Seacher type='text' placeholder='Busca' value={this.state.busca} onChange={this.handleChange} onKeyUp={this.searchFilms} />
              </LabelForSeacher>
            </HeaderContainersSearcher>
          </TopHeader>
          <BackHeader>
            <SlideShow />
          </BackHeader>

          {(this.state.busca === '')? <Switch>
            <Route exact path='/' > 
              <Home />
            </Route>
            <Route path='/home' > 
            <Home />
            </Route>
            <Route path='/filmes' > 

            </Route>
            <Route path='/series' > 

            </Route>
          </Switch> : <Container>{this.state.searchedFilms.map(item => (
            <Img src={BaseUrl+item.poster_path} />
          ))}</Container>}

        </Header>

      </Router>
    )
  }
}