
export interface Contact {
    name: string,
    phone: string,
    email: string,
    photo: string,
}

export interface ApiContact {
    id: string,
    name: string,
    photo: string
}
export interface ApiOneContact extends Contact{
    id: string
}


export interface AllContacts {
    [id: string] : ApiContact
}