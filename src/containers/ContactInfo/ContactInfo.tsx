import * as React from 'react';
import {ApiOneContact} from "../../types";
import {useNavigate} from "react-router-dom";
import ButtonSpinner from "../../UI/Spinner/ButtonSpinner";
import ContactModal from "../../UI/ContactModal/ContactModal";
import {Button, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useAppDispatch} from "../../app/hook";
import {openModal} from "../../store/ContactsSlice";

interface Props {
    contact: ApiOneContact,
    onDelete: React.MouseEventHandler
    loading: boolean
}

const  ContactInfo: React.FC<Props> = ({contact, onDelete, loading}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    return  (
        <ContactModal title={contact.name}>
            <img src={contact.photo}
                 className="card-img-top"
                 alt={contact.name}
                 style={{maxHeight: 200 }}
            />
            <button type="button" className="btn-close "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={()=> dispatch(openModal(false))}
            >X</button>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {contact.phone}
                </Typography>
                <Typography color="text.secondary">
                    {contact.email}
                </Typography>

            </CardContent>
            <CardActions>
                <Button
                    className="btn btn-danger"
                    onClick={()=> {navigate('/edit/:' + contact.id)}}
                >
                    Edit
                </Button>
                <Button
                    className="btn btn-primary"
                    onClick={onDelete}
                >
                    {loading && <ButtonSpinner/>}
                    Delete
                </Button>
            </CardActions>
        </ContactModal>
    )
};


export default ContactInfo;