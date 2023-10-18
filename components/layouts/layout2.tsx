import { Icon, LogoutIcon } from "@/public/logo";
import { useRouter } from "next/router";

const layout2 = ({ children }: any) => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };
  return (
    <>
      <div className='min-h-screen bg-[url(../public/Background.png)]'> </div>
      <div className='w-[1763px] h-[1107px] absolute top-[-215px] left-[-125px] rotate-[25.63deg] bg-[#083F46] rounded-[50%]'></div>
      <div className='absolute top-[50px] left-[222px] text-white'>
        <Icon />{" "}
        <span className=' font-sans font-semibold text-[25px] mb-10 absolute top-[-9px] left-[50px]'>
          twc
        </span>
        <p className=' w-[135px] text-[30px] ml-6 leading-7'>
          <span className='font-bold'>contacts </span>
          portal
        </p>
      </div>
      {children}
      <div className='absolute  text-white top-[650px] right-[140px] flex'>
        <LogoutIcon />
        <button
          onClick={handleLogout}
          className='ml-5 underline underline-offset-4 text-[21px]'
        >
          logout
        </button>
      </div>
    </>
  );
};
export default layout2;
