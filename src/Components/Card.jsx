import React from "react";

const Card = ({ user}) => {
  return (
    <>
      <a href={user.download_url} target="_blank" rel="noopener noreferrer">
        <img
          src={user.download_url}
          alt={user.author}
          className="w-full h-48 object-cover"
        />
      </a>
    </>
  );
};

export default Card;
