import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import Stats from "./Stats";

import { TweetContext } from "../TweetContext";

const Tweet = () => {
  const {
    date,
    displayName,
    username,
    avatarSrc,
    tweetContents,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    numOfRetweets,
    numOfLikes,
    setIsLiked,
    incrementLikes,
    incrementRetweet,
    setIsRetweeted,
  } = useContext(TweetContext);

  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <StatsWrap>
        <Stats value={{ number: numOfRetweets, name: "Retweets" }}></Stats>
        <pre> </pre> <pre> </pre>
        <Stats value={{ number: numOfLikes, name: "Likes" }}></Stats>
      </StatsWrap>
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
        setIsLiked={setIsLiked}
        incrementLikes={incrementLikes}
        setIsRetweeted={setIsRetweeted}
        incrementRetweet={incrementRetweet}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const StatsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export default Tweet;
