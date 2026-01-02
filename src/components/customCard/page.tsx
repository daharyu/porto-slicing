'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'motion/react';

type Props = {
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
};

const CustomCard = ({ className, children, ref }: Props) => {
  return (
    <motion.div
      className={cn(
        'h-[375px] rounded-xl md:h-[395px] md:rounded-2xl',
        className
      )}
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: -100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
    >
      {children}
    </motion.div>
  );
};

export default CustomCard;
