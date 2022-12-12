import * as React from 'react';
import { Icon } from 'semantic-ui-react';

import Layout from '../containers/layout/Layout';

const NoMatch = () => {
    return (
        <Layout>
            <div style={{marginTop: '100px'}}>
            <Icon name="minus circle" size="big" />
            <strong>Page not found!</strong>
            </div>
        </Layout>
    );
};

export default NoMatch;