'use client';

import { useState } from 'react';

import Header from '@/Components/Pages/(main)/Header';
import BrandSelector from '@/Components/Pages/(main)/Home/FilterBar/Brands';
import PriceRangeSelector from '@/Components/Pages/(main)/Home/FilterBar/Price';
import RatingSelector from '@/Components/Pages/(main)/Home/FilterBar/Rating';
import SearchBar from '@/Components/UI/SearchBar';

const Home = () => {
  const [search, setSearch] = useState('');

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleFilterClean = () => {
    setSelectedBrands([]);
    setSelectedPrice(null);
    setSelectedRating(null);
  };

  return (
    <div className="flex-1">
      <Header page="Home" />

      <div className="flex flex-col gap-8 px-6 py-8">
        <div className="flex justify-between p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Brinquedos em destaque
          </span>

          <SearchBar
            placeholder="Pesquise pelo nome do brinquedo"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3 rounded-xl bg-white py-4 pl-4 pr-20">
            {(selectedBrands.length > 0 || selectedPrice || selectedRating) && (
              <span
                className="text-primary-100 cursor-pointer font-roboto text-sm font-semibold"
                onClick={handleFilterClean}
              >
                Limpar filtros
              </span>
            )}

            <BrandSelector
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />

            <PriceRangeSelector
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />

            <RatingSelector
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
