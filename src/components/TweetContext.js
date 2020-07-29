import React, { useState, createContext } from "react";
import avatar from "../assets/carmen-sandiego.png";

import moment from "moment";

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  return (
    <TweetContext.Provider
      value={{
        date: moment().format(" h:mm A - MMMM Do, YYYY"),
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        numOfLikes,
        numOfRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
