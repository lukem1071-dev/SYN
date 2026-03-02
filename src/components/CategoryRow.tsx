import { ReactNode } from 'react';

interface CategoryRowProps {
  title: string;
  children: ReactNode;
}

export default function CategoryRow({ title, children }: CategoryRowProps) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 px-4 md:px-8 text-charcoal">
        {title}
      </h2>
      <div className="relative group">
        <div className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 scroll-smooth snap-x snap-mandatory">
          {children}
        </div>
      </div>
    </div>
  );
}
