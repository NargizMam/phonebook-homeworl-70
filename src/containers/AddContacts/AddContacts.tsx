import React from 'react';
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import {useNavigate} from "react-router-dom";
import {Contact} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {createContact} from "../../store/ContactsThunks";
import {selectCreateLoading} from "../../store/ContactsSlice";

const AddContacts = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const createLoading = useAppSelector(selectCreateLoading);

    const onSubmit = async (contact: Contact) => {
        await dispatch(createContact(contact))
        navigate('/');
    }
    return (
        <div>
            <ContactsForm onSubmit={onSubmit}
                          isLoading={createLoading}
            />
        </div>
    );
};

export default AddContacts;