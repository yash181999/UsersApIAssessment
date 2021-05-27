import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import logo from "../circle_logo.png";
import { fetchData } from "../data";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ userData, loading }, dispatch] = useStateValue();

  const getData = async () => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    const data = await fetchData();
    if (data.length > 0) {
      dispatch({
        type: "SET_USER_DATA",
        userData: data,
      });
     setTimeout(() =>{
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
     },[1000])
     
    }
  };

  return (
    <NavContainer>
      <img src={logo} />
      <Button onClick={getData}>Get Users</Button>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  position: sticky;
  top: 0;
  > img {
    width: 100px;
    object-fit: contain;
    height: 100px;
  }
  > button {
    background: rgb(255, 60, 131);
    background: linear-gradient(
      90deg,
      rgba(255, 60, 131, 1) 0%,
      rgba(255, 159, 74, 1) 100%
    );
    color: white;
  }
`;
