import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Well Hello, this is my blog</h2>
      <p className="text-gray-600">
        This is a simple blog. You may explore the functionality now)
      </p>
      <div>
        <Link
          to="/posts"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
};