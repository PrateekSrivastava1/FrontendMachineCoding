import { useState } from "react";

const TreeView = ({ TreeViewData }) => {

    const [expandedNodes, setExpandedNodes] = useState({});

    const toggleExpansion = (node) => {
        setExpandedNodes((prev) => ({
            ...prev,
            [node]: !prev[node]
        }))
    }

  return (
    <div>
      {TreeViewData.map((key, index) => (
        <div key={index} style={{marginLeft: '40px'}}>
          <p
            style={{ cursor: "pointer", margin: "20px" }}
            onClick={() => toggleExpansion(key.node)}
          >
            {key.node}
          </p>
          {expandedNodes[key.node] && key.children.length > 0 ? (
            <TreeView TreeViewData={key.children}/>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TreeView;
