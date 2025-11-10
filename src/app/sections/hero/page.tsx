'use client';
import Image from 'next/image';
import { motion, scale } from 'motion/react';
import { Star, Verified } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useDevice } from '@/app/hook/useIsMobile';

const HeroPage = () => {
  const device = useDevice();
  return (
    <>
      <section className='bg-primary-400 relative h-[clamp(700px,90vw,890px)] w-full items-center overflow-y-hidden md:h-[clamp(700px,90vw,890px)]'>
        <h1 className='text-display-xl absolute top-[150px] left-[11px] z-10 text-6xl leading-tight font-extrabold text-[#FDFDFD] md:top-36 md:left-[25px] md:text-[clamp(60px,15vw,150px)] md:leading-[clamp(78px,19.5vw,195px)]'>
          EDWIN ANDERSON
        </h1>

        {/* Image */}
        <motion.div
          className='absolute bottom-0 left-1/2 z-20 h-[clamp(300px,45vw,660px)] w-[clamp(300px,42vw,630px)] -translate-x-1/2 object-cover'
          animate={{ scale: 1.2 }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.2 }}
          viewport={{ amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        >
          <Image
            src='/Me.svg'
            alt='hero'
            width={700}
            height={700}
            sizes='100vw'
            className='size-[300px] md:size-[700px]'
          />
        </motion.div>

        {/* bg lingkaran */}
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[clamp(90px,18vw,180px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/80'
          animate={{ scale: 2 }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        ></motion.div>
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[clamp(145px,29vw,290px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/60'
          animate={{ scale: 2 }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.1,
          }}
        ></motion.div>
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[clamp(200px,40vw,400px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/40'
          animate={{ scale: 2 }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.2,
          }}
        ></motion.div>
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[250px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/20 md:size-[500px]'
          animate={{ scale: 2 }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.3,
          }}
        ></motion.div>

        {/* Self Promote Star */}
        <motion.div
          className='gap-xxs p-lg absolute top-[420px] left-[123px] flex h-[136px] w-36 flex-col rounded-xl border border-[#FDFDFD]/10 bg-[#28282833]/20 backdrop-blur-md md:top-[650px] md:left-[650px] md:h-48 md:w-[200px]'
          animate={{
            rotate: device === 'mobile' ? 6.73 : 3.15,
            x: device === 'mobile' ? -50 : -300,
            y: -150,
          }}
          initial={{
            rotate: 0,
            x: 0,
            y: 0,
          }}
          whileInView={{
            rotate: device === 'mobile' ? 6.73 : 3.15,
            x: device === 'mobile' ? -50 : -300,
            y: -150,
          }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.8,
          }}
        >
          <h4 className='text-display-xs md:text-display-xl leading-9 font-bold text-[#FDFDFD] md:leading-14'>
            5.0
          </h4>
          <div className='gap-xxs flex md:gap-1'>
            <Star
              size={24}
              className='md:size-4xl'
              color='orange'
              fill='orange'
            />
            <Star
              size={24}
              className='md:size-4xl'
              color='orange'
              fill='orange'
            />
            <Star
              size={24}
              className='md:size-4xl'
              color='orange'
              fill='orange'
            />
            <Star
              size={24}
              className='md:size-4xl'
              color='orange'
              fill='orange'
            />
            <Star
              size={24}
              className='md:size-4xl'
              color='orange'
              fill='orange'
            />
          </div>
          <h5 className='text-neutral-25 text-xs leading-[24px] font-medium md:text-sm md:leading-7'>
            Many Client Trust with me
          </h5>
        </motion.div>

        {/* Client */}
        <motion.div
          className='gap-xxs p-lg absolute top-[clamp(500px,48vw,600px)] left-[clamp(120px,3vw,40.625rem)] flex h-[136px] w-36 flex-col rounded-xl border border-[#FDFDFD]/10 bg-[#28282833]/20 backdrop-blur-md md:top-[600px] md:left-[650px] md:h-48 md:w-52'
          animate={{ rotate: 5.31, x: device === 'mobile' ? 160 : 350 }}
          initial={{ rotate: 0, x: 0 }}
          whileInView={{ rotate: 5.31, x: device === 'mobile' ? 160 : 350 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 1,
          }}
        >
          <h4 className='text-display-xs md:text-display-xl leading-9 font-bold text-[#FDFDFD] md:leading-14'>
            50+
          </h4>
          <h5 className='text-neutral-25 text-xs leading-[24px] font-medium md:text-sm md:leading-7'>
            Global Clients
          </h5>
          <div className='flex -space-x-2'>
            <Avatar className='size-3xl md:size-[52px]'>
              <AvatarImage
                src='/images/Client1.jpg'
                alt='client1'
                className='size-3xl md:size-[52px]'
              />
            </Avatar>
            <Avatar className='size-3xl md:size-[52px]'>
              <AvatarImage
                src='/images/Client2.jpg'
                alt='client2'
                className='size-3xl md:size-[52px]'
              />
            </Avatar>
            <Avatar className='size-3xl md:size-[52px]'>
              <AvatarImage
                src='/images/Client3.jpg'
                alt='client3'
                className='size-3xl md:w-[52px]'
              />
            </Avatar>
            <Avatar className='size-3xl md:size-[52px]'>
              <AvatarImage
                src='/images/Client4.jpg'
                alt='client4'
                className='size-3xl md:size-[52px]'
              />
            </Avatar>
          </div>
        </motion.div>

        {/* Frontend Developer */}
        <motion.div
          className='gap-xxs p-lg absolute top-[clamp(500px,55vw,800px)] left-[clamp(120px,28vw,550px)] flex flex-col rounded-xl border border-[#FDFDFD]/10 bg-[#28282833]/20 backdrop-blur-md md:top-[800px] md:left-[550px]'
          animate={{
            rotate: device === 'mobile' ? -10.09 : -3.24,
            x: device === 'mobile' ? -120 : -300,
            y: device === 'mobile' ? 50 : -50,
          }}
          initial={{ rotate: 0, x: 0, y: 0 }}
          whileInView={{
            rotate: device === 'mobile' ? -10.09 : -3.24,
            x: device === 'mobile' ? -120 : -300,
            y: device === 'mobile' ? 50 : -50,
          }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 1.2,
          }}
        >
          <h4 className='md:text-display-xs text-sm leading-7 font-bold text-[#FDFDFD] md:leading-9'>
            Frontend Developer
          </h4>
          <h5 className='text-neutral-25 gap-xxs flex text-xs leading-[24px] font-medium md:text-sm md:leading-7'>
            <Verified fill='white' color='#6600EBCC' />
            React Expert
          </h5>
        </motion.div>
      </section>
    </>
  );
};

export default HeroPage;
