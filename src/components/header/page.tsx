'use client';
import navigationData from '@/app/constants/navigation-data';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@radix-ui/react-alert-dialog';
import { Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import CustomCard from '../customCard/page';
import { useEffect, useState } from 'react';

const HeaderPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const paddingY = useTransform(scrollY, [0, 100], [24, 12], { clamp: true });
  const background = useTransform(
    scrollY,
    [0, 250],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 250],
    ['blur(0px)', 'blur(12px)']
  );
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          background,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className={`py-7xl px-xl md:px-10xl flex-center text-neutral-25 fixed top-0 z-40 h-[80px] w-full justify-between bg-transparent backdrop-blur-xs md:h-[85px] ${isScrolled ? 'bg-white shadow-sm' : 'border-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className='flex gap-[8.53px]'>
          <Image
            src='/logo-symbol.svg'
            alt='logo'
            width={27}
            height={29}
            className={`${isScrolled && 'invert'}`}
          />
          <div
            className={`leading-4xl text-[21.33px] font-semibold ${isScrolled ? 'text-neutral-950!' : 'text-white'}`}
          >
            Your Logo
          </div>
        </div>

        {/* Navigation */}
        <nav className='hidden md:block'>
          <ul className='gap-4xl flex'>
            {navigationData.map((data) => (
              <li
                key={data.label}
                className={`p-md ${isScrolled ? 'text-neutral-950!' : 'text-white'}`}
              >
                <Link href={data.href} className='cursor-pointer'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hire Me */}
        <div className='hidden md:block'>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className={`h-[48px] w-[172px] md:flex ${isScrolled && 'invert'}`}
              >
                <Mail size={20} />
                Hire Me
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='absolute top-0 left-0 m-0 h-screen w-full bg-black/70'>
              <CustomCard className='md:gap-3xl p-4xl absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center bg-white md:h-fit'>
                <Image
                  src='/images/messageSuccess.svg'
                  alt='success'
                  width={232}
                  height={190}
                />
                <div className='flex w-[415px] flex-col gap-2 text-center'>
                  <h4 className='text-xl leading-[34px] font-semibold text-neutral-950'>
                    Message Sent Successfully!
                  </h4>
                  <p className='text-md leading-[30px] text-neutral-500'>
                    Thank you for reaching out. I’ll get back to you as soon as
                    possible
                  </p>
                </div>
                <AlertDialogCancel className='bg-primary-300 text-neutral-25 hover:bg-primary-300/70 h-[48px] w-[310px] rounded-full text-sm leading-7 font-medium'>
                  Back to Home
                </AlertDialogCancel>
              </CustomCard>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src='/menu-04.svg'
              alt='menu'
              width={24}
              height={24}
              className='block md:hidden'
            ></Image>
          </SheetTrigger>
          <SheetContent className='w-full'>
            <SheetHeader>
              {/* Logo */}
              <div className='flex h-20 items-center gap-[8.53px]'>
                <Image
                  src='/logo-symbol.svg'
                  alt='logo'
                  width={27}
                  height={29}
                  className='invert'
                />
                <div className='leading-4xl text-[21.33px] font-semibold text-neutral-950'>
                  Your Logo
                </div>
              </div>

              {/* Navigation */}
              <nav className=''>
                <ul className='gap-xl flex w-full flex-col'>
                  {navigationData.map((data) => (
                    <li key={data.label} className='p-md'>
                      <Link href={data.href} className=''>
                        {data.label}
                      </Link>
                    </li>
                  ))}
                  {/* Hire Me */}
                  <li className='p-md w-full'>
                    <Button variant='primary' className='h-[48px] w-full'>
                      <Mail size={20} />
                      <Link href='/'>Hire Me</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </motion.header>
    </>
  );
};

export default HeaderPage;
