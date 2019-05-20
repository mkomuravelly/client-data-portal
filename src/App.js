import React, {Component, Fragment} from 'react';
import Home from "./views/home/home";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Person = ()=>{
    return <div>"testing... Person page"</div>
    };
const Search = ()=>{
        return <div>"testing... Search page"</div>
        };

class App extends Component {
    render() {
        return (
            <Router>
                <Route path ="/" component ={Home} />
                 <Route path="/search" component={Search} />
                 <Route path="/person" component={Person} />
         <Fragment>
               
        </Fragment>
        </Router>
        );
    }
}

export default App;
