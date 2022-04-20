import React from 'react';
import notFound from './not found.png';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="notFound">
        <img className="imgNotFound" src={notFound} alt="not found" />
        <Link to="/" className="backToHome">Back To Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
