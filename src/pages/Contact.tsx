import React from "react";

export const Contact: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="text-gray-600">reach out via email or drop a message below.</p>
      <div className="bg-white p-4 rounded shadow-sm border max-w-md space-y-3">
        <p className="text-sm"><strong>Email:</strong> riplie8@gmail.com</p>
        <p className="text-sm"><strong>GitHub:</strong> github.com/riplie8</p>
      </div>
    </div>
  );
};