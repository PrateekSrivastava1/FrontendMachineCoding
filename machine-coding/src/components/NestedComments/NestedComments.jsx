import { useState } from "react";
import CommentRenderer from "./CommentRenderer";

const CommentData = [
    {
        id: 1,
        text: 'A',
        replies: [
            {
                id: 2,
                text: 'B',
                replies: [
                    {
                        id: 3,
                        text: 'C',
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: 'D',
        replies: [
            {
                id: 5,
                text: 'E',
                replies: []
            }
        ]
    }
]

const NestedComments = () => {

    const [initialComments, setInitialComments] = useState(CommentData);

    const addReply = (currentComment, parentId, replyText) => {
        return currentComment.map((comment) => {
            if(comment.id === parentId){
                return {
                    ...comment,
                    replies: [
                        ...comment.replies,
                        {
                            id: Date.now(),
                            text: replyText,
                            replies: []
                        }
                    ]
                };
            }

            return {
                ...comment,
                replies: addReply(comment.replies, parentId, replyText)
            }
        })
    }

    const handleAddReply = (parentId, reply) => {
        // add reply in comment
        setInitialComments((current) => addReply(current, parentId, reply));
    }

    return <CommentRenderer CommentData={initialComments} handleAddReply={handleAddReply}/>;
}

export default NestedComments;