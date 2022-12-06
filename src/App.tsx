import * as React from 'react';
import { Navigate, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import NoMatch from './components/NoMatch';
import ITheme from "./types/ITheme";

type AppProps = {
    theme: ITheme
}

const App = (props: AppProps) => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="*" element={<NoMatch/>} />
                    <Route path={"/"} element={<Navigate to={"/home"} replace/>}/>
                    <Route path="/home" element={<Dashboard/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;