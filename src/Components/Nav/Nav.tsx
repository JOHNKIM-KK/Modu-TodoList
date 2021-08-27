import React, { useState } from "react";
import { getDate } from "Utils/GetDate";
import useInterval from "hooks/useInterval";
import styled from "styled-components";

const Nav: React.FC = () => {
  const { currentDate, currentTime } = getDate();

  const [totalDate, setTotalDate] = useState({
    dates: currentDate,
    time: currentTime,
  });

  useInterval(() => {
    setTotalDate({
      dates: currentDate,
      time: currentTime,
    });
  }, 1000);

  return (
    <>
      <Container>
        <Wrapper>
          <div>{totalDate.dates}</div>
          <div>{totalDate.time}</div>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 10px 30px;
  padding: 30px 20px;

  @media ${props => props.theme.size.tablet} {
    display: flex;
    justify-content: center;
    margin: 0px 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 53%;
  font-size: 40px;
  font-weight: 700;
  font-family: "Hi Melody", cursive;

  @media ${props => props.theme.size.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export default Nav;
