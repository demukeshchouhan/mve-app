import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header/Header";
import App from './App';
import About from "./components/About/About";
import MovieDetail from "./components/MovieWrapper/MovieDetail";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = (
    <Router>
        <div>
            <Header />
            <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/discover" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/movie/:id" component={MovieDetail} />
            <Route component={App}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(
    <div >
        { Routes }
    </div>, 
    document.getElementById('root')
);
registerServiceWorker();
