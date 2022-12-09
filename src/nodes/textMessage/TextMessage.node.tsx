import * as React from 'react';
import { Handle, Position } from 'reactflow';
import cssExports from "./TextMessage.module.scss";
import {TextMessageData} from "../../constants/types/DataTypes";

type TextNodeProps = {
    isConnectable: boolean
    data: TextMessageData,
    id: string
}

export default React.memo((props: TextNodeProps) => {
    return(<div className={cssExports.container}>
        <Handle
            type="target"
            style={{ background: '#555' }}
            onConnect={(params) => console.log('handle onConnect', params)}
            isConnectable={props.isConnectable}
            position={Position.Left}
        />
        <div className={cssExports.header}>
            Send Message
        </div>
        <div className={cssExports.content}>
            {props.data.label}
        </div>
        <Handle
            type="source"
            style={{ background: '#555' }}
            onConnect={(params) => console.log('handle onConnect', params)}
            isConnectable={props.isConnectable}
            position={Position.Right}
        />
    </div>);
});