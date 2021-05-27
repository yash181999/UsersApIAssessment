import { Avatar, Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../data";
import { useStateValue } from "../StateProvider";

function Home() {
  const [{ userData, loading },dispatch] = useStateValue();

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
      setTimeout(() => {
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
      }, [1000]);
    }
  };

  return (
    <HomeContainer>
      <CardContainer>
        {userData.length > 0 &&
          !loading &&
          userData.map((data) => {
            return (
              <Card>
                <Avatar
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                  src={data.avatar}
                ></Avatar>
                <h2>{data.first_name + " " + data.last_name}</h2>
                <p>{data.email}</p>
              </Card>
            );
          })}
      </CardContainer>

      {loading && (
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}

      {!loading && userData.length == 0 && (
        <HomeInnerContainer>
          <h3>No Data Available!</h3>
          <Button
            onClick={getData}
            style={{ backgroundColor: "#00AC61", color: "white" }}
          >
            Get Users
          </Button>
        </HomeInnerContainer>
      )}
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  /* background-color: #77aa77;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; */
  height: 100vh;
  padding: 10px;
`;

const CardContainer = styled.div`
  display: grid;
  max-width: 1000px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background: rgb(255, 60, 131);
  background: linear-gradient(
    90deg,
    rgba(255, 60, 131, 0.9) 0%,
    rgba(255, 159, 74, 0.7) 100%
  );
  > h2 {
    color: white;
    margin-top: 10px;
  }
  > p {
    margin-top: 0;
    color: white;
  }
`;

const HomeInnerContainer = styled.div`
  display: grid;
  place-content: center;
`;
