import CustomCard from '@/components/customCard/page';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import { MinusCircle, PlusCircle } from 'lucide-react';
import Image from 'next/image';

const FAQPage = () => {
  return (
    <>
      <section className='section' id='faq'>
        <CustomCard className='py-2xl px-xl md:p-5xl gap-2xl flex h-fit flex-col rounded-2xl bg-neutral-50 md:h-fit md:flex-row md:gap-[153px] md:rounded-4xl'>
          {/* Left */}
          <div className='flex w-[357px] flex-col justify-between gap-[203px]'>
            <div className='gap-xl flex w-[267px] flex-col'>
              <div className='flex-center bg-primary-100 size-12 rounded-full'>
                <Image
                  src='/message-chat-square.svg'
                  alt='faq'
                  width={24}
                  height={24}
                />
              </div>
              <h1 className='md:text-display-2xl text-display-md leading-[46px] font-bold tracking-tight md:leading-[60px]'>
                Have Questions?
              </h1>
            </div>
            <CustomCard className='gap-xl p-3xl hidden flex-col border border-neutral-300 bg-white md:flex md:h-fit md:w-[357px]'>
              <div className='flex-center bg-secondary-200 size-20 overflow-hidden rounded-full'>
                <Image src='/Me.svg' alt='faqMe' width={80} height={80} />
              </div>
              <p className='text-lg leading-[32px]'>
                Have more questions? <br /> Send me a message.
              </p>
              <Button variant='primary' className='h-12'>
                Get in touch
              </Button>
            </CustomCard>
          </div>

          {/* Right */}
          <div className='my-auto w-full'>
            <Accordion
              type='single'
              defaultValue='item-1'
              className='w-full'
              collapsible
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className='text-md data-[state=open]:text-primary-300 my-lg md:my-2xl flex w-full justify-between text-left leading-[30px] font-semibold md:text-xl md:leading-[34px] [&[data-state=closed]_svg[data-minus]]:hidden [&[data-state=open]_svg[data-plus]]:hidden'>
                    What’s your approach to front-end development?
                    <PlusCircle
                      data-plus
                      color='white'
                      fill='#6600EB'
                      size={40}
                      className='size-6 shrink-0 transition-transform duration-200 md:size-10'
                    />
                    <MinusCircle
                      fill='#6600EB'
                      data-minus
                      color='white'
                      size={40}
                      className='size-6 shrink-0 transition-transform duration-200 md:size-10'
                    />
                  </AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-4 text-balance'>
                    <p className='md:text-md text-sm leading-7 text-neutral-700 md:leading-[30px]'>
                      I focus on clean, maintainable code and prioritize user
                      experience. My approach involves close collaboration with
                      designers to ensure exact implementation and seamless
                      interactions across all devices.
                    </p>
                  </AccordionContent>
                  <hr className='bg-neutral-300' />
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <CustomCard className='gap-xl p-3xl flex h-fit flex-col border border-neutral-300 bg-white md:hidden md:w-[357px]'>
            <div className='flex-center bg-secondary-200 size-[60px] overflow-hidden rounded-full'>
              <Image src='/Me.svg' alt='faqMe' width={60} height={60} />
            </div>
            <p className='text-sm leading-7'>
              Have more questions? <br /> Send me a message.
            </p>
            <Button variant='primary' className='h-12'>
              Get in touch
            </Button>
          </CustomCard>
        </CustomCard>
      </section>
    </>
  );
};

export default FAQPage;
