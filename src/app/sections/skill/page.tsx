'use client';
import { skillData } from '@/app/constants/skill-data';
import CustomCard from '@/components/customCard/page';
import AnimatedProgressBar from '@/components/smoothui/animated-progress-bar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import React, { useState } from 'react';

const SkillPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the index range
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the data to show only 3 items
  const currentItems = skillData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <section className='section' id='skill'>
        <h1 className='md:text-display-2xl text-display-md text-center leading-[46px] font-bold tracking-tight md:leading-[60px]'>
          My Profesional Skill
        </h1>

        {/* Card Container */}
        <div className='gap-xl md:gap-2xl grid grid-cols-1 md:grid-cols-2'>
          {/* Card 1 */}
          {currentItems.map((data) => (
            <CustomCard
              className='md:p-xl p-lg flex h-[172px] flex-col shadow-md shadow-[#A5A5A533] md:h-[185px]'
              key={data.name}
            >
              {/* Text Desc */}
              <div className='gap-md flex flex-col'>
                {/* Judul */}
                <div className='gap-lg flex'>
                  <div className='flex-center size-10 rounded-full bg-neutral-100'>
                    <Image
                      src={data.icon}
                      alt='skill1'
                      width={25}
                      height={100}
                      className={`${data.name === 'GitHub' && 'invert'}`}
                    />
                  </div>
                  <div className='gap-md flex flex-col'>
                    <h3 className='text-md my-auto leading-[30px] font-semibold md:text-lg md:leading-[32px]'>
                      {data.name}
                    </h3>
                  </div>
                </div>

                {/* Deskripsi */}
                <p className='md:text-md text-sm leading-7 md:leading-[30px]'>
                  {data.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div className='gap-xl flex'>
                <AnimatedProgressBar value={data.score} />
                <span className='md:text-md text-sm leading-7 font-semibold md:leading-[30px]'>
                  {data.score}%
                </span>
              </div>
            </CustomCard>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <div
                className={`h-[12px] cursor-pointer rounded-full ${currentPage === 1 ? 'bg-primary-200 w-[32px]' : 'w-[16px] bg-neutral-300'}`}
                onClick={() => setCurrentPage(1)}
              />
            </PaginationItem>
            <PaginationItem>
              <div
                className={`h-[12px] cursor-pointer rounded-full ${currentPage === 2 ? 'bg-primary-200 w-[32px]' : 'w-[16px] bg-neutral-300'}`}
                onClick={() => setCurrentPage(2)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
};

export default SkillPage;
