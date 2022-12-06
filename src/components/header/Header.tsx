import * as React from 'react';
import {Container} from "semantic-ui-react";
import cssExports from "./Header.module.scss";
import ITheme from "../../types/ITheme";

type HeaderProps = {
    theme: ITheme
}

type HeaderState = {

}

class Header extends React.Component<HeaderProps, HeaderState>{

    render() {
        return(
            <Container className={cssExports.container}>
            </Container>
        );
    }
}

export default Header;