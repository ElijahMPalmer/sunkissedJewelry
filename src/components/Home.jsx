import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Particles, { ISourceOptions, Main } from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const style = {
    color: "black",
    fontFamily: "Dance",
    fontSize: '18px',
    borderColor: "black",
    borderRadius: 0,
    "&:hover": {
      borderBottom: "1.5px solid black",
    },
  };
  return (
    <Container>
      
      <img src="/images/SunKissedJewelry.svg" alt="Logo" />
      <ButtonGroup>
        <Button sx={style}>Make a Custom Order</Button>
        <Button sx={style}>Current Inventory</Button>
      </ButtonGroup>
      
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);

  img {
    z-index: 5;
    margin: 125px 0;
    width: 800px;
  }
`;



const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
`
