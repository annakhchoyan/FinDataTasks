const comments = [
    {
        id: 1,
        text: "This is the first comment",
        parentId: null,
        replies: [
            {
                id: 2,
                text: "This is a reply to the first comment",
                parentId: 1,
                replies: [
                    {
                        id: 3,
                        text: "This is a nested reply",
                        parentId: 2,
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "This is an independent comment",
        parentId: null,
        replies: []
    },
];

const commentsContainer = document.getElementById("commentsContainer");

function generateCommentHtml(comment, nestingLevel) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.style.marginLeft = `${nestingLevel * 20}px`; // Adjust indentation

    const textElement = document.createElement("p");
    textElement.textContent = comment.text;
    commentElement.appendChild(textElement);

    if (comment.replies.length > 0) {
        const repliesContainer = document.createElement("div");
        comment.replies.forEach(reply => {
            const replyElement = generateCommentHtml(reply, nestingLevel + 1);
            repliesContainer.appendChild(replyElement);
        });
        commentElement.appendChild(repliesContainer);
    }

    return commentElement;
}

function renderComments(comments) {
    comments.forEach(comment => {
        if (comment.parentId === null) {
            const commentElement = generateCommentHtml(comment, 0);
            commentsContainer.appendChild(commentElement);
        }
    });
}

renderComments(comments);