import React from "react";
import DataList from "../model/dataList";

interface IProps {
  editFormData: DataList;
  handleEditFormChange: (event: React.FormEvent) => void;
  handleCancelClick: (event: React.FormEvent) => void;
}

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}: IProps) => {
  return (
    <tr key={editFormData.id}>
      <td>
        <input
          type="text"
          required={true}
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={() => handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required={true}
          placeholder="Enter a address..."
          name="address"
          value={editFormData.address}
          onChange={() => handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required={true}
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={() => handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required={true}
          placeholder="Enter a email..."
          name="email"
          value={editFormData.email}
          onChange={() => handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={() => handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
