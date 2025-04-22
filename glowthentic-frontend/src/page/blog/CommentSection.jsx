import React, { useState } from 'react';
import { useGetblogCommentsInfoQuery } from '../../redux/features/api/blogComments/blogCommentsGetApi';
import { useSelector } from 'react-redux';
import { useCommentInfoMutation } from '../../redux/features/api/blogComments/blogCommentsApi';
import  { Toaster, toast } from 'react-hot-toast';
import LikeButton from './LikeButton';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { useLikeInfoMutation } from '../../redux/features/api/blogComments/blogLikesApi';
import { useGetblogLikesInfoQuery } from '../../redux/features/api/blogComments/blogLikesGetApli';

const CommentSection = ({ blogId }) => {
  console.log("comment page id", blogId);
  const [likes, setLikes] = useState(0);
  const { user, token } = useSelector((state) => state.auth);
  console.log("user", user);
  const { data: commentsData, isLoading: commentsLoading } = useGetblogCommentsInfoQuery(blogId);
  const { data: likesData, isLoading: likesLoading } = useGetblogLikesInfoQuery(blogId);
  console.log("commentsData", commentsData);
  const [commentSave, { isLoading: commentLoading }] = useCommentInfoMutation();
  const [likeSave, { isLoading: likeLoading }] = useLikeInfoMutation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLike = async () => {
    setLikes(likes + 1)
    try {
      const result = await likeSave({
        blog_id: blogId,
        like: setLikes,
        user_id: user?.id,
      }).unwrap();
      console.log('Comment post result:', result);
      if(result.status === 200){
       toast.success("Liked Successfully")
      }
   
    } catch (error) {
      console.error('Full error:', error, 'Status:', error.status, 'Data:', error.data);
      alert(error?.data?.message || 'Failed to liked');
    }
  };
  console.log("likes", likesData);
  const filterLikes = likesData?.blogComment?.filter((comment) => comment?.blog_id === blogId);

  // const handleLike = async() => {
  //   const user_id = user?.id;
  //   const blog_id = ;
  //   const like = ?1:0
  //   try{
  //     const result = await likeSave({user_id, blog_id, like});
  //     console.log(result);
      
  //   }catch(error){
  //     console.log(error);
  //   }
  // };

  const handleCommentSubmit = async (commentText) => {
    console.log('User:', user, 'Token:', token);
    console.log('Payload:', { blog_id: blogId, comment: commentText, subscriber_id: user?.id });

    if (!user || !token) {

toast.error('Please log in to post a comment')
      return;
    }

    try {
      const result = await commentSave({
        blog_id: blogId,
        comment: commentText,
        subscriber_id: user?.id,
      }).unwrap();
      console.log('Comment post result:', result);
      if(result.status === 200){
       toast.success("Comment posted Successfully")
      }
   
    } catch (error) {
      console.error('Full error:', error, 'Status:', error.status, 'Data:', error.data);
      alert(error?.data?.message || 'Failed to post comment');
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const filterComments = commentsData?.blogComment?.filter((comment) => comment?.blog_id === blogId);
  const comments = filterComments?.map((comment) => ({
    id: comment.id,
    text: comment.comment,
    author: comment?.user?.name || 'Anonymous',
    date: new Date(comment.created_at).toLocaleDateString(),
  })) || [];

  console.log("new comment", comments);

  return (
    <div className="max-w-auto mx-auto p-8">
      <div className="flex justify-between items-center">
        <LikeButton likes={likesData} onLike={handleLike} />
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
        disabled={commentLoading}
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