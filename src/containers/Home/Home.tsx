import React, {useEffect} from 'react';

import {Container} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectAllContacts, selectFetchLoading} from "../../store/ContactsSlice";
import {fetchAllContacts} from "../../store/ContactsThunks";
import OneContact from "../../components/OneContact/OneContact";
import Spinner from "../../UI/Spinner/Spinner";

const PhoneBook = () => {
    const dispatch = useAppDispatch();
    const allContacts = useAppSelector(selectAllContacts);
    const fetchLoading = useAppSelector(selectFetchLoading);
    let contactsList;

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);


    contactsList = (
        allContacts.map(contact => (
            <OneContact key={contact.id}
                     name={contact.name}
                     photo={contact.photo}
            />
        ))
    );


    return (
        <Container maxWidth="sm">
            ALL PHONE CONTACTS
            {fetchLoading && <Spinner/>}
            {contactsList}
        </Container>

    );
};

export default PhoneBook;