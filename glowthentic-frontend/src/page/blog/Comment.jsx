import React from 'react';

const Comment = ({ text, author, date }) => (
  <div className="mt-4 p-5 bg-gray-50 rounded-lg shadow-sm">
    <div className="flex justify-between items-center">
      <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <p className="mt-2 text-gray-700">{text}</p>
  </div>
);

export default Comment;