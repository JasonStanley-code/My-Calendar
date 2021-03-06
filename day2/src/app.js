import React from 'react'
import Home from "./pages/index"
import WawanTemplate from "./templates/wawanTemplate"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import routes from "./route";
const App = () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => <Route exact path={route.path} key={route.path} render={() => <WawanTemplate data={route.html}/>}/> )
                }
                <Route exact path="/" render={() => <Home data={routes}/>}/>
                    
                
            </Switch>
        </Router>
        
    )
}

export default App