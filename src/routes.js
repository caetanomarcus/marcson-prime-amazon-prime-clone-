import { Switch, Route,} from 'react-router-dom'
import Home from './pages/Home'
import Filmes from './pages/Movies'
import Series from './pages/TvShows'
import Card from './pages/Card/Card'
import Busca from './pages/Busca'



export default function Routes (props) {

    return (
        <Switch>
            
            <Route exact path='/' component={Home} /> 
            <Route path='/home' component={Home} /> 
            <Route path='/filmes' component={Filmes} /> 
            <Route path='/series' component={Series} /> 
            <Route path='/card'  > 
                <Card />
             </Route>
             <Route path='/s' >
                 <Busca />
             </ Route>
            
          </Switch> 
    )
}