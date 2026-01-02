import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import CustomCard from './customCard/page';
import Image from 'next/image';

export const AlertSuccess = () => {
  return (
    <>
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
            Thank you for reaching out. I’ll get back to you as soon as possible
          </p>
        </div>
        <AlertDialogCancel className='bg-primary-300 text-neutral-25 hover:bg-primary-300/70 h-[48px] w-[310px] rounded-full text-sm leading-7 font-medium'>
          Back to Home
        </AlertDialogCancel>
      </CustomCard>
    </>
  );
};
