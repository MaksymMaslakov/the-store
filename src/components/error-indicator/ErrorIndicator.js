import React from "react";

import './ErrorIndicator.scss';
import icon from './error-icon.png';

const ErrorIndicator = () => {
  return (
    <div className="error-message">
      <img src={ icon }
           className="error-icon"
           alt="error-icon"/>
      <h1 className="error-text">Error</h1>
    </div>
  );
};

export default ErrorIndicator;
