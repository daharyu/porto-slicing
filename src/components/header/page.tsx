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
  AlertDialogTitle,
} from '@radix-ui/react-alert-dialog';
import { Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import meImg from '@/../public/images/Me1.png';
import Link from 'next/link';
import CustomCard from '../customCard/page';
import { useEffect, useState } from 'react';
import { AlertSuccess } from '../alertSucces';

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
        <Link href='/' className='flex gap-[8.53px]'>
          <Image
            src={meImg}
            alt='logo'
            width={100}
            height={100}
            className={`size-8 rounded-full border object-center ${isScrolled ? 'border-neutral-950' : 'border-white'}`}
          />
          <div
            className={`leading-4xl text-[21.33px] font-semibold ${isScrolled ? 'text-neutral-950!' : 'text-white'}`}
          >
            David H Y
          </div>
        </Link>

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
          <Link href='#contact'>
            <Button
              className={`h-[48px] w-[172px] md:flex ${isScrolled && 'invert'}`}
            >
              <Mail size={20} />
              Hire Me
            </Button>
          </Link>
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
