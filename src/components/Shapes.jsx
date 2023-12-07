import React from 'react';

const Shapes = () => {
  return (
    <div className="shapes-container ">
      {[...Array(8)].map((_, index) => (
        <div key={index} className={`shape shape-${index + 1}`}></div>
      ))}
    </div>
  );
};

export default Shapes;
