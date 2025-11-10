import { Button } from '@/components/ui/button';
import {
  FieldSet,
  FieldLegend,
  FieldDescription,
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from '@/components/ui/field';
import { Send } from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <>
      <section
        className='section gap-3xl relative flex flex-col md:flex-row md:gap-[194px]'
        id='contact'
      >
        {/* Left */}
        <div className='gap-3xl md:gap-5xl flex flex-col md:my-auto md:w-[453px]'>
          <div className='md:text-display-2xl text-display-md gap-[22px] leading-[46px] md:leading-[60px]'>
            <h1 className='md:text-display-2xl text-display-md leading-[46px] font-bold tracking-tight md:leading-[60px]'>
              I've been waiting for you.
            </h1>
            <p className='text-md leading-[30px] md:text-lg md:leading-8'>
              Fill in the form or Send us an email
            </p>
          </div>

          <div className='gap-3xl md:gap-4xl flex flex-col'>
            <div className='gap-md md:gap-xl flex'>
              <div className='flex-center bg-primary-100 size-10 rounded-full md:size-12'>
                <Image
                  src='/images/phone-01.svg'
                  alt='phone'
                  width={20}
                  height={20}
                  className='md:size-6'
                />
              </div>
              <p className='text-md my-auto leading-[30px] md:text-lg md:leading-8'>
                +62 1234567890
              </p>
            </div>
            <div className='gap-md md:gap-xl flex'>
              <div className='flex-center bg-primary-100 size-10 rounded-full md:size-12'>
                <Image
                  src='/images/mail-01.svg'
                  alt='phone'
                  width={20}
                  height={20}
                  className='md:size-6'
                />
              </div>
              <p className='text-md my-auto leading-[30px] md:text-lg md:leading-8'>
                edwinanderson@email.com
              </p>
            </div>
            <div className='gap-md md:gap-xl flex'>
              <div className='flex-center bg-primary-100 size-10 rounded-full md:size-12'>
                <Image
                  src='/images/marker-pin-01.svg'
                  alt='phone'
                  width={20}
                  height={20}
                  className='md:size-6'
                />
              </div>
              <p className='text-md my-auto leading-[30px] md:text-lg md:leading-8'>
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <form className='gap-xl md:gap-3xl md:p-4xl p-xl md:rounded-2xls flex h-[494px] flex-col rounded-xl bg-white shadow-sm md:h-fit md:w-[537px]'>
          <h5 className='md:text-display-xs text-lg leading-7 font-semibold md:leading-9'>
            Send a Message
          </h5>

          <div className='gap-xl flex flex-col'>
            <div className='gap-sm md:gap-md flex flex-col'>
              <label className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                Name
              </label>
              <input
                type='text'
                className='px-xl py-md h-12 rounded-xl border border-neutral-200 md:h-14'
              />
            </div>
            <div className='gap-sm md:gap-md flex flex-col'>
              <label className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                Email
              </label>
              <input
                type='email'
                className='px-xl py-md h-12 rounded-xl border border-neutral-200 md:h-14'
              />
            </div>
            <div className='gap-sm md:gap-md flex flex-col'>
              <label className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                Message
              </label>
              <textarea className='px-xl py-md h-[120px] rounded-xl border border-neutral-200 md:h-[180px]' />
            </div>
          </div>
          <Button type='submit' variant='primary' className='h-12 md:h-14'>
            <Send className='size-5' />
            Submit
          </Button>
        </form>
        <Image
          src='/images/bg-pattern.svg'
          alt='bgPattern'
          width={0}
          height={0}
          className='absolute bottom-0 left-0 -z-10 h-28 w-[488px] md:h-[330px] md:w-full'
        />
      </section>
    </>
  );
};

export default ContactPage;
