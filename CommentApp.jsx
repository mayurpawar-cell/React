import { useState, useEffect } from "react";

export default function CommentApp() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", body: "" });

  useEffect(() => {
    // Initial Data
    setComments([
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos",
      },
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam",
      },
    ]);
  }, []);

  const handleAdd = () => {
    if (newComment.name && newComment.email && newComment.body) {
      setComments([...comments, { ...newComment, id: comments.length + 1 }]);
      setNewComment({ name: "", email: "", body: "" });
    }
  };

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleUpdate = (id, updatedComment) => {
    setComments(comments.map((comment) => (comment.id === id ? updatedComment : comment)));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="border p-2 mb-2 rounded">
          <p className="font-bold">{comment.name}</p>
          <p>{comment.body}</p>
          <p className="text-sm text-gray-500">{comment.email}</p>
          <button
            className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
            onClick={() => handleDelete(comment.id)}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-1 ml-2 rounded"
            onClick={() =>
              handleUpdate(comment.id, {
                ...comment,
                name: "Updated Name",
                body: "Updated Body",
              })
            }
          >
            Update
          </button>
        </div>
      ))}
      <div className="mt-4">
        <h3 className="font-bold mb-2">Add Comment</h3>
        <input
          className="border p-1 w-full mb-2"
          type="text"
          placeholder="Name"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
        />
        <input
          className="border p-1 w-full mb-2"
          type="email"
          placeholder="Email"
          value={newComment.email}
          onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
        />
        <textarea
          className="border p-1 w-full mb-2"
          placeholder="Comment"
          value={newComment.body}
          onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
        ></textarea>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
          Add Comment
        </button>
      </div>
    </div>
  );
}
