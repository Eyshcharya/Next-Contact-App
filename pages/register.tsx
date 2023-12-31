import type { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout1 from "@/components/layouts/layout1";
import { PageWithLayout } from "./_app";

const Register: PageWithLayout = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push(`/`);
  };
  return (
    <>
      {/* Heading */}
      <div className='absolute top-[125px] left-[122px] text-white'>
        <>
          <h1 className='font-[800] text-[50px]'>Register Now!</h1>
        </>

        {/* Inputs */}
        <div className='flex flex-col mt-10'>
          <input type='email' placeholder='e-mail' className='input-primary' />
          <input
            type='password'
            placeholder='create password'
            className='input-primary'
          />
          <input
            type='password'
            placeholder='confirm password'
            className='input-primary'
          />
        </div>

        {/* Buttons */}
        <section className='mt-4'>
          <button
            onClick={handleRegister}
            className='btn-primary w-[131px] h-[48px] mb-5'
          >
            register
          </button>
          <br />
          <Link
            href={`/login`}
            className='underline underline-offset-8 pt-2  text-[25px]'
          >
            {` < Back to login`}
          </Link>
        </section>
      </div>
    </>
  );
};
export default Register;
Register.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout1>{page}</Layout1>
    </>
  );
};
