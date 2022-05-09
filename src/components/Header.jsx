import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 780,
      },
    },
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "white",
    border: "3px solid #2b4cb8",
    boxShadow: 3,
    p: 4,
    [theme.breakpoints.down('mobile')]: {
      width: 250,
    }
  };

  return (
    <Container>
      <a>
        <img src="/images/Welcome!.svg" alt="" />
      </a>
      <Menu></Menu>

      <RightMenu>
        <a onClick={handleClick}>Contact Me</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a target="_blank" href="https://github.com/ElijahMPalmer">My GitHub</a>
        </li>
        <li>
          <a target ="_blank" href="https://www.linkedin.com/in/elijah-palmer/">My LinkedIn</a>
        </li>
        <li>
          <a target="_blank" href="https://dailystoic.com/">Check out Daily Stoic</a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/ElijahMPalmer/StoiSolution">Learn More About StoiSolution</a>
        </li>
          
      </BurgerNav>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography 
          id="modal-modal-title" 
          variant="h6" 
          component="h2"
          sx={{
            [theme.breakpoints.down('mobile')]: {
              p:{
                fontSize: '12px'
              }
            }
          }}
          >
            <h3>Sometimes life is stressful!</h3>
            <p>
              A key principle of Stoicism is recognizing what is inside of your control and what is not. 
              So that you can spend your time on the things that matter and not stress over the things you can't change. 
            </p>
            <p>
              The Philosopher Epictetus once said "<em>Make the best use of what is in your power, and take the rest as it happens.</em>"
            </p>
            <p>
              I built this tool to help you come to an understanding of what is in and outside your control. This may seem stupid at first, but trust me, getting those things on screen and out of your head will help more than you'd think!
            </p>
            <p><em>Give it a shot!</em></p>
              
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/*  form 1 */}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  img{
    width: 200px;
  }


  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
    }
    a {
      font-size: 10px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 100;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 24px;
    font-weight: 400;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: black;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #cccccc;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
