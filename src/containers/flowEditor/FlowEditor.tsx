import React, {useCallback, useRef, useState} from 'react';
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Connection,
    Controls,
    EdgeChange,
    Node,
    Edge,
    NodeChange,
    ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import cssExports from "./FlowEditor.module.scss";
import SidePanel from "../sidePanel/SidePanel";
import NodeTypesMap from "../../nodes/NodeTypesMap";

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