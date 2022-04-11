import { BrowserRouter, Route } from 'react-router-dom'; 

import Questions from './components/codificar/questions/Questions';
import Start from './components/codificar/start/Start';
import Codificar from './routes/codificar/Codificar';
import Homepage from './routes/homepage/Homepage';
import Marlin from './routes/marlin/Marlin';
import Tiki from './routes/tiki/Tiki';
import Nerdweb from './routes/nerdweb/nerdweb'

function MyRoutes (){
    return (
        <BrowserRouter>
            <Route path='/' exact component={Homepage}/>
            <Route path='/marlin' component={Marlin}/> 
            <Route path='/tiki' component={Tiki}/> 
            <Route path='/codificar' component={Codificar}/> 
            <Route path='/questions' component={Questions}/> 
            <Route path='/start' component={Start}/> 
            <Route path='/nerdweb' component={Nerdweb}/>
        </BrowserRouter>
    )
}

export default MyRoutes;
