import React from 'react';

function SuccessMessage({ message }) {
  return (
    <div className="bg-green-100 text-green-600 p-4 rounded-md mb-6">
      {message}
    </div>
  );
}

export default SuccessMessage; 