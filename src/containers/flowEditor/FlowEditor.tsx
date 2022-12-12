import React from 'react';
import ReactFlow, {
    Background,
    Controls,
    Node,
    Edge,
    ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import cssExports from "./FlowEditor.module.scss";
import NodeTypesMap from "../../nodes/NodeTypesMap";

/*
* Flow Editor contains all the main editor and is responsible for rendering it.
* */
type FlowEditorProps = {
    nodes: Node[],
    edges: Edge[],
    onNodesChange: (changes: any) => void,
    onEdgesChange: (changes: any) => void,
    onConnect: (connection: any) => void,
    setReactFlowInstance:  any,
    onDrop: (event: any) => void,
    onDragOver: (event: any) => void,
    reactFlowWrapper: any,
    onInit: any,
    onNodeClick: (event: any, node: any) => void
}

const FlowEditor = (props: FlowEditorProps) => {


    return (
        <div className={cssExports.flowContainer}>
            <ReactFlowProvider>
                <div className={cssExports.flowContainer} ref={props.reactFlowWrapper}>
                    <ReactFlow
                        nodes={props.nodes}
                        edges={props.edges}
                        onNodesChange={props.onNodesChange}
                        onEdgesChange={props.onEdgesChange}
                        onConnect={props.onConnect}
                        onInit={props.setReactFlowInstance}
                        onDrop={props.onDrop}
                        onNodeClick={props.onNodeClick}
                        onDragOver={props.onDragOver}
                        nodeTypes={NodeTypesMap}
                        fitView>
                        <Background/>
                        <Controls />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
        </div>
    );
}

export default FlowEditor;