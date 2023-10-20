import { ReactNode } from "react";
import { TwcLogo } from "../../public/logo";
const Layout1 = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='min-h-screen bg-[url(../public/Background.png)]'>
        <div className='z-0 min-w-[1502px] min-h-[1502px] absolute top-[-367px] left-[-716px] bg-[#083F46] rounded-full '></div>
        <div className='w-[322px] absolute top-[255px] left-[868px] text-[#083F46]'>
          <TwcLogo />
          <p className='text-[75px] max-w-[318] leading-none'>
            <span className='font-bold text-[80px] '>contacts </span>
            portal
          </p>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};
export default Layout1;
