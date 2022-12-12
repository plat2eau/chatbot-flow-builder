import * as React from 'react';
import {Container, Divider, Icon} from 'semantic-ui-react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

import cssExports from "./Layout.module.scss";

type LayoutProps = {
    children?: React.ReactNode,
    onSaveButtonClick?: () => void
}

type LayoutState = {}

class Layout extends React.Component<LayoutProps, LayoutState> {

    render() {
        return (
            <div className={cssExports.layoutContainer}>
                <Header onSaveButtonClick={this.props.onSaveButtonClick}/>
                {this.props.children}
                <Footer/>
            </div>)
    }
}

export default Layout;