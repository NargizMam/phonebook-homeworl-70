import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import {Box, Button, Container, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import {Contact} from "../../types";
import {useNavigate} from "react-router-dom";
import ButtonSpinner from "../../UI/Spinner/ButtonSpinner";

interface Props  {
    onSubmit: (contact: Contact) => void ,
    isLoading?: boolean,
    existingContact?: Contact,
    isEdit?: boolean,
}
const initialState: Contact = {
    name: '',
    photo: '',
    email: '',
    phone: ''
}


const ContactsForm : React.FC<Props>= ({
                                           onSubmit,
                                           isLoading=false,
                                           isEdit=false,
                                           existingContact = initialState
                                       }) => {
    const [contact, setContact] = useState<Contact>(existingContact);
    const navigate = useNavigate();
    const onContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setContact(prev => ({...prev, [name]: value}));
    }

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(contact);
    }

    let form = (
        <Box
            onSubmit={onFormSubmit}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, width: '45ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <div>
                <Typography variant='h4'>{isEdit ? 'Edit contact' : 'Add new contact'}</Typography>
                <TextField
                    required
                    type="text"
                    label="Contacts name"
                    name='name'
                    value={contact.name}
                    onChange={onContactChange}
                />
                <TextField
                    required
                    id="outlined-disabled"
                    type="tel"
                    name='phone'
                    label="Phone number"
                    value={contact.phone}
                    onChange={onContactChange}
                />
                <TextField
                    label="email"
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={onContactChange}
                />
                <TextField
                    label="photo"
                    type="url"
                    name="photo"
                    value={contact.photo}
                    onChange={onContactChange}
                />
                <CardMedia
                    component="img"
                    sx={{ width: 151, margin: 1 }}
                    image={contact.photo ?? contact.photo}
                />
            </div>
            <Button variant="outlined" type="submit"
                    sx={{ margin: 1 }}
                    disabled={contact.name === '' || contact.phone === ''}
            >
                {isLoading && <ButtonSpinner/>}
                {isEdit ? 'Update' : 'Create'}
            </Button>
            <Button variant="outlined" onClick={() => navigate('/')}>Back to contacts</Button>
        </Box>
    )

    return (
        <Container maxWidth="sm">
            {form}
        </Container>
    );
};

export default ContactsForm;