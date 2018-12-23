import React, { Component } from 'react';
import Home from './Home';
import Kajian from './Kajian';
import Mondok from './Mondok';
import Kitab from './Kitab';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NotFoundPage from '../Container/notFoundPage';
import {Route, Switch} from 'react-router-dom';

class Routers extends Component {
    state={
        page : ""
    }

    handleChangePage = (params)=>{
        this.setState({
            page : params
        })
    }
    render() {
        return(
            <div>
                <Header changePage={this.handleChangePage}/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/kajian' component={Kajian} />
                    <Route path='/mondok' component={Mondok} />
                    <Route path='/Kitab' component={Kitab} />
                    <Route component={NotFoundPage}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Routers;
