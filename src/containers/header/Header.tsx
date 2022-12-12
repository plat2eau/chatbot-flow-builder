import * as React from 'react';
import Button from '../../components/button/Button';
import cssExports from "./Header.module.scss";

type HeaderProps = {
    onSaveButtonClick?: () => void
}

type HeaderState = {

}

class Header extends React.Component<HeaderProps, HeaderState>{

    render() {
        return(
            <div className={cssExports.container}>
                <div className={cssExports.buttonContainer}>
                    <Button text={"Save Changes"} onClick={this.props.onSaveButtonClick}/>
                </div>
            </div>
        );
    }
}

export default Header;