import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface Props{
    drawerWidth: number;
    handleDrawerOpen : () => void;
}
export const NavBar:FC<PropsWithChildren<Props>> = ({drawerWidth,handleDrawerOpen}) => {

 const navigate = useNavigate();

 const logout = () =>{
    navigate('/auth/login')
 }

  return (
    <AppBar position='fixed' sx={{
        width:{ sm:` calc(100% - ${drawerWidth}px)`},
        ml:{ sm: `${drawerWidth}px`}
    }} >
        <Toolbar>
            <IconButton
            onClick={handleDrawerOpen}
            color='inherit'
            edge="start"
            sx={{mr:2, display: {sm:'none'}}}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems="center">
                <Typography variant="h6" noWrap component="div" >Mis Eventos</Typography>
                <IconButton color="inherit"
                onClick={logout}
                >
                    <LogoutOutlined/>
                </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  )
}
