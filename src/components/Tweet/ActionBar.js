import React, { useContext } from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = ({
  isRetweetedByCurrentUser,
  isLikedByCurrentUser,
  setIsLiked,
  incrementLikes,
  setIsRetweeted,
  incrementRetweet,
}) => {
  const toggleLiked = () => {
    isLikedByCurrentUser === true ? incrementLikes(-1) : incrementLikes(+1);
    setIsLiked(!isLikedByCurrentUser);
  };

  const toggleRetweet = () => {
    isRetweetedByCurrentUser === true
      ? incrementRetweet(-1)
      : incrementRetweet(+1);
    setIsRetweeted(!isRetweetedByCurrentUser);
  };

  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action color="rgb(23, 191, 99)" size={40} onClick={toggleRetweet}>
        <TweetActionIcon
          kind="retweet"
          color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
        />
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={toggleLiked}>
        <LikeButton isLiked={isLikedByCurrentUser} />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
