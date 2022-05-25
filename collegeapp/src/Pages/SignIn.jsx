import { Button, Card, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FormCard, PageContainer } from './SignUp'

const SignIn = () => {
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
              <Button color="primary" variant="contained">Sign In</Button>
            </FormCard>
          </Box>
        </div>
      </Card>
    </PageContainer>
  )
}

export default SignIn