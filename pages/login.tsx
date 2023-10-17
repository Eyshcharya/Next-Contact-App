import type { ReactElement } from "react";
import Layout1 from "@/Layout/Layout1";
import { PageWithLayout1 } from "./_app";

const LoginPage: PageWithLayout1 = () => {
  return (
    <>
      <div className='z-10 bg-black relative text-white top-[5rem]'>Hello</div>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout1 />
      {page}
    </>
  );
};

export default LoginPage;
