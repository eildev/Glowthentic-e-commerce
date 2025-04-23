import React, { useState, useEffect } from 'react';
import { useGetblogCommentsInfoQuery } from '../../redux/features/api/blogComments/blogCommentsGetApi';
import { useSelector } from 'react-redux';
import { useCommentInfoMutation } from '../../redux/features/api/blogComments/blogCommentsApi';
import { Toaster, toast } from 'react-hot-toast';
import LikeButton from './LikeButton';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { useLikeInfoMutation, useUnlikeInfoMutation } from '../../redux/features/api/blogComments/blogLikesApi';
import { useGetblogLikesInfoQuery } from '../../redux/features/api/blogComments/blogLikesGetApi';

const CommentSection = ({ blogId }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { data: commentsData, isLoading: commentsLoading } = useGetblogCommentsInfoQuery(blogId);
  const { data: likesData, isLoading: likesLoading, error: likesError, refetch: refetchLikes } = useGetblogLikesInfoQuery(blogId);
  const [commentSave, { isLoading: commentLoading }] = useCommentInfoMutation();
  const [likeSave, { isLoading: likeLoading }] = useLikeInfoMutation();
  const [unlikeSave, { isLoading: unlikeLoading }] = useUnlikeInfoMutation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userLiked, setUserLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Log likesData for debugging
  // useEffect(() => {
  //   console.log('likesData:', likesData, 'likesError:', likesError, 'blogId:', blogId);
  //   if (likesData?.likes) {
  //     const likesForBlog = likesData.likes.filter(like => like.blog_id === Number(blogId));
  //     setLikeCount(likesForBlog.length);
  //     setUserLiked(likesForBlog.some(like => like.user_id === Number(user?.id)));
  //   }
  // }, [likesData, likesError, blogId, user?.id]);

  const handleLike = async () => {
    if (!user || !token) {
      toast.error('Please log in to like this post');
      return;
    }

    try {
      let response;
      if (userLiked) {
        // Unlike action
        response = await unlikeSave({
          blog_id: blogId,
          user_id: user?.id,
        }).unwrap();
      } else {
        // Like action
        response = await likeSave({
          blog_id: blogId,
          user_id: user?.id,
          like: 1,
        }).unwrap();
      }

      if (response.status === 200) {
        setUserLiked(!userLiked);
        setLikeCount(prev => userLiked ? prev - 1 : prev + 1);
        refetchLikes();
        toast.success(userLiked ? 'Unliked successfully' : 'Liked successfully');
      }
    } catch (error) {
      console.error('Like error:', error);
      toast.error(error?.data?.message || 'Failed to process like');
    }
  };

  const handleCommentSubmit = async (commentText) => {
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
      if (result.status === 200) {
        toast.success("Comment posted successfully");
      }
    } catch (error) {
      console.error('Comment error:', error);
      toast.error(error?.data?.message || 'Failed to post comment');
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const filterComments = commentsData?.blogComment?.filter((comment) => comment?.blog_id === Number(blogId));
  const comments = filterComments?.map((comment) => ({
    id: comment.id,
    text: comment.comment,
    author: comment?.user?.name || 'Anonymous',
    date: new Date(comment.created_at).toLocaleDateString(),
  })) || [];

  return (
    <div className="max-w-auto mx-auto p-8">
      <Toaster />
      <div className="flex justify-between items-center">
        <LikeButton 
          likes={likeCount} 
          onLike={handleLike}
          isLiked={userLiked}
        />
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
      {likesError && (
        <p className="text-red-500 mt-2">Failed to load likes. Please try again.</p>
      )}
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