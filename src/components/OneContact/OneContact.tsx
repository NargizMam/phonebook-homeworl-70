import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Props  {
    name: string,
    photo: string,
    isOpen: React.MouseEventHandler,
}
const Contact: React.FC<Props> = ({name,photo,isOpen}) => {

    return (
        <Card
            sx={{ display: 'flex', justifyContent: 'space-between', margin: 5,
                ":hover": {boxShadow: '2px 2px black'},
            }}
            onClick={isOpen}>
            <CardMedia
                component="img"
                sx={{ width: 151, margin: 1 }}
                image={photo}
                alt={name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
};

export default Contact;