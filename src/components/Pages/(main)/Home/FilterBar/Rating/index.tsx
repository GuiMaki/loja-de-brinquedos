/* eslint-disable no-unused-vars */
'use client';

import { useRef } from 'react';

import RatingStars from './RatingStars';

type RatingSelectorProps = {
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
};

const RatingSelector = ({
  selectedRating,
  setSelectedRating,
}: RatingSelectorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <span className="font-roboto text-xl font-normal text-neutral-100">
        Preço
      </span>

      <div ref={containerRef} className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map(r => (
          <RatingStars
            key={r}
            rating={r}
            selected={selectedRating === r}
            onPress={() => setSelectedRating(r)}
          />
        ))}
      </div>
    </>
  );
};

export default RatingSelector;
