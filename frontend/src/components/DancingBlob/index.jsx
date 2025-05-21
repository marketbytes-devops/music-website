import React from 'react';

const DancingBlob = () => {
  return (
    <div className="w-full h-20 relative overflow-hidden rounded-t-3xl">
      <div
        className="w-full h-full bg-gradient-to-r from-[#1F6ED2] via-[#4D147E] via-[#F96141] to-[#662451] animate-gradient"
        style={{
          boxShadow: '0 0 20px 5px rgba(249, 97, 65, 0.8), 0 0 40px 10px rgba(77, 20, 126, 0.6)',
        }}
      ></div>
    </div>
  );
};

export default DancingBlob;