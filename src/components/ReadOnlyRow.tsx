import React from "react";
import DataList from  '../model/dataList';

interface IProps {
    contact: DataList,
    handleEditClick: (event:React.MouseEvent<HTMLButtonElement>, contact: DataList) => void;
    handleDeleteClick: (id: number) => void;
}
 
const ReadOnlyRow = ( {contact, handleEditClick, handleDeleteClick}: IProps ) => {
    return (
        <tr key={contact.id}>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button type="button" onClick={event => handleEditClick(event, contact)}>Edit</button>
                <button type="button" onClick={event => handleDeleteClick(contact.id || 0)}>Delete</button>
            </td>
        </tr>
    )
};

export default ReadOnlyRow;