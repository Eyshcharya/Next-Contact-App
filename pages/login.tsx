import type { ReactElement } from "react";
import Layout1 from "@/Layout/Layout1";
import { PageWithLayout1 } from "./_app";

const LoginPage: PageWithLayout1 = () => {
  return (
    <>
      <h3 className='bg-slate-50 relative top-[5rem]'>Hello</h3>
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
