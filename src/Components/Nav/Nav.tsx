import React, { useState } from "react";
import useInterval from "hooks/useInterval";
import styled from "styled-components";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octber",
  "November",
  "December",
];

const Nav: React.FC = () => {
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const currentDate = `${DAYS[day]}  ${MONTHS[month]} ${date}, ${year}`;
  const currentTime = `${hours < 10 ? `0${hours}` : hours}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;

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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 53%;
  font-size: 40px;
  font-weight: 700;
  font-family: "Hi Melody", cursive;
`;

export default Nav;
