import React, {useEffect} from 'react';
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import {useNavigate, useParams} from "react-router-dom";
import {Contact} from "../../types";
import {selectOneContact, selectOneFetchLoading, selectUpdateLoading} from "../../store/ContactsSlice";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchOneContact, updateContact} from "../../store/ContactsThunks";
import Spinner from "../../UI/Spinner/Spinner";


const EditContact = () => {
    const {id} = useParams() as {id: string};
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const updateLoading = useAppSelector(selectUpdateLoading);
    const fetchOneLoading = useAppSelector(selectOneFetchLoading);
    const oneContact = useAppSelector(selectOneContact);
    useEffect(() => {
        dispatch(fetchOneContact(id as string));
    },[dispatch, id]);

    const onSubmit = async (contact: Contact) => {
        dispatch(updateContact({id, contact}));
        navigate('/');
    };

    return (
        <div>
            {fetchOneLoading && <Spinner/>}
            {oneContact &&
                <ContactsForm
                    onSubmit={onSubmit}
                    isEdit
                    existingContact={oneContact}
                    isLoading={updateLoading}
                />}
        </div>
    );
};

export default EditContact;