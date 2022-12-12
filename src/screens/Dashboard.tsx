import * as React from 'react';

import Layout from '../containers/layout/Layout';
import FlowEditor from "../containers/flowEditor/FlowEditor";
import {useCallback, useRef, useState} from "react";
import {addEdge, applyEdgeChanges, applyNodeChanges, Connection, Edge, EdgeChange, Node, NodeChange} from "reactflow";
import SidePanel from "../containers/sidePanel/SidePanel";

type DashboardProps = {}

type SaveData = {
    nodes: Node[],
    edges: Edge[]
}

let id = 0;
const getId = () => `${id++}`;

const Dashboard = (props: DashboardProps) => {


    const loadNodes = useCallback((): SaveData => {
        return JSON.parse(localStorage.getItem("flow.data"))
    }, [])

    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes] = useState(loadNodes()!=null?loadNodes().nodes:[]);
    const [edges, setEdges] = useState(loadNodes()!=null?loadNodes().edges:[]);
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
        (connection: Connection) => {
            let obj = edges.find(element => element.source === connection.source);
            if(obj) {
                return
            }
            setEdges((eds) => addEdge(connection, eds))
        },
        [edges, setEdges]
    );

    const saveNodes = useCallback((nodes: Node[], edges: Edge[]) => {
        localStorage.setItem("flow.data", JSON.stringify({nodes: nodes, edges: edges}))
    }, [nodes])

    const onClick = useCallback((event: any, node: any) => {setSelectedNode(node.id)}, [])

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
                data: { label: `${type}` },
            };
            console.log(newNode)

            setNodes((nds) => nds.concat(newNode));
            console.log(nodes)
        },
        [reactFlowInstance]
    );

    return (
        <Layout onSaveButtonClick={() => {console.log({nodes, edges}); saveNodes(nodes, edges)}}>
            <FlowEditor
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onNodeClick={onClick}
            onDragOver={onDragOver}
            setReactFlowInstance={setReactFlowInstance}
            reactFlowWrapper={reactFlowWrapper}
            />
            <SidePanel setNodes={setNodes} nodeId={selectedNode} onClickBackArrow={onBackArrowClick}/>
        </Layout>
    );
};

export default Dashboard;