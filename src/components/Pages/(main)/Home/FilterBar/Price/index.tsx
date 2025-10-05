/* eslint-disable no-unused-vars */
'use client';

import { useRef } from 'react';

import colors from '@/global/colors';

type PriceRangeSelectorProps = {
  selectedPrice: string | null;
  setSelectedPrice: (price: string | null) => void;
};

const PriceRangeSelector = ({
  selectedPrice,
  setSelectedPrice,
}: PriceRangeSelectorProps) => {
  const priceOptions = [
    { id: 1, label: 'Até R$ 100' },
    { id: 2, label: 'De R$ 100 a R$ 200' },
    { id: 3, label: 'De R$ 200 a R$ 300' },
    { id: 4, label: 'De R$ 300 a R$ 400' },
    { id: 5, label: 'De R$ 400 a R$ 500' },
    { id: 6, label: 'Mais de R$ 500' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const togglePrice = (priceLabel: string) => {
    setSelectedPrice(selectedPrice === priceLabel ? null : priceLabel);
  };

  return (
    <>
      <span className="font-roboto text-xl font-normal text-neutral-100">
        Preço
      </span>

      <div ref={containerRef} className="flex flex-col gap-2">
        {priceOptions.map(price => (
          <span
            key={price.id}
            className="cursor-pointer font-roboto text-sm font-normal"
            style={{
              color:
                selectedPrice === price.label
                  ? colors.primary[100]
                  : colors.neutral[80],
              textDecoration:
                selectedPrice === price.label ? 'underline' : 'none',
            }}
            onClick={() => togglePrice(price.label)}
          >
            {price.label}
          </span>
        ))}
      </div>
    </>
  );
};

export default PriceRangeSelector;
