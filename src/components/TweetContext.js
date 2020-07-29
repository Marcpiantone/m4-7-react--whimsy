import React, { createContext } from "react";
import avatar from "../assets/carmen-sandiego.png";

import moment from "moment";

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  //   const tweetContents = "Where in the world am I?";
  //   const displayName = "Carmen Sandiego ✨";
  //   const username = "carmen-sandiego";
  //   const avatarSrc = { avatar };
  //   const isRetweetedByCurrentUser = false;
  //   const isLikedByCurrentUser = false;

  return (
    <TweetContext.Provider
      value={{
        date: moment().format(" h:mm A - MMMM Do, YYYY"),
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
