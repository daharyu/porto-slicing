import { motion, Transition } from 'motion/react';

export type AnimatedProgressBarProps = {
  value: number; // 0-100
  label?: string;
  color?: string;
  className?: string;
  barClassName?: string;
  labelClassName?: string;
  /**
   * To replay the animation, change the React 'key' prop on this component from the parent.
   */
};

const MIN_PROGRESS_VALUE = 0;
const MAX_PROGRESS_VALUE = 100;

const SPRING: Transition = {
  type: 'spring',
  damping: 10,
  mass: 0.5,
  stiffness: 50,
};

export default function AnimatedProgressBar({
  value,
  label,
  color = '#6366f1',
  className = '',
  barClassName = '',
  labelClassName = '',
}: AnimatedProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className={`mb-1 text-sm font-medium ${labelClassName}`}>
          {label}
        </div>
      )}
      <div className='bg-primary/20 relative h-3 w-full overflow-hidden rounded-full'>
        <motion.div
          whileInView={{
            width: `${Math.max(MIN_PROGRESS_VALUE, Math.min(MAX_PROGRESS_VALUE, value))}%`,
          }}
          className={`bg-primary-300 h-full w-full flex-1 ${barClassName}`}
          initial={{ width: MIN_PROGRESS_VALUE }}
          style={{ backgroundColor: color }}
          transition={SPRING}
        />
      </div>
    </div>
  );
}
