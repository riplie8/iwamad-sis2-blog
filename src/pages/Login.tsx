import React from "react";

interface LoginProps {
  onSignIn: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSignIn }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4 mt-10">
      <h2 className="text-2xl font-bold">Sign In Required</h2>
      <p className="text-gray-600 text-sm">Please sign in to access the protected dashboard page.</p>
      <button
        onClick={onSignIn}
        className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700"
      >
        Sign In Now
      </button>
    </div>
  );
};