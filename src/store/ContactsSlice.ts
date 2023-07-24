import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiContact, ApiOneContact} from "../types";
import {RootState} from "../app/store";
import {createContact, deleteContact, fetchAllContacts, fetchOneContact, updateContact} from "./ContactsThunks";

interface ContactsState {
    allContacts: ApiContact[],
    fetchLoading: boolean,
    createLoading: boolean,
    updateLoading: boolean,
    fetchOneLoading: boolean,
    deleteLoading: boolean,
    oneContact: null | ApiOneContact,
    isShowModal: boolean;
}

const initialState: ContactsState = {
    allContacts: [],
    fetchLoading: false,
    createLoading: false,
    updateLoading: false,
    fetchOneLoading: false,
    deleteLoading: false,
    oneContact: null,
    isShowModal: false,
}

export const ContactsSlice  = createSlice({
    name: 'allContacts',
    initialState,
    reducers: {
        openModal:(state, {payload: isShow}:PayloadAction<boolean>) => {
            state.isShowModal = isShow;
        }
    },
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
        builder.addCase(fetchOneContact.pending, (state) => {
            state.fetchOneLoading = true;
        });
        builder.addCase(fetchOneContact.fulfilled, (state, {payload: contact}) => {
            state.fetchOneLoading = false;
            state.oneContact = contact;
        });
        builder.addCase(fetchOneContact.rejected, (state) => {
            state.fetchOneLoading = false;
        });
        builder.addCase(updateContact.pending, (state) => {
            state.updateLoading = true;
        });
        builder.addCase(updateContact.fulfilled, (state) => {
            state.updateLoading = false;
        });
        builder.addCase(updateContact.rejected, (state) => {
            state.updateLoading = false;
        });
        builder.addCase(deleteContact.pending, (state) => {
            state.deleteLoading = true;
        });
        builder.addCase(deleteContact.fulfilled, (state) => {
            state.deleteLoading = false;
        });
        builder.addCase(deleteContact.rejected, (state) => {
            state.deleteLoading = false;
        });

    }
});
export const contactsReducer = ContactsSlice.reducer;
export const {openModal} = ContactsSlice.actions;
export const selectAllContacts = (state: RootState) => state.contacts.allContacts;
export const selectFetchLoading = (state: RootState) => state.contacts.fetchLoading;
export const selectCreateLoading = (state: RootState) => state.contacts.createLoading;
export const selectUpdateLoading = (state: RootState) => state.contacts.updateLoading;
export const selectOneFetchLoading = (state: RootState) => state.contacts.fetchOneLoading;
export const selectOneContact = (state: RootState) => state.contacts.oneContact;
export const selectDeleteLoading = (state: RootState) => state.contacts.deleteLoading;
export const selectIsShowModal = (state: RootState) => state.contacts.isShowModal;
