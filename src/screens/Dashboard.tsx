import * as React from 'react';

import Layout from '../containers/layout/Layout';
import FlowEditor from "../containers/flowEditor/FlowEditor";

type DashboardProps = {}

const Dashboard = (props: DashboardProps) => {


    return (
        <Layout>
            <FlowEditor/>
        </Layout>
    );
};

export default Dashboard;