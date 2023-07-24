import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {
    openModal,
    selectAllContacts,
    selectDeleteLoading,
    selectFetchLoading,
    selectOneContact
} from "../../store/ContactsSlice";
import {useEffect} from "react";
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

    let contactsList;

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);


    const openContactInfo = async (id: string) => {
        await dispatch(fetchOneContact(id));
        dispatch(openModal(true));
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
        dispatch(openModal(false));
        dispatch(fetchAllContacts());
    }

    return (
        <Container maxWidth="sm">
            ALL PHONE CONTACTS
            {fetchLoading && <Spinner/>}
            {contactsList}
            {oneContactInfo &&
                <div style={{textAlign: 'center'}}>
                    <ContactInfo
                                 contact={oneContactInfo}
                                 onDelete={() => onDeleteContact(oneContactInfo.id)}
                                 loading={deleteLoading}
                    /></div>}
        </Container>

    );
};

export default PhoneBook;