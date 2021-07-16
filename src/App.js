import React from 'react'
import {createGlobalStyle} from 'styled-components'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link ,
  NavLink
} from 'react-router-dom'
import lupa from './assets/lupa.png'
import SlideShow from './Components/SlideShow'
import Home from './Components/Home/index'
import Filmes from './Components/Movies/index'
import Series from './Components/TvShows/index'
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

const Header = Styleds.Header,
 TopHeader = Styleds.TopHeader,
 HeaderContainersMenu = Styleds.HeaderContainersMenu,
 HeaderContainersSearcher = Styleds.HeaderContainersSearcher,
 BackHeader = Styleds.BackHeader,
 MarcPrime = Styleds.MarcPrime,
 Menu = Styleds.Menu,
 ItemsMenu = Styleds.ItemsMenu,
 LabelForSeacher = Styleds.LabelForSeacher,
 Seacher = Styleds.Seacher,
 SearcherImg = Styleds.SearcherImg,
 Container = Styleds.Container,
 ImgBg = Styleds.ImgBg

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
                  <NavLink to='/home' activeStyle={{'textDecoration': 'underline', 'color': '#fff'}} >Home</NavLink>
                </ItemsMenu>
                <ItemsMenu >
                  <NavLink to='/filmes' activeStyle={{'textDecoration': 'underline', 'color': '#fff'}} >Filmes</NavLink>
                </ItemsMenu>
                <ItemsMenu >
                  <NavLink to='/series' activeStyle={{'textDecoration': 'underline', 'color': '#fff'}} >Séries</NavLink>
                </ItemsMenu>
              </Menu>
            </HeaderContainersMenu>
            <HeaderContainersSearcher>
              <LabelForSeacher>
                <SearcherImg src={lupa} />
                <Seacher type='text' placeholder='Busca' value={this.state.busca} onChange={this.handleChange} onKeyUp={this.searchFilms}  />
              </LabelForSeacher>
            </HeaderContainersSearcher>
          </TopHeader>
          <BackHeader>
            <SlideShow />
          </BackHeader>

          {(this.state.busca === '')
          ? <Switch>
            <Route exact path='/' > 
              <Home />
            </Route>
            <Route path='/home' > 
              <Home />
            </Route>
            <Route path='/filmes' > 
              <Filmes />
            </Route>
            <Route path='/series' > 
              <Series />
            </Route>
          </Switch> 
          :<Container style={{'marginTop':'3vw'}}>{this.state.searchedFilms.map(item => (
            <ImgBg background={BaseUrl+item.poster_path} title={item.title || item.name} ></ImgBg>
          ))}</Container>}

        </Header>

      </Router>
    )
  }
}