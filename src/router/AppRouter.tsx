import { Navigate, Route, Routes } from "react-router-dom"
import { TareasRouter } from "../app/router/TareasRouter"
import { AuthRouter } from "../auth/router/AuthRouter"
import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/context/auth/AuthContext';
import { Box, CircularProgress, Stack } from "@mui/material";

export const AppRouter = () => {
  const { checkAuth, status } = useContext(AuthContext)
  useEffect(() => {
    checkAuth()
  }, [])

  console.log(status)

  if (status === "checking") return (
    <Box sx={{ backgroundColor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, height: '100vh' }}>
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    </Box>
  )

  return (
    <Routes>
      {
        status === "not-authenticated"
          ?<>
          <Route path="auth/*" element={<AuthRouter />}  />
          <Route path="/*" element={ <Navigate to="/auth/login" /> } />
          </>
          :
          <>
          <Route path="/*" element={<TareasRouter />} />
          <Route path="/*" element={ <Navigate to="/" /> } />
          </>
      }
    </Routes>
  )
}
