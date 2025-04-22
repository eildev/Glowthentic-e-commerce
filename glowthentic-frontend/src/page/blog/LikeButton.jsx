import React from 'react';

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

export default LikeButton;