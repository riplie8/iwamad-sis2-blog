import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import type { Post } from '../data/posts';
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white p-5 rounded shadow-sm border border-gray-100 space-y-2">
      <h3 className="text-xl font-semibold">
        <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="text-sm text-gray-400">{post.date}</p>
      <p className="text-gray-600">{post.summary}</p>
    </div>
  );
};

export const PostsList: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Blog Posts</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};