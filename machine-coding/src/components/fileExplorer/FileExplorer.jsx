import TreeView from "./treeView";

const TreeViewData = [
    { 
        node: "A", 
        children: [
            {
                node: "B", children: []
            }
        ]
    }, 
    {
        node: "C", 
        children: [
            {
                node: "D", children: [
                    {
                        node: "E", 
                        children: [
                            {
                                node: "F", children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        node: "G", 
        children: [
            {
                node: "H", children: [
                    {
                        node: "I", 
                        children: [
                            {
                                node: "J", children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const FileExplorer = () => {
  return <TreeView TreeViewData={TreeViewData}/>;
};

export default FileExplorer;
