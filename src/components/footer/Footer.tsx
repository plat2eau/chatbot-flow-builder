import * as React from 'react';

import cssExports from "./Header.module.scss";
import ITheme from "../../types/ITheme";

type FooterProps = {
    theme: ITheme
}

type FooterState = {

}

class Footer extends React.Component<FooterProps, FooterState> {
    render() {
        return(<></>);
    }

}

export default Footer;