import { useState } from "react";
import TreeView from "./TreeView";

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

const FileExplorerDS = [
    {
        id: "1",
        name: 'src',
        type: 'folder',
        items: [
            {
                id: "5",
                type: "folder",
                name: "components",
                items: [
                    {
                        id: "6",
                        type: "file",
                        name: "index.js"
                    },
                    {
                        id: "7",
                        type: "file",
                        name: "component.js"
                    }
                ]
            },
            {
                id: "2",
                type: "file",
                name: "index.js"
            },
            {
                id: "3",
                type: "file",
                name: "app.js"
            },
            {
                id: "4",
                type: "file",
                name: "index.css"
            }
        ]
    }
]

const addChild = (nodes, parentId, child) =>
  nodes.map((node) => {
    if (node.id === parentId) {
      return { ...node, items: [...(node.items ?? []), child] };
    }
    if (Array.isArray(node.items)) {
      return { ...node, items: addChild(node.items, parentId, child) };
    }
    return node;
  });

const FileExplorer = () => {
  const [data, setData] = useState(FileExplorerDS);

  const handleAdd = (parentId, type) => {
    const name = window.prompt(type === "folder" ? "Folder name" : "File name");
    if (!name?.trim()) return;

    const child =
      type === "folder"
        ? { id: crypto.randomUUID(), name: name.trim(), type: "folder", items: [] }
        : { id: crypto.randomUUID(), name: name.trim(), type: "file" };

    setData((prev) => addChild(prev, parentId, child));
  };

  return <TreeView TreeViewData={data} onAdd={handleAdd} />;
};

export default FileExplorer;
