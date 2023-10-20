import { Contact } from "@/Utils/types";
import { MaleAvatar, FemaleAvatar } from "../public/avatar";
import { EditIcon, DeleteIcon, ArrowIcon } from "../public/icon";
import { useState } from "react";
import { useRouter } from "next/router";
import { deleteContact, updateContact, getContacts } from "@/libs/helper";

type PageProps = Contact & { refetch: Function };

const SingleContact = ({
  name,
  email,
  phone,
  gender,
  _id,
  refetch,
}: PageProps) => {
  const router = useRouter();

  // component state
  const [modal, setModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [Gender, setGender] = useState(gender);

  // controlled inputs
  const [editGender, setEditGender] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  // shallow route
  const shallowRoute = () => {
    router.push(`/contacts?contactId=${_id}`, undefined, { shallow: true });
  };

  // delete contact
  const handleDeleteBtn = () => {
    shallowRoute();
    deleteContact(_id);
    setModal(true);
    setDeleteSuccess(true);
    refetch(true);
  };

  // update contact
  const handleForm = (e: Event) => {
    e.preventDefault();
    const contact: Contact = {
      _id: _id,
      name: editName || name,
      email: editEmail || email,
      phone: editPhone || phone,
      gender: editGender || gender,
    };
    setEditable(false);
    updateContact(_id, contact);
    setModal(true);
    setEditSuccess(true);
    refetch(true);
  };

  // Enable editing
  const handleEditBtn = () => {
    setEditable(true);
    shallowRoute();
  };

  // switch genders
  const handleSwitchBtn = (g: string) => {
    if (g === "male") {
      setGender("female");
      setEditGender("female");
    } else if (g === "female") {
      setGender("male");
      setEditGender("male");
    }
  };

  // handle modal
  const handleModal = () => {
    setModal(false);
    setDeleteSuccess(false);
    setEditSuccess(false);
  };

  return (
    <>
      {editable ? (
        <form
          action=''
          className='grid-style text-[20px]'
          onSubmit={handleForm}
        >
          {/* avatar */}
          <div className='pl-10 mt-[-10px] pb-8'>
            {Gender === "female" ? <FemaleAvatar /> : <MaleAvatar />}
          </div>

          {/* name */}
          <div>
            <input
              type='text'
              className='edit-contact'
              defaultValue={name}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>

          {/* gender */}
          <div>
            <input
              type='text'
              className='absolute left-[365px] w-[155px]  edit-contact'
              disabled={true}
            />
            <div className='text-left pl-2 pt-1 relative'>
              {Gender}
              <button
                className='absolute left-[90px] top-[6px]'
                onClick={() => {
                  handleSwitchBtn(Gender);
                }}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>

          {/* email */}
          <div>
            <input
              type='email'
              defaultValue={email}
              className='edit-contact'
              onChange={(e) => setEditEmail(e.target.value)}
            />
          </div>

          {/* phone */}
          <div>
            <input
              type='number'
              className='edit-contact'
              defaultValue={phone}
              onChange={(e) => setEditPhone(e.target.value)}
            />
          </div>

          {/* save-btn */}
          <div className=''>
            <button
              className='bg-[#083f46] text-white rounded-[2rem] py-1 px-4'
              type='submit'
            >
              save
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className='grid-style text-[20px]'>
            <div className='pl-10 mt-[-10px] pb-8'>
              {gender === "female" ? <FemaleAvatar /> : <MaleAvatar />}
            </div>
            <div>{name} </div>
            <div> {gender}</div>
            <div> {email}</div>
            <div> {phone}</div>
            <div className='flex flex-row gap-5 mt-[-45px]'>
              <button onClick={handleEditBtn}>
                <EditIcon />
              </button>
              <button onClick={handleDeleteBtn}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        </>
      )}

      {/* modal */}
      {modal && (
        <aside className='modal-container'>
          <div className='modal'>
            {deleteSuccess && (
              <div>Your Contact has been deleted successfully!</div>
            )}
            {editSuccess && (
              <div>Your Contact has been edited successfully!</div>
            )}
            <button className='modal-btn' onClick={handleModal}>
              Okay
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
export default SingleContact;
