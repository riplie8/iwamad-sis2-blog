import React from "react";

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4 bg-white p-6 rounded shadow-sm">
      <h2 className="text-3xl font-bold text-green-600">Protected Dashboard</h2>
      <p className="text-gray-600">You can see this because you are signed in.</p>
    </div>
  );
};