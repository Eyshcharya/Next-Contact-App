import { TwcLogo } from "../public/logo";
import Link from "next/link";
const LoginPage = () => {
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
          <button className='btn-primary w-[131px] h-[48px]'>login</button>
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

export default LoginPage;
