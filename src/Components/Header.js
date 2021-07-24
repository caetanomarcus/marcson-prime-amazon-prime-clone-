import React from "react";
import Styleds from "./Styleds";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import Routes from "../routes";
import SlideShow from "./SlideShow";
import lupa from "../assets/lupa.png";
import Trending from "../Services/Trending";
import axios from "axios";
import BaseUrl from "./BaseUrl";
import { connect } from "react-redux";
import { addShows } from "../reduxConfig/actions";

const HeaderContainer = Styleds.Header,
  TopHeader = Styleds.TopHeader,
  HeaderContainersMenu = Styleds.HeaderContainersMenu,
  HeaderContainersSearcher = Styleds.HeaderContainersSearcher,
  BackHeader = Styleds.BackHeader,
  MarcPrime = Styleds.MarcPrime,
  Menu = Styleds.Menu,
  ItemsMenu = Styleds.ItemsMenu,
  LabelForSeacher = Styleds.LabelForSeacher,
  Seacher = Styleds.Seacher,
  SearcherImg = Styleds.SearcherImg;

function mapDispatchToProps(dispatch) {
  return {
    addShows: (shows) => dispatch(addShows(shows)),
  };
}

class HeaderConnected extends React.Component {
  state = {
    films: "",
    searchedFilms: [],
    busca: "",
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(){
    const { searchedFilms } = this.state;
    console.log(searchedFilms)
    this.props.addShows(searchedFilms);
  }

  getData = async () => {
    const page1 = await Trending.get();
    const page2 = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=pt-BR&page=2"
    );
    const shows = [...page1.data.results, ...page2.data.results];

    const moviesWithPosters = shows.map((item) => {
      return {
        ...item,
        poster_path: BaseUrl + item.poster_path,
      };
    });

    this.setState({
      films: moviesWithPosters,
      searchedFilms: moviesWithPosters,
    });
    const { searchedFilms } = this.state;
    this.props.addShows(searchedFilms);
  };

  handleChange = (e) => {
    this.setState({
      busca: e.target.value,
    });
    
    console.log(e.target.value)
    if(!e.target.value.length){
      this.setState({
        searchedFilms: this.state.films
      })
      const { searchedFilms } = this.state;
      this.props.addShows(searchedFilms);
      return

    } 
      this.setState({
        searchedFilms: this.state.films.filter(i => {
          return this.removeAccents(i.title || i.name).toLowerCase().match(this.removeAccents(e.target.value).trim().toLowerCase())
        })
      })
      const { searchedFilms } = this.state;
      this.props.addShows(searchedFilms);
   

  };

  handleNavClick = () => {
    this.setState({
      busca: "",
    });
  };

  removeAccents = (text) => {
    text = text.replace(/[ÀÁÂÃÄÅ]/, "a");
    text = text.replace(/[àáâãäå]/, "a");
    text = text.replace(/[ÈÉÊË]/, "e");
    text = text.replace(/[Ç]/, "c");
    text = text.replace(/[ç]/, "c");
    text = text.replace(/[úù]/, "u");
    text = text.replace(/[ÙÚ]/, "u");

    return text;
  };


  render() {
    return (
      <>
        <HeaderContainer>
          <TopHeader>
            <HeaderContainersMenu>
              <MarcPrime>
                <Link to="/" onClick={this.handleNavClick}>
                  marcson prime
                </Link>
              </MarcPrime>
              <Menu>
                <ItemsMenu>
                  <NavLink
                    to="/home"
                    activeStyle={{
                      textDecoration: "underline",
                      color: "#fff",
                    }}
                    onClick={this.handleNavClick}
                  >
                    Home
                  </NavLink>
                </ItemsMenu>
                <ItemsMenu>
                  <NavLink
                    to="/filmes"
                    activeStyle={{
                      textDecoration: "underline",
                      color: "#fff",
                    }}
                    onClick={this.handleNavClick}
                  >
                    Filmes
                  </NavLink>
                </ItemsMenu>
                <ItemsMenu>
                  <NavLink
                    to="/series"
                    activeStyle={{
                      textDecoration: "underline",
                      color: "#fff",
                    }}
                    onClick={this.handleNavClick}
                  >
                    Séries
                  </NavLink>
                </ItemsMenu>
              </Menu>
            </HeaderContainersMenu>
            <HeaderContainersSearcher>
              <LabelForSeacher>
                <SearcherImg src={lupa} />
                <Link to='/s' >
                <Seacher
                  type="text"
                  placeholder="Busca"
                  value={this.state.busca}
                  onChange={this.handleChange}
                  
                />
                </Link>
              </LabelForSeacher>
            </HeaderContainersSearcher>
          </TopHeader>
          <BackHeader>
            <SlideShow />
          </BackHeader>

          <Routes />
        </HeaderContainer>
      </>
    );
  }
}

const Header = connect(null, mapDispatchToProps)(HeaderConnected);

export default Header;
