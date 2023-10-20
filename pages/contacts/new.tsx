import { ContactSchema } from "@/Utils/formValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getContacts, addContact } from "../../libs/helper";
import { Contact } from "@/Utils/types";
import { useRouter } from "next/router";

const AddContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // post contact
  const onSubmit = async (contact: Contact) => {
    addContact(contact);
    router.push(`/contacts`);
    getContacts();
  };
  return (
    <>
      <div className='text-white absolute top-[180px] left-[242px]'>
        <section className='h-[180px] w-[950px]'>
          <h1 className='font-bold text-[50px] leading-[73px]'>New Contact</h1>
        </section>

        {/* form */}
        <form
          action=''
          className='mt-[-50px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='grid grid-cols-2'>
            {/* full name */}
            <input
              className='input-primary mr-14'
              type='text'
              placeholder='full name'
              {...register("name")}
            />

            {/* email */}
            <input
              className='input-primary'
              type='email'
              placeholder='e-mail'
              {...register("email")}
            />

            {/* phone */}
            <input
              className='input-primary'
              type='text'
              placeholder='phone number'
              {...register("phone")}
            />
          </div>

          {/* gender */}
          <div className='absolute top-[240px] left-[580px] text-[25px]'>
            <label>Gender : </label>

            <input
              className='ml-6 radio-input'
              type='radio'
              value='male'
              id='male'
              {...register("gender")}
            />
            <label htmlFor='male'>male</label>
            <input
              className='ml-12 radio-input'
              type='radio'
              value='female'
              id='female'
              {...register("gender")}
            />
            <label htmlFor='female'>female</label>
          </div>

          {/* Submit-Btn */}

          {contacts?.length === 0 ? (
            <button
              className='btn-primary w-[310px] h-[48px] mt-[50px]'
              type='submit'
            >
              {loading ? "Loading..." : "add your first contact"}
            </button>
          ) : (
            <>
              <button
                className='btn-primary w-[280px] h-[48px] mt-[50px]'
                type='submit'
              >
                add new contact
              </button>

              <Link
                href={"/contacts"}
                className='underline text-[23px] underline-offset-4 ml-[495px]'
              >
                {`View Contacts >>`}
              </Link>
            </>
          )}
        </form>
      </div>
    </>
  );
};
export default AddContactPage;
