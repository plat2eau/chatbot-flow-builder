import * as React from 'react';
import Button from '../../components/button/Button';
import cssExports from "./Header.module.scss";

type HeaderProps = {
    onSaveButtonClick?: () => boolean
}

type HeaderState = {
    filesSaved: boolean
}

class Header extends React.Component<HeaderProps, HeaderState>{

    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            filesSaved: null
        }
    }

    onSaveButtonClick = () => {
        let result = this.props.onSaveButtonClick()
        this.setState({
            filesSaved: result
        })
    };

    render() {
        let { filesSaved } = this.state
        return(
            <div className={cssExports.container}>
                <div className={cssExports.buttonContainer}>
                    <Button text={"Save Changes"} onClick={this.onSaveButtonClick}/>
                </div>
                {(filesSaved != null) && <div className={cssExports.errorContainer} style={{backgroundColor: filesSaved?"#82ff6e":"#FF9896"}}>
                    {filesSaved?"Files Saved Successfully":"Cannot save Files"}
                </div>}
            </div>
        );
    }
}

export default Header;