import { useState } from "react";
import ReplyComponent from "./ReplyComponent";

const CommentRenderer = ({ CommentData, handleAddReply }) => {
    const [expandReplies, setExpandReplies] = useState({});

    const handleToggleReplies = (commentId) => {
        setExpandReplies((prev) => ({
            ...prev,
            [commentId]: !prev[commentId]
        }))
    }

  return (
    <div>
      {CommentData.map((comment, index) => (
        <div style={{marginLeft: '30px'}} key={`${index}-${new Date().getMilliseconds()}`}>
          <p>{comment.text}</p>
          <span style={{ cursor: "pointer", marginLeft: "20px" }} onClick={() => handleToggleReplies(comment.id)}>Replies</span>
          <ReplyComponent handleAddReply={handleAddReply} comment={comment}/>
            {
                expandReplies[comment.id] > 0 && comment.replies.length > 0 ? 
                    <CommentRenderer CommentData={comment.replies} handleAddReply={handleAddReply}/>
                : null
            }
        </div>
      ))}
    </div>
  );
};

export default CommentRenderer;
