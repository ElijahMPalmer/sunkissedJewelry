import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";

function Footer() {
  const style = {
    color: "black",
    fontFamily: "Dance",
    fontSize: "22px",
    fontWeight: 500,
    borderColor: "black",
    borderRadius: 0,
  };
  return (
    <Container>
      <a href="">
        <img src="/images/facebook.png" alt="" />
      </a>
      <Button id="facebook-flag" startIcon={<ArrowBackIosIcon/>} endIcon={<MasonJar><img src="/images/masonjar.png" alt="" /></MasonJar>} sx={style}>
        Check Out my Facebook Store!
      </Button>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  z-index: 5;

  img {
    margin: 8px 15px;
    width: 50px;
  }
`;

const MasonJar = styled.div`
  width: 35px;
  height: 35px;

  img{
    margin: 0px 0px;
    width: 25px;
  }
`

