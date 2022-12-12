import * as React from 'react';
import cssExports from "./SidePanel.module.scss";
import Button from "../../components/button/Button";
import {useEffect, useState} from "react";
import {IoArrowBack} from "react-icons/io5";

type SidePanelProps = {
    setNodes?: Function,
    nodeId?: number,
    onClickBackArrow: Function
}
/*
* SidePanel contains two things:
* An area containing all the nodes which can be drag-dropped into the play area
* A settings panel that can be used to define settings for the node by clicking on that node
* */
const SidePanel = (props: SidePanelProps) => {
    const onDragStart = (event: any, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const [nodeName, setNodeName] = useState('');

    let nodeId = props.nodeId;

    useEffect(() => {
        props.setNodes((nds: any) =>
            nds.map((node: any) => {
                if (node.id === props.nodeId) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    node.data = {
                        ...node.data,
                        label: nodeName,
                    };
                }

                return node;
            })
        );
    }, [nodeName, props.setNodes]);

    return (
        <aside>
            <div className={cssExports.sidePanelContainer}>
                {!nodeId &&
                    <div className={cssExports.panelContainer}>
                        <Button text={"Message"} onDragStart={(event: any) => onDragStart(event, 'textMessage')}/>
                    </div>
                }
                {nodeId && <div>
                    <div className={cssExports.settingsHeader}>
                        <label className={cssExports.settingsHeading}>
                            <IoArrowBack className={cssExports.backArrow} onClick={() => props.onClickBackArrow()}/>
                            Message
                        </label>
                    </div>
                    <hr />
                    <div className={cssExports.panelContainer}>
                        <div className={cssExports.messageType}>Text</div>
                        <textarea className={cssExports.textInput} value={nodeName} onChange={(evt) => setNodeName(evt.target.value)}/>
                    </div>
                    <hr />
                </div>}
            </div>
        </aside>
    );
}

export default SidePanel;