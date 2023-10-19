import { getContacts } from "../../libs/helper";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Contact } from "@/Utils/types";
import SingleContact from "@/components/SingleContact";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts()
      .then((res) => {
        setContacts(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className='text-white absolute top-[180px] left-[240px]'>
        <section className='flex flex-row gap-[635px]'>
          <h1 className='font-bold text-[50px] leading-[73px] mt-[-15px]'>
            {loading
              ? "Loading..."
              : contacts.length === 0
              ? "No Contacts"
              : "Contacts"}
          </h1>
          <Link
            className='btn-primary w-[255px] h-[48px] pl-8 pt-1 mt-1'
            href={`/contacts/new`}
          >
            add new contact
          </Link>
        </section>
        <div className='bg-white rounded-[1rem] mt-4 w-[1100px] text-[#083F46] text-[18px]'>
          {contacts.length === 0 ? null : (
            <section className='grid grid-cols-5 font-bold py-4'>
              <div> </div>
              <div>Full Name</div>
              <div>Gender</div>
              <div>E-mail</div>
              <div>Phone Number</div>
            </section>
          )}
          {contacts?.map((contact: Contact, index) => {
            return <SingleContact key={index} {...contact} />;
          })}
        </div>
      </div>
    </>
  );
};
export default ContactsPage;
