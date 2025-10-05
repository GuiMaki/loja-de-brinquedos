/* eslint-disable no-unused-vars */
'use client';

import { useEffect, useRef, useState } from 'react';

import { Brands } from '@/assets/Data/Brands';
import Icon from '@/components/UI/Icon';
import LabelCheckbox from '@/components/UI/LabelCheckbox';

type BrandSelectorProps = {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
};

const BrandSelector = ({
  selectedBrands,
  setSelectedBrands,
}: BrandSelectorProps) => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleBrand = (brandName: string) => {
    setSelectedBrands(
      selectedBrands.includes(brandName)
        ? selectedBrands.filter(b => b !== brandName)
        : [...selectedBrands, brandName],
    );
  };

  useEffect(() => {
    if (containerRef.current) {
      const itemHeight = containerRef.current.scrollHeight / Brands.length;
      setMaxHeight(
        expanded
          ? `${containerRef.current.scrollHeight}px`
          : `${itemHeight * 4}px`,
      );
    }
  }, [expanded, selectedBrands]);

  return (
    <>
      <span className="font-roboto text-xl font-normal text-neutral-100">
        Marcas
      </span>

      <div
        ref={containerRef}
        className="flex flex-col gap-2 overflow-hidden transition-[max-height] duration-200 ease-linear"
        style={{ maxHeight }}
      >
        {Brands.map(brand => (
          <LabelCheckbox
            key={brand.id}
            label={brand.name}
            selected={selectedBrands.includes(brand.name)}
            onPress={() => toggleBrand(brand.name)}
          />
        ))}
      </div>

      {Brands.length > 4 && (
        <div
          className="flex cursor-pointer items-center"
          style={{ gap: expanded ? 8 : 22 }}
          onClick={() => setExpanded(prev => !prev)}
        >
          <span className="text-secondary-100 font-roboto text-base font-light">
            Ver {expanded ? 'menos' : 'mais'}
          </span>

          <div
            style={{
              display: 'inline-block',
              transform: `rotate(${expanded ? -180 : 0}deg)`,
              transition: 'transform 0.3s ease',
            }}
          >
            <Icon color="#5B21B6" name="ChevronIcon" size={24} />
          </div>
        </div>
      )}
    </>
  );
};

export default BrandSelector;
