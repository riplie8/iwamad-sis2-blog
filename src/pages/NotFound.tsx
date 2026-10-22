import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="space-y-4 text-center py-12">
      <h2 className="text-4xl font-bold text-gray-800">404</h2>
      <p className="text-lg text-gray-600">Oops! this page doesn't exist</p>
      <div>
        <Link to="/" className="text-blue-600 underline font-medium">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};