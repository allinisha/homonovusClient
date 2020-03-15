import React from 'react';
import { Emoji } from 'emoji-mart';
import './index.scss'

const Loading = ({ pastDelay, timedOut, error }) => {
  if (pastDelay) {
    return <div className="loading-box">
      <div className="loading-body">新人类正在路上...</div>
    </div>;
  } else if (timedOut) {
    return <div className="loading-box">
      <div className="loading-body">新人类无法到达</div>
    </div>;
  } else if (error) {
    return <div className="loading-box">
      <div className="loading-body loading-error">新人类发生故障</div>
    </div>;
  }
  return null;
};

export default Loading;