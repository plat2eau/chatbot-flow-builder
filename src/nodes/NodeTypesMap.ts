import TextMessageNode from "./textMessage/TextMessage.node";

/*
* NodeTypesMap contains all custom nodes that we have built
* In order to start extending to other custom nodes, we can just create a new one like TextMessage in this package
* and then include that in this node types map
* */
const NodeTypesMap = {
    'textMessage': TextMessageNode,
}

export default NodeTypesMap;