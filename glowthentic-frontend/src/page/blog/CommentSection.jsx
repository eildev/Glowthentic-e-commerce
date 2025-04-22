import React, { useState } from 'react';
import { useGetblogCommentsInfoQuery } from '../../redux/features/api/blogComments/blogCommentsGetApi';
import { useSelector } from 'react-redux';
import { useCommentInfoMutation } from '../../redux/features/api/blogComments/blogCommentsApi';
import { toast } from 'react-toastify';

const LikeButton = ({ likes, onLike }) => (
  <button
    onClick={onLike}
    className="flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-200"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933c-.8.666-1.2 1.533-1.2 2.4z"/>
    </svg>
    <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
  </button>
);

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
          disabled={disabled}
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

const Comment = ({ text, author, date }) => (
  <div className="mt-4 p-5 bg-gray-50 rounded-lg shadow-sm">
    <div className="flex justify-between items-center">
      <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <p className="mt-2 text-gray-700">{text}</p>
  </div>
);

const CommentSection = ({ blogId }) => {
  const [likes, setLikes] = useState(0);
  const { user, token } = useSelector((state) => state.auth);
  const { data: commentsData, isLoading: commentsLoading } = useGetblogCommentsInfoQuery(blogId);
  console.log("comments", commentsData);
  const [commentSave, { isLoading: registerLoading }] = useCommentInfoMutation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLike = () => setLikes(likes + 1);

  const handleCommentSubmit = async (commentText) => {
    console.log('User:', user, 'Token:', token);
    console.log('Payload:', { blog_id: blogId, comment: commentText, subscriber_id: user?.id });
  
    if (!user || !token) {
      toast.error('Please log in to post a comment');
      return;
    }
  
    try {
      const result = await commentSave({
        blog_id: blogId,
        comment: commentText,
        subscriber_id: user?.id,
      }).unwrap();
      console.log(result);
      toast.success('Comment posted successfully');
    } catch (error) {
      console.error('Full error:', error, 'Status:', error.status, 'Data:', error.data);
      toast.error(error?.data?.message || 'Failed to post comment');
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const comments = commentsData?.blogComment?.map((comment) => ({
    id: comment.id,
    text: comment.comment,
    author: comment.subscriber?.name || 'Anonymous',
    date: new Date(comment.created_at).toLocaleDateString(),
  })) || [];
console.log("new commet", comments);
  return (
    <div className="max-w-auto mx-auto p-8">
      <div className="flex justify-between items-center">
        <LikeButton likes={likes} onLike={handleLike} />
        <button
          onClick={toggleDropdown}
          className="text-gray-600 hover:text-indigo-600 font-semibold flex items-center space-x-1 transition duration-200"
        >
          <span>{comments.length} Comments</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <CommentForm
        onSubmit={handleCommentSubmit}
        disabled={!user || !token || registerLoading}
      />
      <div
        className={`mt-8 overflow-hidden transition-all duration-300 ease-in-out ${
          isDropdownOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <h3 className="text-xl font-bold text-gray-900">Comments</h3>
        {commentsLoading ? (
          <p className="text-gray-500 mt-4">Loading comments...</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              text={comment.text}
              author={comment.author}
              date={comment.date}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;