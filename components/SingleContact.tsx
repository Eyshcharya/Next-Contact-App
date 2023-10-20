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
  const [modal, setModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);

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
  };

  // edit contact
  const handleEditBtn = () => {
    shallowRoute();

    setModal(true);
    setEditSuccess(true);
  };

  const handleModal = () => {
    setModal(false);
    setDeleteSuccess(false);
    setEditSuccess(false);
    refetch(true);
  };
  return (
    <>
      <div className='grid-style text-[20px]'>
        <div className='pl-10 mt-[-10px] pb-8'>
          {gender === "female" ? <FemaleAvatar /> : <MaleAvatar />}
        </div>
        <div>{name} </div>
        <div> {gender}</div>
        <div> {email}</div>
        <div> {phone}</div>
        <div className='flex flex-row gap-4 mt-[-30px]'>
          <button onClick={handleEditBtn}>
            <EditIcon />
          </button>
          <button onClick={handleDeleteBtn}>
            <DeleteIcon />
          </button>
        </div>
      </div>

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
