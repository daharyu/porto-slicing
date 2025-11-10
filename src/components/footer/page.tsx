import { Dribbble, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FooterPage = () => {
  return (
    <>
      <footer className='bg-primary-400 px-xl py-5xl text-neutral-25 gap-2xl md:px-10xl md:py-3xl flex w-full flex-col justify-between md:flex-row md:items-center'>
        <div className='gap-2xl md:gap-xl flex flex-col md:flex-row'>
          {/* Logo */}
          <div className='flex gap-[8.53px]'>
            <Image src='/logo-symbol.svg' alt='logo' width={27} height={29} />
            <h5 className='leading-4xl text-[21.33px] font-semibold'>
              Your Logo
            </h5>
          </div>

          {/* Copyright */}
          <p className='text-sm leading-7'>
            © 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>

        {/* Sosmed */}
        <div className='gap-xl flex'>
          <div className='flex-center size-12 rounded-full bg-[#410292]'>
            <Dribbble color='white' size={30} />
          </div>
          <div className='flex-center size-12 rounded-full bg-[#410292]'>
            <Instagram color='white' size={30} />
          </div>
          <div className='flex-center size-12 rounded-full bg-[#410292]'>
            <Linkedin color='transparent' fill='white' size={30} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
