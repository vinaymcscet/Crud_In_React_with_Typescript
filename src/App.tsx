import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";

import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

import "./App.css";
import DataList from "./model/dataList";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<DataList[]>(data);
  const [addFormData, setAddFormData] = useState<DataList>({
    id: 0,
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<DataList>({
    // id: parseInt('') | 0,
    id: 0,
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  function handleAddFormChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();

    const input = event.target as HTMLInputElement;

    const fieldName = input.getAttribute("name");
    const fieldValue = input.value;

    let newFormData = { ...addFormData };
    if (fieldName === "fullName") {
      newFormData.fullName = fieldValue;
    } else if (fieldName === "address") {
      newFormData.address = fieldValue;
    } else if (fieldName === "phoneNumber") {
      newFormData.phoneNumber = fieldValue;
    } else if (fieldName === "email") {
      newFormData.email = fieldValue;
    }

    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event: React.FormEvent) => {
    event.preventDefault();

    const input = event.target as HTMLInputElement;

    const fieldName = input.getAttribute("name");
    const fieldvalue = input.value;

    const newFormData = { ...editFormData };

    if (fieldName === "fullName") {
      newFormData.fullName = fieldvalue;
    } else if (fieldName === "address") {
      newFormData.address = fieldvalue;
    } else if (fieldName === "phoneNumber") {
      newFormData.phoneNumber = fieldvalue;
    } else if (fieldName === "email") {
      newFormData.email = fieldvalue;
    }

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts: any = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (
    event: React.FormEvent,
    contact: {
      id: number | null;
      fullName: string;
      address: string;
      phoneNumber: string;
      email: string;
    }
  ) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues: any = {
      id: contact.id,
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId: number) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact: DataList) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required={true}
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required={true}
          placeholder="Enter a address..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required={true}
          placeholder="Enter a phoneNumber..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          required={true}
          placeholder="Enter a email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
