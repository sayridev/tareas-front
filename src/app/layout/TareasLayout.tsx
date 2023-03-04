
import Box from '@mui/material/Box';
import { FC, PropsWithChildren, useState } from 'react';
import { NavBar, SideBar } from '../components';


const drawerWidth = 240;



export const TareasLayout: FC<PropsWithChildren> = ({ children }) => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} />
            <SideBar drawerWidth={drawerWidth} open={open} />
            <Box component="main" sx={{ position: "fixed", marginLeft: `${drawerWidth}px`, width: { sm: ` calc(100% - ${drawerWidth}px)` }, flexGrow: 2, p: 3, pt: 10 }}>
                {children}
            </Box>
        </Box>
    );
}