'use client';

import { useState } from 'react';

import { DefaultImg } from '@/../public/Images';
import CategoryCard from '@/components/Pages/(main)/Categories/CategoryCard';
import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';
import Loader from '@/components/UI/Loader';
import SearchBar from '@/components/UI/SearchBar';
import colors from '@/global/colors';
import { useGetCategories } from '@/services/api/categories';

const Categories = () => {
  const [search, setSearch] = useState('');

  const { data, isFetching } = useGetCategories(search);

  return (
    <div className="flex min-h-screen flex-col">
      <Header page="Categories" />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8">
        <div className="flex justify-between p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Categorias
          </span>

          <SearchBar
            placeholder="Pesquise pelo nome da categoria"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </div>

        {isFetching ? (
          <div className="flex w-full justify-center">
            <Loader color={colors.primary[100]} size={60} />
          </div>
        ) : data && data.length > 0 ? (
          <div className="grid grid-cols-3 gap-12">
            {data.map(category => (
              <CategoryCard
                key={category.id}
                description={category.descricao}
                id={String(category.id)}
                image={category.imagem || DefaultImg}
                name={category.nome}
                productAmmount={category.quantidadeBrinquedos}
              />
            ))}
          </div>
        ) : (
          <span className="text-neutral-60 text-center font-lexend text-2xl font-medium">
            Nenhuma categoria encontrada
          </span>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
