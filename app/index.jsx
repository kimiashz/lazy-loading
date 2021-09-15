import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout/index.jsx';
import Header from './components/Header/index.jsx';

import './index.sass';

class App extends React.Component{
    render(){
        return(
            <>
                <Header />
                <Layout />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))