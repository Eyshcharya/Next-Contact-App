import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const handleAddContact = () => {
    router.push("/contacts/new");
  };
  return (
    <>
      <div className='text-white absolute top-[208px] left-[242px]'>
        <section className='h-[180px] w-[950px] mb-5'>
          <h1 className='font-bold text-[50px] leading-[73px]'>Welcome,</h1>
          <p className='font-400 text-[35px] leading-[55px]'>
            This is where your contacts will live. Click the button below to add
            a new contact.
          </p>
        </section>

        <button
          className='btn-primary text-[25px] w-[323px] h-[48px] mt-12'
          onClick={handleAddContact}
        >
          add a new contact
        </button>
      </div>
    </>
  );
};
export default HomePage;
