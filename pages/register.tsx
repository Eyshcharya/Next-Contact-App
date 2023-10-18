import { TwcLogo } from "../public/logo";
import Link from "next/link";

const Register = () => {
  return (
    <>
      {/* Background */}
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
          <button className='btn-primary w-[131px] h-[48px] mb-5'>
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
