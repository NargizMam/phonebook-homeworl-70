import {createSlice} from "@reduxjs/toolkit";
import {ApiContact} from "../types";
import {RootState} from "../app/store";
import {createContact, fetchAllContacts} from "./ContactsThunks";

interface ContactsState {
    allContacts: ApiContact[],
    fetchLoading: boolean,
    createLoading: boolean,
}

const initialState: ContactsState = {
    allContacts: [],
    fetchLoading: false,
    createLoading: false,
}

export const ContactsSlice  = createSlice({
    name: 'allContacts',
    initialState,
    reducers: {},
    extraReducers:(builder) =>  {
        builder.addCase(fetchAllContacts.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchAllContacts.fulfilled, (state, {payload: contacts}) => {
            state.fetchLoading = false;
            state.allContacts = contacts;
        });
        builder.addCase(fetchAllContacts.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(createContact.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(createContact.fulfilled, (state) => {
            state.createLoading = false;
        });
        builder.addCase(createContact.rejected, (state) => {
            state.createLoading = false;
        });
    }
});
export const contactsReducer = ContactsSlice.reducer;
export const selectAllContacts = (state: RootState) => state.contacts.allContacts;
export const selectFetchLoading = (state: RootState) => state.contacts.fetchLoading;
export const selectCreateLoading = (state: RootState) => state.contacts.createLoading;

