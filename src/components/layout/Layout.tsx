import * as React from 'react';
import {Container, Divider, Icon} from 'semantic-ui-react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

import cssExports from "./Layout.module.scss";
import ITheme from "../../types/ITheme";

type LayoutProps = {
    children?: React.ReactNode,
    theme: ITheme
}

type LayoutState = {}

class Layout extends React.Component<LayoutProps, LayoutState> {

    render() {
        return (
            <Container>
                <Header theme={this.props.theme}/>
                {this.props.children}
                <Footer theme={this.props.theme}/>
            </Container>)
    }
}

export default Layout;