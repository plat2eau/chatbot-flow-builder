import * as React from 'react';
import {Navigate, Routes, BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import NoMatch from './components/NoMatch';

type AppProps = {}

const App = (props: AppProps) => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NoMatch/>}/>
                <Route path={"/"} element={<Navigate to={"/home"} replace/>}/>
                <Route path="/home" element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
};

export default App;