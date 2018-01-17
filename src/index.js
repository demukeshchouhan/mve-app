import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header/Header";
import App from './App';
import About from "./components/About/About";
import MovieDetail from "./components/MovieWrapper/MovieDetail";
import { Container } from "react-grid-system";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={App} />
            <Switch>
                <Route exact path="/discover" component={App} />
                <Route exact path="/movie/:id" component={MovieDetail} />
            </Switch>
            <Route exact path="/about" component={About} />
        </div>
    </Router>
);

ReactDOM.render(
    <Container >
        { Routes }
    </Container>, 
    document.getElementById('root')
);
registerServiceWorker();
