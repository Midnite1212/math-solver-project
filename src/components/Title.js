import React from 'react';

const simpleTitle = ()=>{
  return (
    <div className="simple-title">
      <span className="caption">Simple <strong>Calculator</strong>
      </span>
    </div>
  );
};

const financeTitle = ()=>{
  return (
    <div className="finance-title">
      <span className="caption">Finance <strong>Calculator</strong>
      </span>
    </div>
  );
};

export  { simpleTitle, financeTitle };