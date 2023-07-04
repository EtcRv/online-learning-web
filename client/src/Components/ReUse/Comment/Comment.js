import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="flex items-start mb-4 border border-gray-300 p-4 rounded-md">
      <img
        src={data.avatar_url}
        alt="User Avatar"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="text-lg font-semibold">{data.name}</h4>
        <p className="text-gray-700">{data.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
