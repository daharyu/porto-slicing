import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { ArrowRight } from 'lucide-react';
import { data } from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';

const WorkPage = () => {
  return (
    <>
      <section className='section' id='project'>
        <h1 className='md:text-display-2xl text-display-md text-center leading-[46px] font-bold tracking-tight md:leading-[60px]'>
          My Latest Work
        </h1>

        {/* Container */}
        <div className='gap-5xl grid grid-cols-1 md:grid-cols-3'>
          {/* Dashboard1 */}
          {[1, 2, 3, 4, 5, 6].map((data, index) => (
            <div className='gap-xl md:gap-2xl flex flex-col' key={index}>
              {/* Up */}
              <div className='flex justify-between'>
                <div className='py-xs px-xl h-7 rounded-full border border-dashed border-neutral-400 md:h-9'>
                  Dashboard
                </div>
                <div className='py-xs px-xl h-7 rounded-full border border-dashed border-neutral-400 md:h-9'>
                  2024
                </div>
              </div>

              {/* Middle */}
              <Image
                src={`/images/Work${index + 1}.svg`}
                alt={`work${index + 1}`}
                width={400}
                height={400}
                className='h-[270px] w-[361px] rounded-lg md:size-[400px] md:h-[284px] md:w-[381px] md:rounded-xl'
              />

              {/* Description */}
              <h3 className='text-md leading-[30px] font-semibold md:text-xl md:leading-[34px]'>
                Dashboard SaaS Task Management
              </h3>

              {/* Link */}
              <div className='gap-md text-primary-300 md:text-md flex text-sm leading-7 font-medium md:leading-[30px]'>
                <Link href='/'>Visite Website</Link>
                <ArrowRight color='#6600EB' size={24} />
              </div>
            </div>
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

export default WorkPage;
