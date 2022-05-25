import { Box, Button, Card, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <PageContainer>
        <div>

        </div>
      <Card>
        <div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <FormCard>
              <TextField
                required
                id="standard-required"
                label="Name"
                defaultValue=""
                variant="standard"
              />
              <TextField
              required
                id="standard-disabled"
                label="Email"
                defaultValue=""
                variant="standard"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <Button color="primary" variant="contained">Sign Up</Button>
            </FormCard>
          </Box>
        </div>
      </Card>
    </PageContainer>
  );
};

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  height:70vh;
  gap:20px;
`;
export const PageContainer = styled.div`
    display:flex;
    flex-direction:column-reverse;
    height:100vh;
    width:100vw;
    place-items:center;

`
export default SignUp;
