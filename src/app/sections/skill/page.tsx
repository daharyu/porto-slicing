import CustomCard from '@/components/customCard/page';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import React from 'react';

const SkillPage = () => {
  return (
    <>
      <section className='section' id='skill'>
        <h1 className='md:text-display-2xl text-display-md text-center leading-[46px] font-bold tracking-tight md:leading-[60px]'>
          My Profesional Skill
        </h1>

        {/* Card Container */}
        <div className='gap-xl md:gap-2xl grid grid-cols-1 md:grid-cols-2'>
          {/* Card 1 */}
          <CustomCard className='md:p-xl p-lg flex h-[172px] flex-col shadow-md shadow-[#A5A5A533] md:h-[185px]'>
            {/* Text Desc */}
            <div className='gap-md flex flex-col'>
              {/* Judul */}
              <div className='gap-lg flex'>
                <div className='flex-center size-10 rounded-full bg-neutral-100'>
                  <Image
                    src='/images/ES2.svg'
                    alt='skill1'
                    width={25}
                    height={100}
                  />
                </div>
                <div className='gap-md flex flex-col'>
                  <h3 className='text-md my-auto leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
                    HTML
                  </h3>
                </div>
              </div>

              {/* Deskripsi */}
              <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
                Building the structure of web pages with semantic markup for
                accessibility .
              </p>
            </div>

            {/* Progress Bar */}
            <div className='gap-xl flex'>
              <Progress value={90} className='my-auto rounded-full' />
              <span className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                90%
              </span>
            </div>
          </CustomCard>

          {/* Card 2 */}
          <CustomCard className='md:p-xl p-lg flex h-[172px] flex-col shadow-md shadow-[#A5A5A533] md:h-[185px]'>
            {/* Text Desc */}
            <div className='gap-md flex flex-col'>
              {/* Judul */}
              <div className='gap-lg flex'>
                <div className='flex-center size-10 rounded-full bg-neutral-100'>
                  <Image
                    src='/images/ES0.svg'
                    alt='skill2'
                    width={25}
                    height={100}
                  />
                </div>
                <div className='gap-md flex flex-col'>
                  <h3 className='text-md my-auto leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
                    CSS
                  </h3>
                </div>
              </div>

              {/* Deskripsi */}
              <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
                Building the structure of web pages with semantic markup for
                accessibility .
              </p>
            </div>

            {/* Progress Bar */}
            <div className='gap-xl flex'>
              <Progress value={90} className='my-auto rounded-full' />
              <span className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                90%
              </span>
            </div>
          </CustomCard>

          {/* Card 3 */}
          <CustomCard className='md:p-xl p-lg flex h-[172px] flex-col shadow-md shadow-[#A5A5A533] md:h-[185px]'>
            {/* Text Desc */}
            <div className='gap-md flex flex-col'>
              {/* Judul */}
              <div className='gap-lg flex'>
                <div className='flex-center size-10 rounded-full bg-neutral-100'>
                  <Image
                    src='/images/ES1.svg'
                    alt='skill3'
                    width={25}
                    height={100}
                  />
                </div>
                <div className='gap-md flex flex-col'>
                  <h3 className='text-md my-auto leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
                    Javascript
                  </h3>
                </div>
              </div>

              {/* Deskripsi */}
              <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
                Building the structure of web pages with semantic markup for
                accessibility .
              </p>
            </div>

            {/* Progress Bar */}
            <div className='gap-xl flex'>
              <Progress value={90} className='my-auto rounded-full' />
              <span className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                90%
              </span>
            </div>
          </CustomCard>

          {/* Card 4 */}
          <CustomCard className='md:p-xl p-lg hidden h-[172px] flex-col shadow-md shadow-[#A5A5A533] md:flex md:h-[185px]'>
            {/* Text Desc */}
            <div className='gap-md flex flex-col'>
              {/* Judul */}
              <div className='gap-lg flex'>
                <div className='flex-center size-10 rounded-full bg-neutral-100'>
                  <Image
                    src='/images/ES6.svg'
                    alt='skill4'
                    width={25}
                    height={100}
                  />
                </div>
                <div className='gap-md flex flex-col'>
                  <h3 className='text-md my-auto leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
                    React JS
                  </h3>
                </div>
              </div>

              {/* Deskripsi */}
              <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
                Building the structure of web pages with semantic markup for
                accessibility .
              </p>
            </div>

            {/* Progress Bar */}
            <div className='gap-xl flex'>
              <Progress value={90} className='my-auto rounded-full' />
              <span className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                90%
              </span>
            </div>
          </CustomCard>

          {/* Card 5 */}
          <CustomCard className='md:p-xl p-lg hidden h-[172px] flex-col shadow-md shadow-[#A5A5A533] md:flex md:h-[185px]'>
            {/* Text Desc */}
            <div className='gap-md flex flex-col'>
              {/* Judul */}
              <div className='gap-lg flex'>
                <div className='flex-center size-10 rounded-full bg-neutral-100'>
                  <Image
                    src='/images/ES9.svg'
                    alt='skill5'
                    width={25}
                    height={100}
                  />
                </div>
                <div className='gap-md flex flex-col'>
                  <h3 className='text-md my-auto leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
                    Mango DB
                  </h3>
                </div>
              </div>

              {/* Deskripsi */}
              <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
                Building the structure of web pages with semantic markup for
                accessibility .
              </p>
            </div>

            {/* Progress Bar */}
            <div className='gap-xl flex'>
              <Progress value={90} className='my-auto rounded-full' />
              <span className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                90%
              </span>
            </div>
          </CustomCard>

          {/* Card 6 */}
          <CustomCard className='md:p-xl p-lg hidden h-[172px] flex-col shadow-md shadow-[#A5A5A533] md:flex md:h-[185px]'>
            {/* Text Desc */}
            <div className='gap-md flex flex-col'>
              {/* Judul */}
              <div className='gap-lg flex'>
                <div className='flex-center size-10 rounded-full bg-neutral-100'>
                  <Image
                    src='/images/ES7.svg'
                    alt='skill6'
                    width={25}
                    height={100}
                  />
                </div>
                <div className='gap-md flex flex-col'>
                  <h3 className='text-md my-auto leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
                    Docker
                  </h3>
                </div>
              </div>

              {/* Deskripsi */}
              <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
                Building the structure of web pages with semantic markup for
                accessibility .
              </p>
            </div>

            {/* Progress Bar */}
            <div className='gap-xl flex'>
              <Progress value={90} className='my-auto rounded-full' />
              <span className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                90%
              </span>
            </div>
          </CustomCard>
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

export default SkillPage;
