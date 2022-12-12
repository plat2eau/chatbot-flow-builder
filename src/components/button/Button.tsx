import * as React from 'react';
import cssExports from "./Button.module.scss";

type ButtonProps = {
    icon?: string
    text?: string
    onClick?: (params?: any)=> void,
    onDragStart?: (e: any)=> void
}

type ButtonState = {
}
/*
* Same Button can be re-used on multiple places
* */
class Button extends React.Component<ButtonProps, ButtonState> {
    componentDidMount() {
        console.log(this.props.onClick)
    }
    render() {
        return (
            <div
                className={cssExports.button}
                onClick={() => { console.log(this.props); this.props.onClick()}}
                draggable={this.props.onDragStart!=null}
                onDragStart={(event) => this.props.onDragStart(event)}>
                <img src={this.props.icon}/>
                {this.props.text}
            </div>
        );
    }
}

export default Button