import type { ReactElement } from "react";
import Layout1 from "@/Layout/Layout1";
import { PageWithLayout1 } from "./_app";

const LoginPage: PageWithLayout1 = () => {
  return (
    <>
      {/* <div className='min-h-screen bg-[url(../public/Background.png)]'>
        <div className='min-w-[1502px] min-h-[1502px] absolute top-[-367px] left-[-716px] bg-[#083F46] rounded-full'></div>
      </div> */}
      <h3 className='bg-slate-50 relative top-[5rem]'>fjhfg</h3>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Layout1 />
    </>
  );
};

export default LoginPage;
