import * as React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import {getTheme} from "../utils/ThemeUtils";

type DashboardProps = {

}

const Dashboard = (props: DashboardProps) => {
    return (
        <Layout theme={getTheme()}>
            <p>Hello World</p>
        </Layout>
    );
};

export default Dashboard;