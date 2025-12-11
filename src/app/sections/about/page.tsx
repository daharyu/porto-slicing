'use client';
import CustomCard from '@/components/customCard/page';
import Marquee from 'react-fast-marquee';
import { motion } from 'motion/react';
import { Mail, Star, Stars } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AboutMe = () => {
  return (
    <section className='section' id='about'>
      {/* Text */}
      <div className='gap-lg md:gap-xl flex flex-col'>
        <h6 className='text-md leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
          Hi, I’m Bernardus David H Y 👋
        </h6>
        <p className='md:text-display-md text-xl leading-[34px] font-semibold md:leading-[46px] md:tracking-tight'>
          Building digital products with a focus on crafting visually engaging
          and seamless user interfaces using React.js.{' '}
          <span className='text-neutral-400'>
            Prioritizing responsive design, performance optimization, and
            user-centric features to deliver exceptional web experiences.
          </span>
        </p>
      </div>

      {/* Container */}
      <div className='gap-xl md:gap-2xl grid w-full grid-cols-1 md:grid-cols-3'>
        {/* Card 1 */}
        <CustomCard className='bg-secondary-300 relative'>
          <div className='gap-md md:gap-xl m-6 flex flex-col text-white'>
            <h5 className='text-display-sm md:text-display-md leading-[38px] font-bold md:leading-[46px] md:tracking-tight'>
              Why Choose Me
            </h5>
            <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
              Delivering excellence with innovative solutions and seamless
              execution.
            </p>
          </div>

          {/* Gradient */}
          <div className='absolute top-1/2 left-0 z-10 h-1/2 w-1/5 rounded-b-2xl bg-linear-to-r from-[#E17B0E]/80 to-transparent/0'></div>
          <div className='absolute top-1/2 right-0 z-10 h-1/2 w-1/5 rounded-b-2xl bg-linear-to-l from-[#E17B0E]/80 to-transparent/0'></div>

          {/* Marquee */}
          <div className='flex- gap-xl absolute top-[198px] w-full flex-col overflow-x-hidden'>
            {/* 1st Floor */}
            <Marquee
              pauseOnHover
              className='my-3 flex w-full justify-between md:my-4'
            >
              <div className='py-xs px-xl text-sn mx-2 rounded-full bg-white leading-7'>
                React Expert
              </div>
              <div className='py-xs px-xl text-sn mx-2 rounded-full bg-white leading-7'>
                Fullstack Developer
              </div>
              <div className='py-xs px-xl text-sn mx-2 rounded-full bg-white leading-7'>
                Resposive Design
              </div>
            </Marquee>

            {/* 2nd Floor */}
            <Marquee
              pauseOnHover
              className='my-3 flex w-full justify-between md:my-4'
              direction='right'
            >
              <div className='py-xs px-xl text-sn mx-3 rounded-full bg-white leading-7'>
                React Expert
              </div>
              <div className='py-xs px-xl text-sn mx-3 rounded-full bg-white leading-7'>
                5 Years Experience
              </div>
            </Marquee>

            {/* 3rd Floor */}
            <Marquee
              className='my-3 flex w-full justify-between md:my-4'
              pauseOnHover
            >
              <div className='py-xs px-xl text-sn mx-2 rounded-full bg-white leading-7'>
                React Expert
              </div>
              <div className='py-xs px-xl text-sn mx-2 rounded-full bg-white leading-7'>
                Clean Code
              </div>
              <div className='py-xs px-xl text-sn mx-2 rounded-full bg-white leading-7'>
                Performance Optimation
              </div>
            </Marquee>
          </div>
        </CustomCard>

        {/* Card 2 */}
        <CustomCard className='relative bg-neutral-900'>
          <div className='gap-md md:gap-xl m-6 flex flex-col text-white'>
            <h5 className='text-display-sm md:text-display-md leading-[38px] font-bold md:leading-[46px] md:tracking-tight'>
              Expert Skill
            </h5>
            <div className='gap-xs flex'>
              {[1, 2, 3, 4, 5].map((data) => (
                <Star
                  key={data}
                  size={24}
                  className='size-3xl md:size-4xl'
                  fill='orange'
                  color='orange'
                />
              ))}
            </div>
            <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
              Mastering modern technologies to deliver impactful and efficient
              solutions
            </p>
          </div>

          {/* Cointainer */}
          <div className='absolute top-3/5 left-1/2 grid w-[333px] -translate-x-1/2 grid-cols-5 gap-6'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
              <motion.div
                key={data}
                className='flex-center size-[52.58px] rounded-full bg-neutral-800'
                whileHover={{ scale: 1.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 14,
                }}
              >
                <Image
                  src={`/images/ES${index}.svg`}
                  alt={`ES${index}`}
                  width={26}
                  height={31}
                />
              </motion.div>
            ))}
          </div>
        </CustomCard>

        {/* Card 3 */}
        <CustomCard className='relative bg-[url(/images/5XP.png)]'>
          <div className='gap-md md:gap-xl flex-center m-6 flex h-1/2 flex-col text-center text-white'>
            <h5 className='text-display-sm md:text-display-md z-10 leading-[38px] font-bold md:leading-[46px] md:tracking-tight'>
              5+ Years
              <br />
              Experience
            </h5>
          </div>

          {/* Gradient */}
          <div className='absolute top-0 size-full rounded-xl bg-linear-to-t from-black to-transparent/0 md:rounded-2xl' />
          {/* Container */}
          <div className='flex-center gap-lg absolute top-4/6 left-1/2 z-10 -translate-x-1/2'>
            <Image
              src='/images/Work1.svg'
              alt='5XP'
              width={95}
              height={71}
              className='rounded-md'
            />
            <Image
              src='/images/Work2.svg'
              alt='5XP'
              width={95}
              height={71}
              className='rounded-md'
            />
            <Image
              src='/images/Work4.svg'
              alt='5XP'
              width={95}
              height={71}
              className='rounded-md'
            />
          </div>
        </CustomCard>

        {/* Card 4 */}
        <CustomCard className='bg-primary-300 relative overflow-hidden'>
          <div className='gap-md md:gap-xl flex-center m-6 flex h-2/3 flex-col text-center text-[#F39C3F]'>
            <h3 className='text-[71.63px] leading-[90px] font-bold md:leading-[46px] md:tracking-tight'>
              EDWIN
              <br /> <br />
              ANDERSON
            </h3>
          </div>

          {/* Me */}
          <Image
            src='/Me.svg'
            alt='Me'
            width={700}
            height={700}
            className='absolute bottom-0 left-1/2 z-10 -translate-x-1/2'
          />

          {/* Pattern */}
          <Image
            src='/images/Pattern.svg'
            alt='Pattern'
            width={1000}
            height={1000}
            className='absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2'
          />

          {/* Hire Me */}
          <Button className='absolute bottom-6 left-1/2 z-20 h-[48px] w-[172px] -translate-x-1/2'>
            <Mail size={20} />
            Hire Me
          </Button>
        </CustomCard>

        {/* Card 5 */}
        <CustomCard className='relative h-[452px] overflow-hidden bg-linear-to-r from-[#002C6E] to-[#0C4EAF] md:col-span-2'>
          <div className='gap-md md:gap-xl m-6 flex flex-col text-white'>
            <h5 className='text-display-sm md:text-display-md z-10 leading-[38px] font-bold md:leading-[46px] md:tracking-tight'>
              Building Digital
            </h5>
            <h5 className='text-display-sm md:text-display-md gap-lg z-10 mx-0 flex items-center leading-[38px] font-bold md:leading-[46px] md:tracking-tight'>
              Products <Stars color='white' size={24} strokeWidth={2} />
            </h5>
          </div>

          {/* Text */}
          <div className='gap-3xl m-6 flex w-[170px] flex-col justify-between md:w-[720px] md:flex-row md:gap-[39px] md:pt-[100px]'>
            <div className='text-neutral-25 flex flex-col'>
              <h3 className='md:text-display-2xl text-display-lg leading-[48px] font-bold md:leading-[60px] md:tracking-tight'>
                50+
              </h3>
              <p className='text-sm leading-7 font-medium md:text-lg md:leading-8'>
                Global Client’s Handle
              </p>
            </div>

            <div className='text-neutral-25 flex flex-col'>
              <h3 className='md:text-display-2xl text-display-lg leading-[48px] font-bold md:leading-[60px] md:tracking-tight'>
                99%
              </h3>
              <p className='text-sm leading-7 font-medium md:text-lg md:leading-8'>
                Client Satisfaction Rate
              </p>
            </div>

            <div className='text-neutral-25 flex flex-col'>
              <h3 className='md:text-display-2xl text-display-lg leading-[48px] font-bold md:leading-[60px] md:tracking-tight'>
                100+
              </h3>
              <p className='text-sm leading-7 font-medium md:text-lg md:leading-8'>
                Project Delivered
              </p>
            </div>
          </div>

          {/* Globe */}
          <Image
            src='/images/world.svg'
            alt='Globe'
            width={700}
            height={700}
            className='absolute top-1/2 -translate-y-1/2 opacity-10 md:right-0 md:h-[400px] md:w-[500px]'
          />
          {/* Flag */}
          <motion.div>
            <Image
              src='/images/indo.svg'
              alt='Flag'
              width={70}
              height={32}
              className='absolute right-1/8 bottom-1/6 md:right-0 md:bottom-1/3'
            />
            <Image
              src='/images/German.svg'
              alt='Flag'
              width={70}
              height={32}
              className='absolute top-1/3 right-1/4'
            />
            <Image
              src='/images/US.svg'
              alt='Flag'
              width={70}
              height={32}
              className='absolute top-1/2 right-1/12 md:top-1/3 md:right-1/2'
            />
          </motion.div>
        </CustomCard>
      </div>
    </section>
  );
};

export default AboutMe;
