import React, { useState } from 'react';

const CommentForm = ({ onSubmit, disabled }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-900">Add a Comment</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          rows="5"
          placeholder="Share your thoughts..."
        />
        <button
          type="submit"
          className="mt-3 bg-secondary text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-200"
          disabled={disabled}
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;