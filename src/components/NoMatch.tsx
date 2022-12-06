import * as React from 'react';
import { Icon, Header } from 'semantic-ui-react';

import Layout from './layout/Layout';
import {getTheme} from "../utils/ThemeUtils";

const NoMatch = () => {
    return (
        <Layout theme={getTheme()}>
            <Icon name="minus circle" size="big" />
            <strong>Page not found!</strong>
        </Layout>
    );
};

export default NoMatch;