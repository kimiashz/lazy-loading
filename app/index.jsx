import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Notifications } from 'kimia-notify';

import Layout from './components/Layout/index.jsx';
import Header from './components/Header/index.jsx';

import './index.sass';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Notifications />
                <Header />
                <Layout />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))