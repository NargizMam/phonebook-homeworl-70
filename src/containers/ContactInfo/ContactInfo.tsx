import * as React from 'react';
import {ApiOneContact} from "../../types";
import Modal from '@mui/material/Modal';
import {useNavigate} from "react-router-dom";
import ButtonSpinner from "../../UI/Spinner/ButtonSpinner";

interface Props {
    showModal: boolean,
    closeModal: React.MouseEventHandler,
    contact: ApiOneContact,
    onDelete: React.MouseEventHandler
    loading: boolean
}

const  ContactInfo: React.FC<Props> = ({showModal, closeModal, contact, onDelete, loading}) => {
    const navigate = useNavigate();

    return  (
        <Modal open={showModal}>
            <div className="modal-body bg-secondary p-3" style={{width: 400,margin: 150, color: "white"}}>
                <button type="button" className="btn-close position-absolute top-0 end-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                ></button>

                <img src={contact.photo}
                     className="card-img-top"
                     alt={contact.name}
                     style={{maxHeight: 350 }}
                />
                <div className="card-body">
                    <h3 className="card-title">{contact.name}</h3>
                    <p className="card-text">{contact.phone}</p>
                    <p className="card-text">{contact.email}</p>
                </div>
                <div className="modal-footer d-flex justify-content-between mx-5" >
                    <button
                        className="btn btn-danger"
                        onClick={()=> {navigate('/edit/:' + contact.id)}}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={onDelete}
                    >
                        {loading && <ButtonSpinner/>}
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
    )
};


export default ContactInfo;