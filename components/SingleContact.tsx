import { Contact } from "@/Utils/types";

const SingleContact = ({ name, email, phone, gender }: Contact) => {
  return (
    <div className='grid grid-cols-5'>
      <div> </div>
      <div>{name} </div>
      <div> {gender}</div>
      <div> {email}</div>
      <div> {phone}</div>
    </div>
  );
};
export default SingleContact;
