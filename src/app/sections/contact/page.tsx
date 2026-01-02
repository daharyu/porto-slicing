'use client';
import { AlertSuccess } from '@/components/alertSucces';
import { Button } from '@/components/ui/button';
import { sendEmail } from '@/lib/resend';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
} from '@radix-ui/react-alert-dialog';
import { Send } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import { useRef } from 'react';

const ContactPage = () => {
  const initFinisher = () => {
    if (typeof window !== 'undefined' && (window as any).FinisherHeader) {
      new (window as any).FinisherHeader({
        count: 100,
        size: { min: 2, max: 8, pulse: 0 },
        speed: {
          x: { min: 0, max: 0.7 },
          y: { min: 0, max: 0.7 },
        },
        colors: {
          background: '#ffffff',
          particles: ['#160131', '#6600eb', '#7631d1'],
        },
        blending: 'overlay',
        opacity: { center: 1, edge: 0 },
        skew: 0,
        shapes: ['s', 't'],
      });
    }
  };

  // Fixed sendMessage function
  const formRef = useRef<HTMLFormElement>(null);

  async function sendMessage(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const subject = formData.get('subject') as string;

    try {
      await sendEmail(name, email, message, subject);

      formRef.current?.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Script
        src='/js/finisher-header.es5.min.js'
        strategy='afterInteractive'
        onLoad={initFinisher}
      />

      <section
        className='header section gap-3xl finisher-header relative flex flex-col justify-center md:flex-row md:gap-[194px]'
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
                +62 87836877771
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
                dharison05@gmail.com
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
                Surabaya, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <form
          ref={formRef}
          className='gap-xl md:gap-3xl md:p-4xl p-xl md:rounded-2xls flex h-fit flex-col rounded-xl bg-white shadow-sm md:w-[537px]'
          action={sendMessage}
        >
          <h5 className='md:text-display-xs text-lg leading-7 font-semibold md:leading-9'>
            Send a Message
          </h5>

          <div className='gap-xl flex flex-col'>
            <div className='gap-sm md:gap-md flex flex-col'>
              <label className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                Name
              </label>
              <input
                name='name'
                type='text'
                required
                className='px-xl py-md h-12 rounded-xl border border-neutral-200 md:h-14'
              />
            </div>
            <div className='gap-sm md:gap-md flex flex-col'>
              <label className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                Subject
              </label>
              <input
                name='subject'
                type='text'
                required
                className='px-xl py-md h-12 rounded-xl border border-neutral-200 md:h-14'
              />
            </div>
            <div className='gap-sm md:gap-md flex flex-col'>
              <label className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                Email
              </label>
              <input
                name='email'
                type='email'
                required
                className='px-xl py-md h-12 rounded-xl border border-neutral-200 md:h-14'
              />
            </div>
            <div className='gap-sm md:gap-md flex flex-col'>
              <label className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                Message
              </label>
              <textarea
                name='message'
                required
                className='px-xl py-md h-[120px] rounded-xl border border-neutral-200 md:h-[180px]'
              />
            </div>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type='submit' variant='primary' className='h-12 md:h-14'>
                <Send className='size-5' />
                Submit
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='fixed top-0 left-0 z-50 m-0 h-screen w-full bg-black/70'>
              <AlertDialogTitle className='hidden'></AlertDialogTitle>
              <AlertSuccess />
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
