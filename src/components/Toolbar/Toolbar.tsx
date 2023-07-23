import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

const Navbar: React.FC = () => {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#fff'}}
                    >
                        PHONEBOOK
                    </Typography>
                    <Button  variant="contained" href="/new-contact">
                        Add new contact
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
);
}
export default Navbar;