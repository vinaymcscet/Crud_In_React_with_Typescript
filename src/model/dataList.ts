class DataList {
  id: number | null;
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  constructor(
    id: number | null,
    fullName: string,
    address: string,
    phoneNumber: string,
    email: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

export default DataList;
