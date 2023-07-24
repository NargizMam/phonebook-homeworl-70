import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectAllContacts, selectDeleteLoading, selectFetchLoading, selectOneContact} from "../../store/ContactsSlice";
import {useEffect, useState} from "react";
import {deleteContact, fetchAllContacts, fetchOneContact} from "../../store/ContactsThunks";
import OneContact from "../../components/OneContact/OneContact";
import {Container} from "@mui/material";
import Spinner from "../../UI/Spinner/Spinner";
import ContactInfo from "../ContactInfo/ContactInfo";

const PhoneBook = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const allContacts = useAppSelector(selectAllContacts);
    const fetchLoading = useAppSelector(selectFetchLoading);
    const oneContactInfo = useAppSelector(selectOneContact);
    const deleteLoading = useAppSelector(selectDeleteLoading);
    const [showModal, setShowModal] = useState(false);
    let contactsList;

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);


    const openContactInfo = async (id: string) => {
        await dispatch(fetchOneContact(id));
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    contactsList = (
        allContacts.map(contact => (
            <OneContact key={contact.id}
                     name={contact.name}
                     photo={contact.photo}
                     isOpen={() =>openContactInfo(contact.id)}
            />
        ))
    );


    const onDeleteContact =async (id: string) => {
        await  dispatch(deleteContact(id));
        navigate('/');
        setShowModal(false);
        dispatch(fetchAllContacts());
    }

    return (
        <Container maxWidth="sm">
            ALL PHONE CONTACTS
            {fetchLoading && <Spinner/>}
            {contactsList}
            {oneContactInfo &&
                <div style={{textAlign: 'center'}}>
                    <ContactInfo showModal={showModal}
                                 closeModal={closeModal}
                                 contact={oneContactInfo}
                                 onDelete={() => onDeleteContact(oneContactInfo.id)}
                                 loading={deleteLoading}
                    /></div>}
        </Container>

    );
};

export default PhoneBook;