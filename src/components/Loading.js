import React from 'react';

const Loading = ({ pastDelay, timedOut, error }) => {
  if (pastDelay) {
    return <div>即将到来...</div>;
  } else if (timedOut) {
    return <div>静心中...</div>;
  } else if (error) {
    return <div>静心失败</div>;
  }
  return null;
};

export default Loading;