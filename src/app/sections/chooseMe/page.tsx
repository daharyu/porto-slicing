'use client';
import { IsiTable } from '@/app/constants/table-data';
import CustomCard from '@/components/customCard/page';
import { CheckCircle2, Table, XCircleIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const ChooseMePage = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // this returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      <section className='section bg-neutral-100'>
        <h1 className='md:text-display-2xl text-display-md text-center leading-[46px] font-bold tracking-tight md:leading-[60px]'>
          Why Choose Me
        </h1>

        {/* Table */}
        <CustomCard className='py-xl px-lg h-[595px] items-center rounded-xl bg-white text-center md:h-[610px] md:rounded-2xl'>
          <table className='w-full'>
            <thead>
              <tr className='bg-primary-200 h-14 text-sm leading-7 font-semibold text-white md:text-lg md:leading-8'>
                <th className='w-3/5 rounded-l-full md:w-1/3'>Skill</th>
                <th className='w-1/5 md:w-1/3'>Me</th>
                <th className='w-1/5 rounded-r-full md:w-1/3'>Other</th>
              </tr>
            </thead>
            <tbody>
              {IsiTable.map((item, index) => (
                <tr
                  key={index}
                  className='h-[72px] border-b text-sm leading-7 font-medium md:text-lg md:leading-8'
                >
                  <td className='w-3/5 md:w-1/3'>{item.Skill}</td>
                  <td className='w-1/5 md:w-1/3'>
                    {item.Me ? (
                      <CheckCircle2
                        color='white'
                        fill='#E17B0E'
                        strokeWidth={2}
                        size={28}
                        className='mx-auto'
                      />
                    ) : (
                      <XCircleIcon
                        color='white'
                        fill='#A4A7AE'
                        strokeWidth={2}
                        size={28}
                        className='mx-auto'
                      />
                    )}
                  </td>
                  <td className='w-1/5 md:w-1/3'>
                    {item.Other ? (
                      <CheckCircle2
                        color='white'
                        fill='#E17B0E'
                        strokeWidth={2}
                        size={28}
                        className='mx-auto'
                      />
                    ) : (
                      <XCircleIcon
                        color='white'
                        fill='#A4A7AE'
                        strokeWidth={2}
                        size={28}
                        className='mx-auto'
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CustomCard>
      </section>
    </>
  );
};

export default ChooseMePage;
