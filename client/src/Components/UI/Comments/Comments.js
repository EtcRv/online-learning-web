import React, { useState, useEffect } from "react";
import Comment from "../../ReUse/Comment/Comment"
import { useSelector } from "react-redux";
import CourseServices from "../../../Services/CourseServices/CourseServices";

const Comments = ({ courseId }) => {
  const [commentContent, setCommentContent] = useState("");

  const userInfo = useSelector((state) => state.user);
  const [discussionsData, setDiscussionsData] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await CourseServices.getCommentsByCourseId(courseId);
      setDiscussionsData(response.data.reverse());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [courseId]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentContent.trim() !== "") {
      const newComment = {
        userId: userInfo.user.userId,
        comment: commentContent,
        courseId: courseId
      };
      try {
        await CourseServices.postComment(newComment);
        setCommentContent("");
      
        fetchComments(); // Gọi lại hàm fetchComments để cập nhật dữ liệu
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-4 ml-[20px]">Comments</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-4">
    <textarea
      placeholder="Write a comment"
      className="border border-gray-300 p-2 w-full rounded-md mb-2"
      value={commentContent}
      onChange={(e) => setCommentContent(e.target.value)}
    ></textarea>
  </div>
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-[20px] ml-[20px]"
  >
    Comment
  </button>
</form>

      {discussionsData.reverse().map((discussion, index) => (
        <Comment
          key={index}
          data={discussion}
        />
      ))}
    </div>
  );
};

export default Comments;
