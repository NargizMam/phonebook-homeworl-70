import {createAsyncThunk} from "@reduxjs/toolkit";
import {AllContacts, ApiContact, ApiOneContact, Contact} from "../types";
import axiosApi from "../axiosApi";

export const fetchAllContacts = createAsyncThunk(
    'contacts/fetchAll',
    async() => {
        const contactsResponse = await axiosApi.get<AllContacts>('contacts.json');
        const allContacts = contactsResponse.data;

        let newContacts: ApiContact[] = [];

        if (allContacts) {
            newContacts = Object.keys(allContacts).map(id => {
                const contact = allContacts[id];
                return {
                    ...contact,
                    id
                }
            });
        }
        return newContacts;
    });
export const createContact = createAsyncThunk<void, Contact>(
    'contacts/create',
    async (contact) => {
        await axiosApi.post('contacts.json', contact)
    }
);
export const fetchOneContact = createAsyncThunk<ApiOneContact, string>(
    'contacts/fetchOne',
    async (id)=> {
        const response = await axiosApi.get<Contact>('/contacts/' + id + '.json');
        const contact = response.data;
        if(contact === null){
            throw new Error('Not found!');
        }
        const contactInfo = {
            ...contact,
            id
        }
        return contactInfo;
    }
);

interface UpdateContactParams {
    id: string,
    contact: Contact
}
export const updateContact = createAsyncThunk<void, UpdateContactParams>(
    'contacts/update',
    async (params) => {
        await axiosApi.put('/contacts/'+ params.id + '.json', params.contact);
    }
);
export const deleteContact= createAsyncThunk<void, string>(
    'contacts/delete',
    async (contactId) => {
        await axiosApi.delete('/contacts/' + contactId + '.json');
    }
);