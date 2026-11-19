import { useState } from "react";

const TreeView = ({ TreeViewData, onAdd }) => {
    const [expandedNodes, setExpandedNodes] = useState({});

    const toggleExpansion = (id) => {
        setExpandedNodes((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const handleAdd = (event, id, type) => {
        event.stopPropagation();
        onAdd(id, type);
        setExpandedNodes((prev) => ({ ...prev, [id]: true }));
    }

  return (
    <div>
      {TreeViewData.map((node) => {
        const isFolder = node.type === "folder" && Array.isArray(node.items);
        return (
          <div key={node.id} style={{marginLeft: '40px'}}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "8px 20px" }}>
              <span
                style={{ cursor: isFolder ? "pointer" : "default" }}
                onClick={() => isFolder && toggleExpansion(node.id)}
              >
                {node.name}
              </span>
              {isFolder ? (
                <>
                  <button type="button" onClick={(event) => handleAdd(event, node.id, "folder")}>
                    + Folder
                  </button>
                  <button type="button" onClick={(event) => handleAdd(event, node.id, "file")}>
                    + File
                  </button>
                </>
              ) : null}
            </div>
            {isFolder && expandedNodes[node.id] && node.items.length > 0 ? (
              <TreeView TreeViewData={node.items} onAdd={onAdd}/>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default TreeView;
