import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    Controls,
    Background,
    NodeChange,
    EdgeChange,
    Connection,
    Node
} from 'reactflow';
import 'reactflow/dist/style.css';

import cssExports from "./FlowEditor.module.scss";
import SidePanel from "../sidePanel/SidePanel";
import TextMessage from "../../nodes/TextMessage.node";

let id = 0;
const getId = () => `${id++}`;

type FlowEditorProps = {
}

const initialNodes: Node[] = [
    { id: "1", data: { label: 'Node 1' }, position: { x: 5, y: 5 }, type: 'textMessage' },
    { id: "2", data: { label: 'Node 2' }, position: { x: 5, y: 100 }, type: 'textMessage' },
];

const nodeTypes = {
    'textMessage': TextMessage
}

const FlowEditor = (props: FlowEditorProps) => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    const onClick = useCallback((event: any, node: any) => {
        console.log(edges)
        console.log(nodes)
        setSelectedNode(node.id)
    }, [])

    const onBackArrowClick = useCallback(() => setSelectedNode(null), [])

    const onDragOver = useCallback((event: any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: any) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node` },
            };
            console.log(newNode)

            setNodes((nds) => nds.concat(newNode));
            console.log(nodes)
        },
        [reactFlowInstance]
    );

    return (
        <div className={cssExports.flowContainer}>
            <ReactFlowProvider>
                <div className={cssExports.flowContainer} ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onNodeClick={onClick}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                        fitView>
                        <Background/>
                        <Controls />
                    </ReactFlow>
                </div>
                <SidePanel setNodes={setNodes} nodeId={selectedNode} onClickBackArrow={onBackArrowClick}/>
            </ReactFlowProvider>
        </div>
    );
}

export default FlowEditor;