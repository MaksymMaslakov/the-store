import React from "react";

import './ErrorIndicator.scss';
import icon from './error-icon.png';

const ErrorIndicator = (error = {}) => {
  return (
    <div className="error-message">
      <img src={ icon }
           className="error-icon"
           alt="error-icon"/>
      <h3 className="error-text">error {error.code}</h3>
      <p className="text-center">{error.message}</p>
    </div>
  );
};

export default ErrorIndicator;
