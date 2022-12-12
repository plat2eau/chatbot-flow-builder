import * as React from 'react';
import {Navigate, Routes, BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import NoMatch from './components/NoMatch';

type AppProps = {}

/*
* App contains all the routes for the app
* Using route chatbot-flow-builder as a temporary measure for deploying on github
* */
const App = (props: AppProps) => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NoMatch/>}/>
                <Route path={"/"} element={<Navigate to={"/home"} replace/>}/>
                <Route path="/chatbot-flow-builder" element={<Dashboard/>}/>
                <Route path="/home" element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
};

export default App;