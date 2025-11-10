import { clientData } from '@/app/constants/client-data';
import CustomCard from '@/components/customCard/page';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ClientStory = () => {
  return (
    <>
      <section className='section' id='skill'>
        <h1 className='md:text-display-2xl text-display-md text-center leading-[46px] font-bold tracking-tight md:leading-[60px]'>
          Success Stories from Clients
        </h1>

        {/* Container */}
        <div className='gap-2xl grid grid-cols-1 md:grid-cols-3'>
          {clientData.map((data, index) => (
            <CustomCard
              key={index}
              className={`gap-2xl md:p-3xl p-xl flex flex-col shadow-lg md:gap-8 ${index >= 1 ? 'hidden md:flex' : ''} h-fit md:h-fit`}
            >
              <div className='md:gap-xl gap-lg flex flex-col items-center text-center'>
                <Image
                  src={data.image}
                  alt={data.name}
                  width={100}
                  height={100}
                  className='h-[32px] w-[102px] md:h-[50px] md:w-[115px]'
                />
                <p className='md:text-md leadung-7 text-sm font-medium md:leading-[30px]'>
                  Thanks to their expertise, our website is now faster, more
                  responsive, and visually stunning. We’ve seen a significant
                  increase in user engagement!
                </p>
              </div>

              <div className='gap-lg md:gap-xl flex flex-col'>
                <div className='gap-xs flex-center'>
                  {[1, 2, 3, 4, 5].map((data, index1) => (
                    <Star
                      key={index1}
                      size={32}
                      fill='#F3993F'
                      color='transparent'
                    />
                  ))}
                </div>
                {/* Name */}
                <div className='md:text-md text-center text-sm leading-7 md:leading-[30px]'>
                  <h6 className='font-semibold text-neutral-950'>
                    {data.name}
                  </h6>
                  <p className='text-neutral-600'>{data.job}</p>
                </div>
              </div>
            </CustomCard>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <div className='bg-primary-200 h-[12px] w-[32px] rounded-full' />
            </PaginationItem>
            <PaginationItem>
              <div className='h-[12px] w-[16px] rounded-full bg-neutral-300' />
            </PaginationItem>
            <PaginationItem>
              <div className='h-[12px] w-[16px] rounded-full bg-neutral-300' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
};

export default ClientStory;
