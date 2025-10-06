'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { ProductsOfCatregoryData } from '@/assets/Data/ProductsOfCategory';
import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';
import BrandSelector from '@/components/Pages/(main)/Home/FilterBar/Brands';
import PriceRangeSelector from '@/components/Pages/(main)/Home/FilterBar/Price';
import RatingSelector from '@/components/Pages/(main)/Home/FilterBar/Rating';
import ProductCard from '@/components/Pages/(main)/Home/ProductCard';
import Icon from '@/components/UI/Icon';
import SearchBar from '@/components/UI/SearchBar';
import colors from '@/global/colors';

const Products = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [search, setSearch] = useState('');

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleFilterClean = () => {
    setSelectedBrands([]);
    setSelectedPrice(null);
    setSelectedRating(null);
  };

  const category = ProductsOfCatregoryData.find(cat => cat.category.id === id);

  const products = category?.category.products || [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header canGoBack page="Categories" />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8">
        <div className="flex justify-between p-3">
          <div className="flex gap-3">
            <div
              className="hover:bg-neutral-20 h-fit cursor-pointer rounded-full hover:opacity-60"
              onClick={() => router.back()}
            >
              <Icon fill={colors.neutral[80]} name="ArrowIcon" size={32} />
            </div>

            <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
              {category?.category.name}
            </span>
          </div>

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

          <div className="grid grid-cols-5 gap-12">
            {products.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                rateAmmount={product.rateAmmount}
                rating={product.rating}
                width={280}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
