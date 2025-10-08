'use client';

import { useState } from 'react';

import { HighlightedProductsData } from '@/assets/Data/HighlightedProducts';
import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';
import BrandSelector from '@/components/Pages/(main)/Home/FilterBar/Brands';
import PriceRangeSelector from '@/components/Pages/(main)/Home/FilterBar/Price';
import RatingSelector from '@/components/Pages/(main)/Home/FilterBar/Rating';
import ProductCard from '@/components/Pages/(main)/Home/ProductCard';
import SearchBar from '@/components/UI/SearchBar';

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
    <div className="flex min-h-screen flex-col">
      <Header page="Home" />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8">
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

        <div className="flex gap-14">
          <div className="flex h-fit flex-col gap-3 rounded-xl bg-white py-4 pl-4 pr-20">
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

          <div className="flex flex-wrap gap-12">
            {HighlightedProductsData.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={null}
                name={product.name}
                price={product.price}
                rateAmmount={product.rateAmmount}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
