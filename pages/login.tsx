import type { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout1 from "@/components/layouts/layout1";
import { PageWithLayout } from "./_app";

const LoginPage: PageWithLayout = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push(`/`);
  };
  return (
    <>
      {/* Heading */}
      <div className='absolute top-[140px] left-[122px] text-white'>
        <>
          <h1 className='font-[800] text-[50px]'>Hi there,</h1>
          <p className='max-w-[253px] font-[400] text-[35px] leading-8'>
            Welcome to our contacts portal
          </p>
        </>

        {/* Inputs */}
        <div className='flex flex-col mt-10'>
          <input type='email' placeholder='e-mail' className='input-primary' />
          <input
            type='password'
            placeholder='password'
            className='input-primary'
          />
        </div>

        {/* Buttons */}
        <section className='mt-6 flex flex-row'>
          <button
            onClick={handleLogin}
            className='btn-primary w-[131px] h-[48px]'
          >
            login
          </button>
          <label className='pt-2 pl-5 text-[25px]'>
            or{" "}
            <Link
              href={`/register`}
              className='underline underline-offset-8 ml-3'
            >
              Click here to Register
            </Link>
          </label>
        </section>
      </div>
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
