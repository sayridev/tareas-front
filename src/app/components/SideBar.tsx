import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { FC, PropsWithChildren } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";

interface Props {
    open: boolean;
    drawerWidth: number;

}

export const SideBar: FC<PropsWithChildren<Props>> = ({ open, drawerWidth }) => {

    const navigation= useNavigate()
    const navigate = (value:string) =>{
        navigation(value)
    }

    return (
        <Drawer  variant="permanent" open={open} sx={{
            
            display: { sx: 'block' },
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }
        }}>
            <Toolbar>
                <Typography variant='h6' noWrap component="div" >Curso Web</Typography>
            </Toolbar>
            <Divider />
            <List>
                {[{name:'Tareas',link:'/task'}, {name:'Eventos',link:'/event'}].map((text, index) => (
                    <ListItem key={text.name} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={()=>navigate(text.link)}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name}  />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    )
}
