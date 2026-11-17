import { useState } from "react";

const ReplyComponent = ({ handleAddReply, comment }) => {
  const [replyText, setReplyText] = useState({});

  return (
    <div style={{ display: "flex", gap: 4, marginLeft: 20 }}>
      <input
        type="text"
        value={replyText[comment.id] || ""}
        onChange={(event) =>
          setReplyText((prev) => ({
            ...prev,
            [comment.id]: event.target.value,
          }))
        }
      />
      <button
        type="button"
        onClick={() => {
          handleAddReply(comment.id, replyText[comment.id]);
        }}
      >
        Add Reply
      </button>
    </div>
  );
};

export default ReplyComponent;
