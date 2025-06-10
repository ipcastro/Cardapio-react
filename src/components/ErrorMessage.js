import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="bg-red-100 text-red-600 p-4 rounded-md">
        {message}
      </div>
    </div>
  );
}

export default ErrorMessage; 