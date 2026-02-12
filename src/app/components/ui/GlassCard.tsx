import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300",
        hoverEffect && "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,45,85,0.15)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
