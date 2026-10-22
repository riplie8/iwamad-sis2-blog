import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [likes, setLikes] = useState<number>(0);

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-red-600">No post found</h2>
        <p className="text-gray-600">This post does not exist.</p>
        <Link to="/posts" className="text-blue-600 underline">Back to Posts</Link>
      </div>
    );
  }

  return (
    <div className="space-y-4 bg-white p-6 rounded shadow-sm">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-400">{post.date}</p>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>

      <div className="pt-4 flex items-center space-x-4 border-t">
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-pink-100 text-pink-600 px-4 py-2 rounded hover:bg-pink-200 font-medium"
        >
          ❤️ Like ({likes})
        </button>
        <Link to="/posts" className="text-sm text-gray-500 hover:underline">
          &larr; Back to all posts
        </Link>
      </div>
    </div>
  );
};