import React from "react";
import Cards from "../../Components/Cards";
import Generate from "../../Components/generateCards";
import {connect} from 'react-redux'


const mapStateToProps = state => {
  return {shows: state.shows}
}


const ConnectedBusca = (shows) => {
  console.log(shows.shows)
    return (
      <Cards title="Seus resultados:" >
        {shows.shows.map((item) => {
          return <Generate films={item} />;
        })}
      </Cards>
    );
 
}

const Busca = connect(mapStateToProps)(ConnectedBusca)

export default Busca;
