import {createAsyncThunk} from "@reduxjs/toolkit";
import {AllContacts, ApiContact, Contact} from "../types";
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